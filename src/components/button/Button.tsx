import React from "react";
import styles from "./Button.module.scss";
import { ReactComponent as Plus } from "assets/svg/plus.svg";
import { ButtonProps } from "types";

const Button = ({
  label,
  icon,
  onClick,
  customClass,
  disabled,
  type,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${
        disabled ? styles.disabled : styles.container
      } ${customClass} `}
      onClick={onClick}
      disabled={disabled}
    >
      {label && <span>{label}</span>}
      {icon && <Plus />}
    </button>
  );
};

export default Button;
