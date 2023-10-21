import React from "react";
import styles from "./Switcher.module.scss";
import { ReactComponent as ArrowDown } from "assets/svg/arrowDown.svg";
import { CustomSwitch } from "types";

const CustomSwitcher = ({ label, value, icon, customClass }: CustomSwitch) => {
  return (
    <div className={`${styles.container} ${customClass}`}>
      <div className={styles.container_inner}>
        {icon}
        <div className={styles.container_inner_texts}>
          <span className={styles.container_inner_texts_label}>{label}</span>
          <span className={styles.container_inner_texts_name}>{value}</span>
        </div>
      </div>
      <ArrowDown />
    </div>
  );
};

export default CustomSwitcher;
