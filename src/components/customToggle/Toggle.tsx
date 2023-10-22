import React from "react";
import { ToggleProps } from "types";
import styles from "./Toggle.module.scss";

const ToggleButton = ({ data, handleToggle, label }: ToggleProps) => {
  return (
    <div className={styles.toggle}>
      <span className={styles.toggle_label}>{label}</span>

      <div className={styles.container}>
        <div
          className={`${styles.container_inner} ${
            data ? styles.container_active : styles.container_inactive
          }`}
          onClick={handleToggle}
        >
          <div></div>
          <div className={styles.container_inner_radio}></div>
        </div>
        <p className={styles.container_inner_text}>
          {data ? "Active" : "Inactive"}{" "}
        </p>
      </div>
    </div>
  );
};

export default ToggleButton;
