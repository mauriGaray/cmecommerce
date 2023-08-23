import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const FavoriteBtn = () => {
  return (
    <Link to={"/favorites"} style={{ textDecoration: "none", color: "white" }}>
      Favoritos
    </Link>
  );
};

export default FavoriteBtn;
