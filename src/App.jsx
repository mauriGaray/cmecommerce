import "./App.css";
import ProductDetail from "./components/layout/productDetail/ProductDetail";
import Products from "./components/layout/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import CheckOutPage from "./components/pages/checkOutPage/CheckOutPage";
import CheckOutCard from "./components/common/checkOutCard/CheckOutCard";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route path="/checkoutpage" element={<CheckOutPage />} />
            <Route path="/checkoutcard" element={<CheckOutCard />} />
            <Route path="/" element={<Products />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
            <Route path="/products/:pid" element={<ProductDetail />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
