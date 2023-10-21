import React from "react";
import styles from "./Button.module.scss";
import { ReactComponent as Plus } from "assets/svg/plus.svg";
import { ButtonProps } from "types";

const Button = ({ label, icon, onClick }: ButtonProps) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {label && <span>{label}</span>}
      {icon && <Plus />}
    </div>
  );
};

export default Button;
