import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "assets/svg/back.svg";

export const GoBack = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

  return <Back onClick={handleNavigate} style={{ cursor: "pointer" }} />;
};
