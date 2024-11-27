import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import image1 from "../assets/cafe1.webp";
import image2 from "../assets/cafe2.jpg";
import image3 from "../assets/chicken_rice.jpg";
import image4 from "../assets/zuscoffee.jpg";
import image5 from "../assets/image5.jpg";

export const StoresPage = () => {
  const stores = [
    {
      id: 1,
      name: "KK8 Cafe",
      image: image1,
      ecoScore: 85,
      isGreenCertified: true,
      menu: [
        { name: "Burger", price: 8.5, calories: 300, protein: 20, carbs: 10 },
        { name: "Pasta", price: 12, calories: 500, protein: 15, carbs: 10 },
        { name: "Salad", price: 7, calories: 150, protein: 5, carbs: 10 },
      ],
      wasteReductionMenu: [
        { name: "Day-Old Bread", price: 2, calories: 150, protein: 4, carbs: 10 },
        { name: "Overripe Bananas", price: 1, calories: 90, protein: 1, carbs: 10 },
      ],
    },
    {
      id: 2,
      name: "KK10 Cafe",
      image: image2,
      ecoScore: 90,
      isGreenCertified: true,
      menu: [
        { name: "Smoothies", price: 10, calories: 200, protein: 3, carbs: 10 },
        { name: "Vegan Wraps", price: 11, calories: 250, protein: 7, carbs: 10},
        { name: "Fruit Bowls", price: 9, calories: 180, protein: 2, carbs: 10 },
      ],
      wasteReductionMenu: [
        { name: "Leftover Salad Mix", price: 4, calories: 80, protein: 2, carbs: 10 },
        { name: "Bruised Apples", price: 2, calories: 60, protein: 0.5, carbs: 10 },
      ],
    },
    {
      id: 3,
      name: "Chicken Rice Shop",
      image: image3,
      ecoScore: 70,
      isGreenCertified: false,
      menu: [
        { name: "Ramen", price: 15, calories: 600, protein: 25, carbs: 10 },
        { name: "Sushi", price: 18, calories: 350, protein: 12, carbs: 10 },
        { name: "Dumplings", price: 10, calories: 250, protein: 8, carbs: 10 },
      ],
      wasteReductionMenu: [
        { name: "Slightly Dry Dumplings", price: 5, calories: 200, protein: 7, carbs: 10 },
        { name: "Day-Old Sushi", price: 9, calories: 300, protein: 10, carbs: 10 },
      ],
    },
    {
      id: 4,
      name: "Zus Coffee",
      image: image4,
      ecoScore: 60,
      isGreenCertified: false,
      menu: [
        { name: "Chips", price: 5, calories: 150, protein: 2, carbs: 10 },
        { name: "Cookies", price: 6, calories: 200, protein: 3, carbs: 10 },
        { name: "Drinks", price: 8, calories: 120, protein: 1, carbs: 10 },
      ],
      wasteReductionMenu: [
        { name: "Day-Old Cookies", price: 3, calories: 180, protein: 2, carbs: 10 },
        { name: "Discounted Chips", price: 2.5, calories: 130, protein: 1, carbs: 10 },
      ],
    },
    {
      id: 5,
      name: "KK12 Cafe",
      image: image5,
      ecoScore: 90,
      isGreenCertified: true,
      menu: [
        { name: "Chicken Chop", price: 9, calories: 150, protein: 10, carbs: 10 },
        { name: "Nasi Kukus", price: 7, calories: 200, protein: 3, carbs: 10 },
        { name: "Mango Smoothie", price: 6, calories: 120, protein: 1, carbs: 10 },
      ],
      wasteReductionMenu: [
        { name: "Nasi Ayam (leftover)", price: 4, calories: 180, protein: 2, carbs: 10 },
        { name: "Discounted Chips", price: 2.5, calories: 130, protein: 1, carbs: 10 },
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
            <h2>{selectedStore.name}</h2>
            <h4>Menu</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
            {selectedStore.menu.map(
            (
                item: { name: string; price: number; calories: number; protein: number; carbs: number },
                index: number
            ) => (
                <li
                key={index}
                style={{
                    margin: "1rem 0",
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
            <h4>Surplus Food Menu (Waste Reduction)</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {selectedStore.wasteReductionMenu.map(
                (item: { name: string; price: number; calories: number; protein: number }, index: number) => (
                  <li
                    key={index}
                    style={{
                      margin: "1rem 0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      {item.name} - {item.calories}kcal, {item.protein}g protein
                    </span>
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
                      onMouseEnter={(e) =>
                        (e.currentTarget.innerText = "Add to Cart")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.innerText = `RM${item.price}`)
                      }
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
