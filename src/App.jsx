import "./App.css";
import ProductDetail from "./components/layout/productDetail/ProductDetail";
import Products from "./components/layout/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          <Route path="/products/:pid" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
