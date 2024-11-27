import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import image1 from "../assets/cafe1.webp";
import image2 from "../assets/cafe2.jpg";
import image3 from "../assets/chicken_rice.jpg";
import image4 from "../assets/zuscoffee.jpg";
import image5 from "../assets/image5.jpg";
import qbistropng from "../assets/qbistropng.png";

export const StoresPage = () => {
  const stores = [
    {
      id: 1,
      name: "KK8 Cafe",
      image: image1,
      ecoScore: 85,
      isGreenCertified: true,
      menu: [
        { name: "Roti Canai", price: 1.5, calories: 300, protein: 6, carbs: 40 },
        { name: "Roti Telur", price: 2.5, calories: 350, protein: 10, carbs: 40 },
        { name: "Nasi Goreng Blackpepper", price: 7, calories: 450, protein: 15, carbs: 65 },
        { name: "Nasi Goreng Paprik", price: 7, calories: 500, protein: 18, carbs: 65 },
        { name: "Nasi Goreng Cina", price: 5, calories: 400, protein: 10, carbs: 65 },
        { name: "Teh O Limau (Panas)", price: 2.5, calories: 30, protein: 0, carbs: 8 },
        { name: "Teh O Limau (Ice)", price: 3.0, calories: 50, protein: 0, carbs: 8 },
      ],
      wasteReductionMenu: [
        { name: "Nasi Goreng Cina (surplus)", price: 3.50, calories: 400, protein: 10, carbs: 65 },
        { name: "Nasi Goreng Blackpepper (surplus)", price: 5, calories: 450, protein: 15, carbs: 65 },
      ],
    },
    {
      id: 2,
      name: "KK10 Cafe",
      image: image2,
      ecoScore: 90,
      isGreenCertified: true,
      menu: [
        { name: "Nasi Goreng Ayam", price: 6, calories: 450, protein: 20, carbs: 60 },
        { name: "Nasi Lemak Rendang Ayam", price: 8, calories: 600, protein: 25, carbs: 65 },
        { name: "Nasi Lemak Kari Ayam", price: 8, calories: 550, protein: 23, carbs: 60 },
        { name: "Kopi O (Panas)", price: 2.40, calories: 5, protein: 0, carbs: 1 },
        { name: "Kopi O (Ice)", price: 2.80, calories: 20, protein: 0, carbs: 1 },
        { name: "Kopi C (Panas)", price: 2.40, calories: 50, protein: 2, carbs: 12 },
        { name: "Kopi C (Ice)", price: 2.80, calories: 80, protein: 2, carbs: 12 },
        { name: "Kopi (Panas)", price: 2.40, calories: 40, protein: 2, carbs: 10 },
        { name: "Kopi (Ice)", price: 2.80, calories: 70, protein: 2, carbs: 10 }
      ],
      wasteReductionMenu: [
        { name: "Nasi Goreng Ayam (surplus)", price: 4, calories: 450, protein: 20, carbs: 60 },
        { name: "Nasi Lemak Kari Ayam (surplus)", price: 6, calories: 550, protein: 23, carbs: 60 },
      ],
    },
    {
      id: 3,
      name: "Engineering Faculty Cafe",
      image: image3,
      ecoScore: 70,
      isGreenCertified: false,
      menu: [
        { name: "Hainanese Steamed Chicken Rice", price: 6, calories: 550, protein: 30, carbs: 60 },
        { name: "Crispy Roasted Chicken Rice", price: 6, calories: 600, protein: 25, carbs: 60 },
        { name: "Soy Sauce Chicken Rice", price: 6, calories: 550, protein: 25, carbs: 60 },
        { name: "Wan Tan Mee with Roasted Chicken", price: 6, calories: 450, protein: 15, carbs: 55 },
        { name: "Pu Er Tea (Panas)", price: 0.50, calories: 0, protein: 0, carbs: 0 },
        { name: "Pu Er Tea (Sejuk)", price: 1.00, calories: 5, protein: 0, carbs: 0 },
        { name: "Da Hong Pao Tea (Panas)", price: 0.50, calories: 0, protein: 0, carbs: 0 },
        { name: "Da Hong Pao Tea (Sejuk)", price: 1.00, calories: 5, protein: 0, carbs: 0 }
      ],
      wasteReductionMenu: [
        { name: "Soy Sauce Chicken Rice (surplus)", price: 4, calories: 550, protein: 25, carbs: 60 },
        { name: "Hainanese Steamed Chicken Rice (surplus)", price: 5, calories: 550, protein: 30, carbs: 60 },
      ],
    },
    {
      id: 4,
      name: "Zus Coffee",
      image: image4,
      ecoScore: 60,
      isGreenCertified: false,
      menu: [
        { name: "CEO Latte", price: 9.90, calories: 200, protein: 6, carbs: 20 },
        { name: "Spanish Latte", price: 10.90, calories: 250, protein: 7, carbs: 25 },
        { name: "Matcha Latte", price: 9.90, calories: 230, protein: 6, carbs: 22 },
        { name: "ZUS Gula Melaka", price: 10.50, calories: 270, protein: 6, carbs: 30 },
        { name: "Dirty Latte", price: 12.90, calories: 300, protein: 7, carbs: 28 },
        { name: "Peachy Strawberry + Mango Bits", price: 12.90, calories: 290, protein: 0, carbs: 40 },
        { name: "Thunder", price: 9.90, calories: 200, protein: 0, carbs: 30 },
        { name: "Iced Genmaicha Latte", price: 10.90, calories: 230, protein: 6, carbs: 22 }
      ],
      wasteReductionMenu: [
        { name: "Day-Old Cookies", price: 3, calories: 180, protein: 2, carbs: 10 },
        { name: "Discounted Chips", price: 2.50, calories: 130, protein: 1, carbs: 10 },
      ],
    },
    {
      id: 5,
      name: "KK12 Cafe",
      image: image5,
      ecoScore: 90,
      isGreenCertified: true,
      menu: [
        { name: "Deep Fried Chicken Chop", price: 6.50, calories: 600, protein: 25, carbs: 50 },
        { name: "Grilled Chicken Chop", price: 6.50, calories: 550, protein: 28, carbs: 50 },
        { name: "Country Fried Chicken", price: 6.50, calories: 580, protein: 26, carbs: 50 },
        { name: "Chicken Creole Pasta", price: 6, calories: 400, protein: 20, carbs: 55 },
        { name: "Beef Tex Mex Chili Pasta", price: 6, calories: 450, protein: 25, carbs: 50 },
        { name: "Grilled Chicken Chili Pesto Pasta", price: 7.50, calories: 500, protein: 28, carbs: 55 }
      ],
      wasteReductionMenu: [
        { name: "Nasi Ayam Penyet (surplus)", price: 6, calories: 600, protein: 35, carbs: 60 },
        { name: "Chicken Satay (surplus)", price: 1, calories: 150, protein: 15, carbs: 10 },
      ],
    },
    {
      id: 6,
      name: "Q Bistro UM",
      image: qbistropng,
      ecoScore: 87,
      isGreenCertified: true,
      menu: [
        { name: "Cheesy Fries", price: 8, calories: 450, protein: 6, carbs: 55 },
        { name: "Cheesy Wedges", price: 8, calories: 420, protein: 5, carbs: 50 },
        { name: "Chicken Wings with Fries", price: 12, calories: 600, protein: 25, carbs: 55 },
        { name: "Beef Bolognese", price: 12, calories: 500, protein: 30, carbs: 60 },
        { name: "Carbonara", price: 13, calories:550, protein: 28, carbs: 60 },
        { name: "Cheesy Fried Chicken Burger", price: 14, calories: 650, protein: 35, carbs: 60 }
      ],
      wasteReductionMenu: [
        { name: "Cheesy Fries (surplus)", price: 6, calories: 450, protein: 6, carbs: 55 },
        { name: "Chicken Wings with Fries (surplus)", price: 10, calories: 600, protein: 25, carbs: 55 },
      ],
    },
  ];
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [cart, setCart] = useState<{ name: string; price: number; storeName: string }[]>([]);
  const [selectedStore, setSelectedStore] = useState<any | null>(null);
  const [showPreOrderPopup, setShowPreOrderPopup] = useState(false);
  const [preOrderDetails, setPreOrderDetails] = useState({
    date: "",
    time: "",
    location: "",
  });
  const [, setActiveOrders] = useState<any[]>([]);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('foodAppCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    // Load active orders from localStorage
    const savedOrders = localStorage.getItem('foodAppOrders');
    if (savedOrders) {
      setActiveOrders(JSON.parse(savedOrders));
    }
  }, []);

  // Modified addToCart to include store name
  const addToCart = (item: { name: string; price: number }) => {
    const updatedCart = [...cart, { 
      ...item, 
      storeName: selectedStore ? selectedStore.name : 'Unknown Store' 
    }];
    setCart(updatedCart);
    localStorage.setItem('foodAppCart', JSON.stringify(updatedCart));
  };


  const openStoreMenu = (store: any) => {
    setSelectedStore(store);
  };

  const deleteFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('foodAppCart', JSON.stringify(updatedCart));
  };

  // Modify orderNow to manage localStorage
  const orderNow = () => {
    const order = {
      items: cart.map(item => ({
        ...item,
        storeName: item.storeName // Ensure store name is preserved
      })),
      type: "Immediate",
      time: new Date().toLocaleTimeString(),
      location: "Current Location",
      totalPrice: totalPrice,
      timestamp: Date.now() // Add a unique identifier
    };
    
    const existingOrders = JSON.parse(localStorage.getItem('foodAppOrders') || '[]');
    const updatedOrders = [...existingOrders, order];
    // Add to active orders
    setActiveOrders(updatedOrders);
    localStorage.setItem('foodAppOrders', JSON.stringify(updatedOrders));
  
    // Reset cart
    setCart([]);
    localStorage.removeItem('foodAppCart');
    alert("Your order is placed!");
  };

  const preOrder = () => {
    setShowPreOrderPopup(true);
  };

  const closePreOrderPopup = () => {
    setShowPreOrderPopup(false);
    setPreOrderDetails({ date: "", time: "", location: "" });
  };

  const handlePreOrderSubmit = () => {
    const preOrder = {
      items: cart.map(item => ({
        ...item,
        storeName: item.storeName // Ensure store name is preserved
      })),
      type: "Pre-Order",
      date: preOrderDetails.date,
      time: preOrderDetails.time,
      location: preOrderDetails.location,
      totalPrice: totalPrice,
      timestamp: Date.now() // Add a unique identifier
    };
    
    // Get existing orders or create new array
    const existingOrders = JSON.parse(localStorage.getItem('foodAppOrders') || '[]');
    const updatedOrders = [...existingOrders, preOrder];
  
    // Add to active orders
    setActiveOrders(updatedOrders);
    localStorage.setItem('foodAppOrders', JSON.stringify(updatedOrders));
    
    console.log("Pre-order details:", preOrderDetails);
    closePreOrderPopup();
    alert("Your pre-order is placed!");
    
    // Reset cart
    setCart([]);
    localStorage.removeItem('foodAppCart');
  };
  
  const closeStoreMenu = () => {
    setSelectedStore(null);
  };
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1 style={{ marginTop: "8rem" ,textAlign: "center", fontSize: isMobile ? "2rem":"3rem" }}>Stores</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: isMobile? "1rem" : "1rem",
          justifyContent: "space-evenly",
          padding: isMobile ? "0rem" : "1rem",
        }}
      >
        {stores.map((store) => (
          <div
            key={store.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: isMobile ? "100%" : "23%",
              padding: "1rem",
              textAlign: "center",
              position: "relative",
            }}
          >
            <img
              src={store.image}
              alt={store.name}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "5px",
                marginBottom: "1rem",
              }}
            />
            {store.isGreenCertified && (
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "green",
                  color: "white",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "5px",
                  fontSize: "0.8rem",
                }}
              >
                Green Certified
              </div>
            )}
            <h3 style={{ margin: "0.5rem 0", fontSize: "1.5rem" }}>
              {store.name}
              <span
                style={{
                  marginLeft: "0.5rem",
                  fontSize: "0.9rem",
                  color: "gray",
                }}
              >
                (Eco Score: {store.ecoScore})
              </span>
            </h3>
            <button
              onClick={() => openStoreMenu(store)}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                marginTop: "0.5rem",
                fontSize: "1rem",
              }}
            >
              View Menu
            </button>
          </div>
        ))}
      </div>

      {selectedStore && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#B3C8CF",
              borderRadius: "5px",
              padding: "2rem",
              width: "400px",
              maxWidth: "90%",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
            }}
          >
            <h2 style={{marginTop: "0", color: "black", fontWeight: "bold",}}>{selectedStore.name}</h2>
            <h4 style={{marginTop: "0", color: "black", fontWeight: "bold",}}>Menu</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
            {selectedStore.menu.map(
            (
                item: { name: string; price: number; calories: number; protein: number; carbs: number },
                index: number
            ) => (
                <li
                key={index}
                style={{
                    margin: "-0.5rem 0",
                    color: "black",
                    position: "relative",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.5rem",
                    borderRadius: "5px",
                    transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#89A8B2";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                }}
                >
                <div style={{ flex: 1 }}>
                    <span>{item.name}</span>
                    <div
                    style={{
                        display: "none",
                        position: "absolute",
                        bottom: "100%",
                        left: "0",
                        backgroundColor: "#89A8B2",
                        borderRadius: "5px",
                        padding: "0.5rem",
                        fontSize: "0.8rem",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        width: "max-content",
                    }}
                    className="nutrition-info"
                    >
                    <p style={{ margin: 0 }}>Calories: {item.calories} kcal</p>
                    <p style={{ margin: 0 }}>Protein: {item.protein} g</p>
                    <p style={{ margin: 0 }}>Carbs: {item.carbs} g</p>
                    </div>
                </div>
                <button
                    onClick={() => addToCart(item)}
                    style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "3px",
                    padding: "0.5rem",
                    fontSize: "0.9rem",
                    }}
                    onMouseEnter={(e) => {
                    e.currentTarget.innerText = "Add to Cart";
                    const infoDiv = e.currentTarget.previousElementSibling?.querySelector(
                        ".nutrition-info"
                    ) as HTMLElement;
                    if (infoDiv) infoDiv.style.display = "block";
                    }}
                    onMouseLeave={(e) => {
                    e.currentTarget.innerText = `RM${item.price}`;
                    const infoDiv = e.currentTarget.previousElementSibling?.querySelector(
                        ".nutrition-info"
                    ) as HTMLElement;
                    if (infoDiv) infoDiv.style.display = "none";
                    }}
                >
                    RM{item.price}
                </button>
                </li>
            )
            )}
            </ul>
            <h4 style={{marginTop: "0", color: "black", fontWeight: "bold",}}>Surplus Food Menu (Waste Reduction)</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {selectedStore.wasteReductionMenu.map(
                (item: { name: string; price: number; calories: number; protein: number; carbs: number }, index: number) => (
                  <li
                    key={index}
                    style={{
                      margin: "-0.5rem 0",
                      color: "black",
                      position: "relative",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#89A8B2";
                  }}
                  onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                  }}
                  >
                  <div style={{ flex: 1 }}>
                    <span>{item.name}</span>
                    <div
                    style={{
                        display: "none",
                        position: "absolute",
                        bottom: "100%",
                        left: "0",
                        backgroundColor: "#89A8B2",
                        borderRadius: "5px",
                        padding: "0.5rem",
                        fontSize: "0.8rem",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        width: "max-content",
                    }}
                    className="nutrition-info"
                    >
                    <p style={{ margin: 0 }}>Calories: {item.calories} kcal</p>
                    <p style={{ margin: 0 }}>Protein: {item.protein} g</p>
                    <p style={{ margin: 0 }}>Carbs: {item.carbs} g</p>
                    </div>
                </div>
                    <button
                      onClick={() => addToCart(item)}
                      style={{
                        backgroundColor: "#ff9500",
                        color: "white",
                        border: "none",
                        borderRadius: "3px",
                        padding: "0.5rem",
                        fontSize: "0.9rem",
                      }}
                      onMouseEnter={(e) =>{
                        (e.currentTarget.innerText = "Add to Cart");
                        const infoDiv = e.currentTarget.previousElementSibling?.querySelector(
                          ".nutrition-info"
                      ) as HTMLElement;
                      if (infoDiv) infoDiv.style.display = "block";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.innerText = `RM${item.price}`;
                        const infoDiv = e.currentTarget.previousElementSibling?.querySelector(
                            ".nutrition-info"
                        ) as HTMLElement;
                        if (infoDiv) infoDiv.style.display = "none";
                      }}
                    >
                      RM{item.price}
                    </button>
                  </li>
                )
              )}
            </ul>
            <button
              onClick={closeStoreMenu}
              style={{
                marginTop: "1rem",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Close Menu
            </button>
          </div>
        </div>
      )}
       {/* Cart Section */}
       <div
    style={{
      position: "fixed",
      right: "1rem",
      bottom: "2rem",
      width: "210px",
      backgroundColor: "#343A40",
      borderRadius: "5px",
      color: "#E5E1DA",
      fontSize: "0.8rem",
      padding: "1rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
    }}
  >
    <h3>Your Cart</h3>
    <ul style={{ listStyle: "none", padding: 0 }}>
      {cart.map((item, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <span>
            {item.name} - RM{item.price.toFixed(2)} 
            <span style={{ 
              fontSize: "0.7rem", 
              color: "#aaa", 
              marginLeft: "0.5rem" 
            }}>
              ({item.storeName})
            </span>
          </span>
          <button
            onClick={() => deleteFromCart(index)}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "0.2rem 0.5rem",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
    <h4>Total: RM{totalPrice.toFixed(2)}</h4>
        <button
          onClick={orderNow}
          style={{
            width: "100%",
            marginBottom: "0.5rem",
            padding: "0.5rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Order Now
        </button>
        <button
          onClick={preOrder}
          style={{
            width: "100%",
            padding: "0.5rem",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Pre-Order
        </button>
      </div>

      {/* Pre-Order Popup */}
      {showPreOrderPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#89A8B2",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          <h3>Pre-Order Details</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePreOrderSubmit();
            }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <label>Date:</label>
              <input
                type="date"
                value={preOrderDetails.date}
                onChange={(e) =>
                  setPreOrderDetails({ ...preOrderDetails, date: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.5rem",
                  borderRadius: "5px",
                  border: "1px solid #ced4da",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label>Time:</label>
              <input
                type="time"
                value={preOrderDetails.time}
                onChange={(e) =>
                  setPreOrderDetails({ ...preOrderDetails, time: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.5rem",
                  borderRadius: "5px",
                  border: "1px solid #ced4da",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label>Pick-Up Location:</label>
              <input
                type="text"
                value={preOrderDetails.location}
                onChange={(e) =>
                  setPreOrderDetails({ ...preOrderDetails, location: e.target.value })
                }
                placeholder="Enter location"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.5rem",
                  borderRadius: "5px",
                  border: "1px solid #ced4da",
                }}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.5rem",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Confirm Pre-Order
            </button>
            <button
              type="button"
              onClick={closePreOrderPopup}
              style={{
                width: "100%",
                marginTop: "0.5rem",
                padding: "0.5rem",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
