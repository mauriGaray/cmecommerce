import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import { UserProvider } from "./context/UserContext";
import { menuRoutes } from "./Routes/menuRoutes";
import CartContextProvider from "./context/CartContext";
import NavBar from "./components/layout/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <CartContextProvider>
            <FavoritesProvider>
              <NavBar />
              <Routes>
                {menuRoutes.map(({ id, path, Element }) => (
                  <Route key={id} path={path} element={<Element />} />
                ))}
              </Routes>
            </FavoritesProvider>
          </CartContextProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
