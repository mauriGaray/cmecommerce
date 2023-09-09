import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
const signInBtn = () => {
  const { log, logIn, logOut } = useUser();
  const navigate = useNavigate();
  const btnClick = () => {
    log ? logOut() : navigate("/signIn");
  };

  return <div onClick={btnClick}>{log ? "cerrar sesión" : "ingresar"}</div>;
};

export default signInBtn;
