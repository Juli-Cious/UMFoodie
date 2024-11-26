import { useState } from "react";

export const DeliveryPage = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = () => {
    const deliveryPerson = { email, phoneNumber, fullName };
    console.log("New delivery person signed up:", deliveryPerson);
    alert("You have successfully signed up as a delivery driver!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{marginTop: "5rem"}}>Sign Up as a Food Delivery Driver</h2>
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
        <button type="submit" style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
};
