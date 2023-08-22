import "./App.css";
import ProductDetail from "./components/layout/productDetail/ProductDetail";
import Products from "./components/layout/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOutPage from "./components/pages/checkOutPage/CheckOutPage";
import CheckoutCard from "./components/common/checkoutCard/CheckoutCard";
import CartContextProvider from "./context/CartContext";
import NavBar from "./components/layout/navbar/Navbar";
import SignInSide from "./components/pages/signInSide/SignInSide";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/checkoutpage" element={<CheckOutPage />} />
            <Route path="/signIn" element={<SignInSide />} />
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
