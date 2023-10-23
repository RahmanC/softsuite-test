import * as React from "react";
import style from "./MobileHamburger.module.scss";
import { useMediaQuery } from "hooks/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { ToggleView } from "redux/slices/util";

const MobileHamburger = () => {
  const isMobile = useMediaQuery();
  const dispatch: any = useDispatch();
  const { showHamburger } = useSelector((state: any) => state.utils);

  const toggleHamburger = () => {
    dispatch(ToggleView());
    setTimeout(() => {
      if (!showHamburger && isMobile) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, 100);
  };

  return (
    <label htmlFor="check" className={style.bar} onClick={toggleHamburger}>
      <span
        className={`${style.top} ${showHamburger ? style.transform : ""}`}
      ></span>
      <span
        className={`${style.middle} ${showHamburger ? style.transform : ""}`}
      ></span>
      <span
        className={`${style.bottom} ${showHamburger ? style.transform : ""}`}
      ></span>
    </label>
  );
};

export default MobileHamburger;
