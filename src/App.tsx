import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { StoresPage } from "./pages/StoresPage";
import { MerchantPage } from "./pages/MerchantPage";
import { DeliveryPage } from "./pages/DeliveryPage";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%"}}>
        <Header />
        <div style={{ flex: 1, padding: "2rem 1rem" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stores" element={<StoresPage />} />
            <Route path="/merchant" element={<MerchantPage />} />
            <Route path="/delivery" element={<DeliveryPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;