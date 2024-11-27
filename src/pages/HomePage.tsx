import { Chatbox } from "../components/Chatbox";
import um_logo from "../assets/Universiti_Malaya.png";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

export const HomePage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isChatboxVisible, setChatboxVisible] = useState(false);

  const toggleChatbox = () => {
    setChatboxVisible(!isChatboxVisible);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: isMobile ? "8rem 1rem" : "10rem 10rem",
        marginLeft: isMobile ? "0" : "-35rem",
        marginRight: isMobile ? "0" : "auto",
        flexGrow: 1,
        position: "relative",
      }}
    >
      <img
        src={um_logo}
        style={{
          width: isMobile ? "10rem" : "15rem",
        }}
        alt="Universiti Malaya Logo"
      />
      <h1
        style={{
          fontSize: isMobile ? "24px" : "30px",
          textAlign: "center",
          marginBottom: isMobile ? "1.5rem" : "2rem",
        }}
      >
        Welcome to UM Foodies
      </h1>
      <p
        style={{
          fontSize: isMobile ? "13px" : "15px",
          textAlign: "center",
          maxWidth: isMobile ? "100%" : "600px",
          lineHeight: "1.5rem",
        }}
      >
        UM Foodies is your go-to platform for exploring delicious and sustainable dining options around campus. Whether you're looking to grab a quick bite or enjoy a hearty meal, we've got you covered with eco-friendly choices that support responsible consumption.
      </p>
      <p
        style={{
          fontSize: isMobile ? "14px" : "15px",
          textAlign: "center",
          maxWidth: isMobile ? "90%" : "600px",
          lineHeight: "1.5rem",
        }}
      >
        Use our AI chatbot to get food recommendations!
      </p>

      {/* Chatbox for Desktop */}
      {!isMobile && <Chatbox />}

      {/* Chatbox Trigger Button for Mobile */}
      {isMobile && !isChatboxVisible && (
        <button
          onClick={toggleChatbox}
          style={{
            position: "fixed",
            bottom: "1rem",
            right: "1rem",
            margin: "0",
            padding: "0",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "40px",
            width: "70px",
            height: "70px",
            fontSize: "30px",
            cursor: "pointer",
            textAlign: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1001,
          }}
        >
          <span>💬</span>
        </button>
      )}

      {/* Chatbox Modal for Mobile */}
      {isMobile && isChatboxVisible && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              width: "90%",
              maxWidth: "600px",
              height: "85%",
              marginTop: "3.7rem",
              borderRadius: "10px",
              padding: "1rem",
              position: "relative",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <button
              onClick={toggleChatbox}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                zIndex: 1001,
              }}
            >
              ✖️
            </button>

            {/* Scrollable Chatbox */}
            <div
              style={{
                flexGrow: 1,
                overflowY: "auto",
                marginTop: "1rem", // Add margin to avoid overlapping with the "X" button
                paddingBottom: "1rem", // Padding for smoother scrolling experience
              }}
            >
              <Chatbox />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};