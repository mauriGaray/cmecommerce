import Favorite from "../components/pages/favorites/Favorites.jsx";
import ProductDetail from "../components/layout/productDetail/ProductDetail";
import Products from "../components/layout/products/Products";
import Checkout from "../components/pages/Checkout/Checkout";
import CheckOutPage from "../components/pages/checkOutPage/CheckOutPage";
import PageNotFound from "../components/pages/pageNotFound/PageNotFound";
import SignInSide from "../components/pages/signInSide/SignInSide";
import SignUp from "../components/pages/signUp/SignUp";
import AddProduct from "../components/pages/addProduct/addProduct";
import Review from "../components/pages/Checkout/Review.jsx";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: Products,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: Checkout,
  },
  {
    id: "checkoutPage",
    path: "/checkoutpage",
    Element: CheckOutPage,
  },
  {
    id: "signIn",
    path: "/signIn",
    Element: SignInSide,
  },
  {
    id: "signUp",
    path: "/signUp",
    Element: SignUp,
  },
  {
    id: "categoryFilter",
    path: "/category/:categoryName",
    Element: Products,
  },
  {
    id: "home",
    path: "/",
    Element: Products,
  },
  {
    id: "404",
    path: "*",
    Element: PageNotFound,
  },
  {
    id: "productDetail",
    path: "/products/:pid",
    Element: ProductDetail,
  },
  {
    id: "favorites",
    path: "/favorites",
    Element: Favorite,
  },
  {
    id: "addProduct",
    path: "/addProduct",
    Element: AddProduct,
  },
  {
    id: "review",
    path: "/review",
    Element: Review,
  },
];
