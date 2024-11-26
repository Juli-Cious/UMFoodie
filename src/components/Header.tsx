import { Link } from "react-router-dom";

export const Header = () => (
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
        <h1 style={{ marginLeft:"2rem"}}>UM Foodies</h1>
        <div>
          <Link to="/" style={{ fontSize: "1.5rem",marginRight: "1rem", color: "white" }}>
            Home
          </Link>
          <Link to="/stores" style={{ fontSize: "1.5rem", marginRight: "1rem", color: "white" }}>
            Stores
          </Link>
          <Link to="/merchant" style={{ fontSize: "1.5rem", marginRight: "1rem", color: "white"}}>
            Merchant
          </Link>
          <Link to="/delivery" style={{ fontSize: "1.5rem", marginRight: "5rem", color: "white"}}>
            Delivery
          </Link>
        </div>
      </nav>
    </header>
  );