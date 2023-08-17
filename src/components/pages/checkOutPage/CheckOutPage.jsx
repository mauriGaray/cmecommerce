import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
const CheckOutPage = () => {
  const { cart } = useContext(CartContext);

  return <div>CheckOutPage</div>;
};

export default CheckOutPage;
