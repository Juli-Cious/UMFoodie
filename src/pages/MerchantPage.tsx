import { useState } from "react";

export const MerchantPage = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [menu, setMenu] = useState<
    { name: string; price: number; calories: number; protein: number; carbs: number }[]
  >([]);
  const [wasteReductionMenu, setWasteReductionMenu] = useState<
    { name: string; price: number; calories: number; protein: number; carbs: number }[]
  >([]);
  const [ecoScore, setEcoScore] = useState(0);
  const [isGreenCertified, setIsGreenCertified] = useState(false);

  const addMenuItem = () => {
    setMenu([...menu, { name: "", price: 0, calories: 0, protein: 0, carbs: 0 }]);
  };

  const addWasteReductionItem = () => {
    setWasteReductionMenu([
      ...wasteReductionMenu,
      { name: "", price: 0, calories: 0, protein: 0, carbs: 0 },
    ]);
  };

  const handleSubmit = () => {
    const newStore = {
      name: fullName,
      address,
      ecoScore,
      isGreenCertified,
      menu,
      wasteReductionMenu,
    };
    console.log("New store added:", newStore);
    alert("Store successfully added!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{marginTop: "5rem"}}>Add Your Store</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
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

        <div style={{ marginBottom: "1rem" }}>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
          <label>Eco Score:</label>
          <input
            type="number"
            value={ecoScore}
            onChange={(e) => setEcoScore(parseInt(e.target.value))}
            min="0"
            max="100"
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
          <label>
            <input
              type="checkbox"
              checked={isGreenCertified}
              onChange={() => setIsGreenCertified(!isGreenCertified)}
            />
            Green Certified
          </label>
        </div>

        <h3>Menu</h3>
        <div style={{display: "flex", justifyContent: "space-between", width: "58rem",}}>
            <p style={{flex: 1}}>Name</p>
            <p style={{flex: 1}}>Price (RM)</p>
            <p style={{flex: 1}}>Calories</p>
            <p style={{flex: 1}}>Protein</p>
            <p style={{flex: 1}}>Carbs</p>
        </div>
        
        {menu.map((item, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              placeholder="Name"
              value={item.name}
              onChange={(e) => {
                const updatedMenu = [...menu];
                updatedMenu[index].name = e.target.value;
                setMenu(updatedMenu);
              }}
              required
              style={{ marginRight: "1rem" }}
            />
            <input
              type="number"
              placeholder="Price"
              value={item.price}
              onChange={(e) => {
                const updatedMenu = [...menu];
                updatedMenu[index].price = parseFloat(e.target.value);
                setMenu(updatedMenu);
              }}
              required
              style={{ marginRight: "1rem" }}
            />
            <input
              type="number"
              placeholder="Calories"
              value={item.calories}
              onChange={(e) => {
                const updatedMenu = [...menu];
                updatedMenu[index].calories = parseInt(e.target.value);
                setMenu(updatedMenu);
              }}
              required
              style={{ marginRight: "1rem" }}
            />
            <input
              type="number"
              placeholder="Protein"
              value={item.protein}
              onChange={(e) => {
                const updatedMenu = [...menu];
                updatedMenu[index].protein = parseInt(e.target.value);
                setMenu(updatedMenu);
              }}
              required
              style={{ marginRight: "1rem" }}
            />
            <input
              type="number"
              placeholder="Carbs"
              value={item.carbs}
              onChange={(e) => {
                const updatedMenu = [...menu];
                updatedMenu[index].carbs = parseInt(e.target.value);
                setMenu(updatedMenu);
              }}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addMenuItem}>
          Add Menu Item
        </button>

        <h3>Waste Reduction Menu</h3>
        {wasteReductionMenu.map((item, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              placeholder="Name"
              value={item.name}
              onChange={(e) => {
                const updatedMenu = [...wasteReductionMenu];
                updatedMenu[index].name = e.target.value;
                setWasteReductionMenu(updatedMenu);
              }}
              required
              style={{ marginRight: "1rem" }}
            />
            <input
              type="number"
              placeholder="Price"
              value={item.price}
              onChange={(e) => {
                const updatedMenu = [...wasteReductionMenu];
                updatedMenu[index].price = parseFloat(e.target.value);
                setWasteReductionMenu(updatedMenu);
              }}
              required
              style={{ marginRight: "1rem" }}
            />
            <input
              type="number"
              placeholder="Calories"
              value={item.calories}
              onChange={(e) => {
                const updatedMenu = [...wasteReductionMenu];
                updatedMenu[index].calories = parseInt(e.target.value);
                setWasteReductionMenu(updatedMenu);
              }}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addWasteReductionItem}>
          Add Waste Reduction Item
        </button>

        <button type="submit" style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
          Submit
        </button>
      </form>
    </div>
  );
};