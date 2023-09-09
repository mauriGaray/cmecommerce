import "./App.css";
import ProductDetail from "./components/layout/productDetail/ProductDetail";
import Products from "./components/layout/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOutPage from "./components/pages/checkOutPage/CheckOutPage";
import CartContextProvider from "./context/CartContext";
import NavBar from "./components/layout/navbar/Navbar";
import SignInSide from "./components/pages/signInSide/SignInSide";
import SignUp from "./components/pages/signUp/SignUp";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";
import Favorites from "./components/pages/favorites/Favorites";
import { FavoritesProvider } from "./context/FavoritesContext";
import Checkout from "./components/pages/Checkout/Checkout";
import { UserProvider } from "./context/UserContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <CartContextProvider>
            <FavoritesProvider>
              <NavBar />
              <Routes>
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/checkoutpage" element={<CheckOutPage />} />
                <Route path="/signIn" element={<SignInSide />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/" element={<Products />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/products/:pid" element={<ProductDetail />} />
                <Route path="/favorites" element={<Favorites />} />
              </Routes>
            </FavoritesProvider>
          </CartContextProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
