import { useState, useEffect, useRef } from "react";
import axios from "axios";

export const Chatbox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [currentExpression, setCurrentExpression] = useState("neutral");
  const [aiSpeechBubble, setAiSpeechBubble] = useState<string | null>(null);
  const [pendingMessages, setPendingMessages] = useState<string[]>([]);
  const [isMessageCooldown, setIsMessageCooldown] = useState(false);
  const speechBubbleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastNonNeutralExpressionRef = useRef("neutral");
  const processingMessageRef = useRef(false);

  const spritePath = new URL(
    `/src/assets/sprites/${currentExpression}.webp`,
    import.meta.url
  ).href;


  //Grok APi configuration
  const GROK_API_BASE_URL = "https://api.x.ai/v1"; // Placeholder URL, verify the actual Grok API endpoint
  const GROK_API_KEY = import.meta.env.VITE_GROK_API_KEY; // Store API key in environment variable
  
  // Available store foods (you can expand this list)
  const availableFoods = [
    "Pizza", "Sushi", "Burger", "Salad", "Pasta", 
    "Chicken Wings", "Vegetarian Bowl", "Ramen", 
    "Breakfast Platter", "Smoothie"
  ];
  
  // List of expressions for the character
  const expressions = ["happy", "super happy", "neutral", "smug", "excited"];
  const [showInitialSpeechBubble, setShowInitialSpeechBubble] = useState(true);


  // Cooldown duration in milliseconds (e.g., 1.5 seconds)
  const MESSAGE_COOLDOWN = 1500;

  useEffect(() => {
    // Simulate delay before hiding initial speech bubble
    const timeoutId = setTimeout(() => {
      setShowInitialSpeechBubble(false);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Function to change expression
  const changeExpression = () => {
    const newExpression = expressions[Math.floor(Math.random() * expressions.length)];
    setCurrentExpression(newExpression);
    
    // Store the last non-neutral expression
    if (newExpression !== "neutral") {
      lastNonNeutralExpressionRef.current = newExpression;
    }
  };

  // Calculate speech bubble display time based on message length
  const calculateDisplayTime = (message: string) => {
    // Base time of 3 seconds, plus 100ms per character
    return Math.max(3000, message.length * 100);
  };

  const processPendingMessage = () => {
    // Prevent multiple simultaneous processing attempts
    if (processingMessageRef.current || pendingMessages.length === 0) return;

    processingMessageRef.current = true;

    const nextMessage = pendingMessages[0];
    
    // Show the next message
    setMessages((prev) => [
      ...prev,
      { sender: "AI", text: nextMessage },
    ]);
    setAiSpeechBubble(nextMessage);
    changeExpression();

    // Remove the processed message from pending messages
    setPendingMessages(prev => prev.slice(1));

    // Set timeout to hide speech bubble and revert expression
    speechBubbleTimeoutRef.current = setTimeout(() => {
      setAiSpeechBubble(null);
      setCurrentExpression("neutral");

      // Mark processing as complete and check for more pending messages
      processingMessageRef.current = false;

      // Only process next message if no other message is currently being processed
      if (pendingMessages.length > 0) {
        processPendingMessage();
      }
    }, calculateDisplayTime(nextMessage));
  };

  const sendMessage = async () => {
    // Prevent sending messages during cooldown
    if (!input || isMessageCooldown) return;

    // Immediately start cooldown
    setIsMessageCooldown(true);

    // Add user message
    setMessages((prev) => [...prev, { sender: "You", text: input }]);

    try {
      // Prepare the context with available store foods and user requirements
      const context = `
        You are a friendly food recommendation assistant named Chiaki.
        Available store foods: ${availableFoods.join(", ")}
        User's dietary preferences/requirements: ${input}
        
        Provide a concise, personalized food recommendation based on the available foods.
        Make it conversational and fun, matching the style of a playful AI assistant.
      `;

      // Simulate AI response generation (replace with actual API call)
      const aiResponse = await generateAIResponse(context);
      
      // If there's already an active speech bubble or message is being processed, 
      // add to pending messages
      if (aiSpeechBubble !== null || processingMessageRef.current) {
        setPendingMessages(prev => [...prev, aiResponse]);
        
        // End cooldown after a short delay
        setTimeout(() => setIsMessageCooldown(false), MESSAGE_COOLDOWN);
        return;
      }

      // If no active speech bubble, show the message immediately
      setMessages((prev) => [
        ...prev,
        { sender: "AI", text: aiResponse },
      ]);
      
      // Show AI speech bubble
      setAiSpeechBubble(aiResponse);
      changeExpression();

      // Set timeout to hide speech bubble and revert expression
      speechBubbleTimeoutRef.current = setTimeout(() => {
        setAiSpeechBubble(null);
        setCurrentExpression("neutral");

        // Process next pending message if any
        processPendingMessage();

        // End cooldown after speech bubble timeout
        setTimeout(() => setIsMessageCooldown(false), MESSAGE_COOLDOWN);
      }, calculateDisplayTime(aiResponse));

    } catch (error) {
      console.error("Error generating recommendation:", error);
      
      // Fallback response
      const fallbackResponse = "Oops! I'm having trouble finding the perfect recommendation right now. Maybe try describing what you're feeling hungry for?";
      
      setMessages((prev) => [
        ...prev,
        { sender: "AI", text: fallbackResponse },
      ]);
      
      // End cooldown
      setTimeout(() => setIsMessageCooldown(false), MESSAGE_COOLDOWN);
    }

    // Reset input
    setInput("");
  };

  // Simulated AI response generation (replace with actual API call)
  const generateAIResponse = async (context: string): Promise<string> => {
    try {
      // Ensure API key exists
      if (!GROK_API_KEY) {
        throw new Error("Grok API key is not configured");
      }
      console.log("API Key:", GROK_API_KEY ? "Present" : "Missing");
      console.log("API Base URL:", GROK_API_BASE_URL);
      console.log("Input Context:", context);
      console.log("User Input:", input);

  
      const response = await axios.post(
        `${GROK_API_BASE_URL}/chat/completions`, 
        {
          model: "grok-beta",
          messages: [
            { role: "system", content: context },
            { role: "user", content: input }
          ],
          stream: false,
          max_tokens: 100,
          temperature: 0.7
        },
        {
          headers: {
            "Authorization": `Bearer ${GROK_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );
  
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Grok API Error:", error);
      
      // Fallback to local generation if API call fails
      const responses = [
        `Based on your craving, I recommend our delicious ${availableFoods[Math.floor(Math.random() * availableFoods.length)]}!`,
        `Sounds like you'd love our special ${availableFoods[Math.floor(Math.random() * availableFoods.length)]} today!`,
        `I've got the perfect dish for you - our mouthwatering ${availableFoods[Math.floor(Math.random() * availableFoods.length)]}!`
      ];
      
      return responses[Math.floor(Math.random() * responses.length)];
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "4rem",
        right: "1rem",
        zIndex: 900,
        width: "275px",
        fontFamily: "Arial, sans-serif",
        fontSize: "0.75rem",
      }}
    >
      {/* Initial Speech Bubble */}
      {showInitialSpeechBubble && ( 
        <div
          style={{
            position: "absolute",
            bottom: "23rem",
            right: "130px",
            minWidth: "200px",
            maxWidth: "250px",
            padding: "10px",
            backgroundColor: "#E5E1DA",
            color: "black",
            borderRadius: "15px",
            fontSize: "15px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            textAlign: "center",
            zIndex: 900,
          }}
        >
          {"Hi! I'm Chiaki, your AI-powered food advisor. Tell me, what kind of cuisine are you craving today?"}
        </div>
      )}

      {/* AI Response Speech Bubble */}
      {aiSpeechBubble && (
        <div
          style={{
            position: "absolute",
            bottom: "23rem",
            right: "1rem",
            minWidth: "200px",
            maxWidth: "400px",
            width: "20rem",
            padding: "10px",
            backgroundColor: "#E6B8B7",
            border: "2px solid black",
            color: "black",
            borderRadius: "15px",
            fontSize: "15px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            textAlign: "center",
            zIndex: 900,
          }}
        >
          {aiSpeechBubble}
        </div>
      )}

            {/* Character Sprite */}
            <div
              style={{
                position: "absolute",
                bottom: "250px",
                right: "20rem",
                transform: "translateY(50%)",
                // Blue vibrant shadow effect
                filter: `drop-shadow(-20px 10px 1px rgba(0, 123, 255, 0.5))`, // Vibrant blue shadow
                //transition: "filter 0.3s ease", // Smooth transition for shadow
                // animation: "character-glow 2s infinite alternate", // Pulsating glow effect
              }}
              >
              <style>{`
                @keyframes character-glow {
                  from {
                    filter: drop-shadow(0 0 15px rgba(0, 123, 255, 0.4));
                  }
                  to {
                    filter: drop-shadow(0 0 25px rgba(0, 123, 255, 0.6));
                  }
                }
              `}</style>
              <img
                src={spritePath}
                alt={currentExpression}
                style={{
                  width: "300px",
                  height: "auto",
                }}
              />
            </div>

      {/* Floating Messages */}
      <div style={{ paddingBottom: "180px" }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              backgroundColor: msg.sender === "You" ? "#d4edda" : "#e2e3e5",
              color: msg.sender === "You" ? "#155724" : "#383d41",
              padding: "0.5rem 1rem",
              borderRadius: "10px",
              margin: "0.5rem 0",
              maxWidth: "100%",
              textAlign: "left",
              position: "relative",
              left: msg.sender === "You" ? "auto" : "auto",
              right: msg.sender === "You" ? "auto" : "auto",
              float: msg.sender === "You" ? "right" : "right",
              clear: "both",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

        {/* Input Field */}
        <div
        style={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          width: "300px",
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isMessageCooldown ? "Wait a moment..." : "Ask for recommendations..."}
          disabled={isMessageCooldown}
          style={{
            flex: 1,
            padding: "0.5rem",
            border: "1px solid #ced4da",
            borderRadius: "20px",
            backgroundColor: isMessageCooldown ? "#f8f9fa" : "white",
            color: "black",
            cursor: isMessageCooldown ? "not-allowed" : "text",
          }}
        />
        <button
          onClick={sendMessage}
          disabled={isMessageCooldown}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: isMessageCooldown ? "#6c757d" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "20px",
            cursor: isMessageCooldown ? "not-allowed" : "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

