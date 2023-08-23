import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const signInBtn = () => {
  return (
    <Link to={"/signIn"} style={{ textDecoration: "none" }}>
      Ingresar
    </Link>
  );
};

export default signInBtn;
