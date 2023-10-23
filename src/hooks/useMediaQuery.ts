import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Togglemedia } from "redux/slices/util";

export const useMediaQuery = () => {
  const { isMobile } = useSelector((state: any) => state.utils);

  const dispatch: any = useDispatch();

  React.useEffect(() => {
    const handleEvent = () => {
      const isMobile = window.innerWidth < 900;
      dispatch(Togglemedia(isMobile));
      if (!isMobile) {
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleEvent);
    return () => {
      window.removeEventListener("resize", handleEvent);
    };
  }, [dispatch]);

  return isMobile;
};
