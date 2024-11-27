import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return(
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#89A8B2",
        color: "white",
        zIndex: 1000,
      }}
    >
      <nav style={{ height:"120px" ,display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: isMobile ? "1.5rem": "3rem" ,marginLeft: isMobile ? "1rem" : "2rem"}}>UM Foodies</h1>
        <div>
          <Link to="/" style={{ fontSize: isMobile ? "1rem":"1.5rem",marginRight: isMobile? "0.5rem" : "1rem", color: "white" }}>
            Home
          </Link>
          <Link to="/stores" style={{ fontSize: isMobile ? "1rem":"1.5rem", marginRight: isMobile? "0.5rem" :"1rem", color: "white" }}>
            Stores
          </Link>
          <Link to="/merchant" style={{ fontSize: isMobile ? "1rem":"1.5rem", marginRight: isMobile? "0.5rem" :"1rem", color: "white"}}>
            Merchant
          </Link>
          <Link to="/delivery" style={{ fontSize: isMobile ? "1rem":"1.5rem", marginRight: isMobile? "0.5rem" :"5rem", color: "white"}}>
            Delivery
          </Link>
        </div>
      </nav>
    </header>
  ) 
};