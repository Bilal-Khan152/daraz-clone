import "./App.css";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Navbar from "./components/Navbar";
import DarazLinks from "./components/DarazLinks";
import PaymentMethods from "./components/PaymentMethods";
import SocialLinks from "./components/SocialLinks";
import ProductDetailPage from "./pages/ProductDetailPage";
import Description from "./components/Description";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<AllProducts />} />
        <Route path="/productDetails/:id" element={<ProductDetailPage />} />
      </Routes>
      <DarazLinks />
      <PaymentMethods />
      <Description />
      <SocialLinks />
    </>
  );
}

export default App;
