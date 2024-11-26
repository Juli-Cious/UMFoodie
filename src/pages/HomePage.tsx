import { Chatbox } from "../components/Chatbox";
import um_logo from "../assets/Universiti_Malaya.png";

export const HomePage = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "0rem",
      paddingRight: "35rem",
      flexGrow: 1,
    }}
  >
    <img src = {um_logo} style={{width: "15rem"}}></img>
    <h1 style={{ fontSize: "30px" ,textAlign: "center", marginBottom: "2rem" }}>
      Welcome to UM Foodies
    </h1>
    <p style={{ fontSize: "15px" ,textAlign: "center", maxWidth: "600px", lineHeight: "1.5rem" }}>
      UM Foodies is your go-to platform for exploring delicious and sustainable
      dining options around campus. Whether you're looking to grab a quick bite
      or enjoy a hearty meal, we've got you covered with eco-friendly choices
      that support responsible consumption. Explore stores, view menus, and let
      us recommend the perfect meal for you!
    </p>
    <p style={{ fontSize: "15px" ,textAlign: "center", maxWidth: "600px", lineHeight: "1.5rem" }}>
    Use our AI chatbot on your left to get food recommendations!
    </p>

    <Chatbox />
  </div>
);