import * as React from "react";

export const useClickOutside = () => {
  const [visible, setVisible] = React.useState(false);

  const ref: any = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (ref.current && !ref.current.contains(event.target)) setVisible(false);
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  return { ref, visible, setVisible };
};
