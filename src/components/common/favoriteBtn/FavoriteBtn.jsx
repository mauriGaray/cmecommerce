import { useNavigate } from "react-router-dom";
/**
 * Renders a button component that navigates to the "/signIn" route when clicked.
 */
const FavoriteBtn = () => {
  const navigate = useNavigate();

  /**
   * Handles the button click event and navigates to the "/signIn" route.
   */
  const handleButtonClick = () => {
    navigate("/favorites");
  };

  return <div onClick={handleButtonClick}>Favoritos</div>;
};

export default FavoriteBtn;
