import { useNavigate } from "react-router-dom";

const signInBtn = () => {
  const navigate = useNavigate();
  const btnClick = () => {
    navigate("/signIn");
  };

  return <div onClick={btnClick}>Ingresar</div>;
};

export default signInBtn;
