import { useState, useEffect } from "react";

export const DeliveryPage = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [activeOrders, setActiveOrders] = useState<any[]>([]);

  useEffect(() => {
    // Retrieve active orders from localStorage when component mounts
    const storedOrders = localStorage.getItem('foodAppOrders');
    if (storedOrders) {
      setActiveOrders(JSON.parse(storedOrders));
    }
  }, []);

  const handleSubmit = () => {
    const deliveryPerson = { email, phoneNumber, fullName };
    console.log("New delivery person signed up:", deliveryPerson);
    alert("You have successfully signed up as a delivery driver!");
    setShowSignupForm(false);
    // Reset form fields
    setEmail("");
    setPhoneNumber("");
    setFullName("");
  };

  const takeOrder = (orderIndex: number) => {
    // Remove the order from active orders
    const updatedOrders = activeOrders.filter((_, index) => index !== orderIndex);
    setActiveOrders(updatedOrders);
    
    // Update localStorage
    localStorage.setItem('foodAppOrders', JSON.stringify(updatedOrders));
    
    alert("Order accepted! Please proceed to the pickup location.");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{marginTop: "5rem"}}>Become a Food Delivery Driver</h2>
      
      {!showSignupForm ? (
        <button 
          onClick={() => setShowSignupForm(true)}
          style={{ 
            marginTop: "1rem", 
            padding: "0.5rem 1rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Sign Up as a Delivery Driver
        </button>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #ced4da",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Phone Number:</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #ced4da",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #ced4da",
              }}
            />
          </div>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            marginTop: "1rem" 
          }}>
            <button 
              type="button"
              onClick={() => setShowSignupForm(false)}
              style={{ 
                padding: "0.5rem 1rem",
                backgroundColor: "#6c757d",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              style={{ 
                padding: "0.5rem 1rem",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      )}

      <div style={{ marginTop: "2rem" }}>
        <h3>Active Orders</h3>
        {activeOrders.length === 0 ? (
          <p>No active orders at the moment.</p>
        ) : (
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "1rem" 
          }}>
            {activeOrders.map((order, index) => (
              <div 
                key={index} 
                style={{
                  borderRadius: "15px",
                  padding: "1.5rem",
                  backgroundColor: "#F0F4F8",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  border: "1px solid #E2E8F0",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Decorative accent */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "10px",
                  height: "100%",
                  backgroundColor: "#40C4FF"
                }}></div>

                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  marginBottom: "1rem"
                }}>
                  <h4 style={{ 
                    margin: 0, 
                    color: "#2D3748",
                    fontSize: "1.1rem"
                  }}>
                    {order.type} Order 
                    <span style={{ 
                      marginLeft: "0.5rem", 
                      color: "#718096", 
                      fontSize: "0.9rem" 
                    }}>
                    </span>
                  </h4>
                </div>

                <div style={{ 
                  backgroundColor: "white", 
                  borderRadius: "10px", 
                  padding: "1rem",
                  marginBottom: "1rem"
                }}>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <strong style={{ color: "#4A5568" }}>Items:</strong>
                    <ul style={{ 
                      paddingLeft: "1.5rem", 
                      margin: 0,
                      color: "#2D3748"
                    }}>
                      {order.items.map((item: any, itemIndex: number) => (
                        <li key={itemIndex}>
                          {item.name} <span style={{fontSize: "0.8rem", color: "#aaa",}}>({item.storeName})</span> - RM{item.price.toFixed(2)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "1fr 1fr", 
                    gap: "0.5rem",
                    color: "#4A5568"
                  }}>
                    <div>
                      <strong>Total Price:</strong> 
                      <span style={{ color: "#38B2AC" }}> RM{order.totalPrice.toFixed(2)}</span>
                    </div>
                    {order.time && (
                      <div>
                        <strong>Time:</strong> {order.time}
                      </div>
                    )}
                    {order.date && (
                      <div>
                        <strong>Date:</strong> {order.date}
                      </div>
                    )}
                    <div>
                      <strong>Location:</strong> {order.location}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => takeOrder(index)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    backgroundColor: "#48BB78",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    fontWeight: "bold"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#38A169";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#48BB78";
                  }}
                >
                  Take Order
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};