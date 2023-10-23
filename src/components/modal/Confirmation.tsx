import React from "react";
import styles from "./Modal.module.scss";
import { ConfirmProps } from "types";
import Button from "components/button/Button";

const Confirmation = ({ icon, label, onClick }: ConfirmProps) => {
  return (
    <div className={styles.confirm}>
      {icon}
      <span className={styles.confirm_label}>{label}</span>

      <Button label="Close to continue" onClick={onClick} />
    </div>
  );
};

export default Confirmation;
