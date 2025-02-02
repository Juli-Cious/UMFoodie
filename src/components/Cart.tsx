import { useState } from "react";

export const Cart = () => {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (item: string) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div>
      <h3>Your Cart</h3>
      <ul>
        {cart.length === 0 ? (
          <li>Your cart is empty</li>
        ) : (
          cart.map((item, index) => <li key={index}>{item}</li>)
        )}
      </ul>
      <button onClick={() => addToCart("Sample Item")}>Add Sample Item</button>
    </div>
  );
};
