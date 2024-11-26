export const StoreList = () => {
    const stores = [
      { id: 1, name: "KK8 Cafe", items: ["Burger", "Pasta", "Salad"] },
      { id: 2, name: "Green Bites", items: ["Smoothies", "Vegan Wraps", "Fruit Bowls"] },
    ];
  
    return (
      <div>
        <h3>Campus Stores</h3>
        {stores.map((store) => (
          <div key={store.id} style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}>
            <h4>{store.name}</h4>
            <ul>
              {store.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  