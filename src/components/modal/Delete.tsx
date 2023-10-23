import React from "react";
import { ReactComponent as DeleteIcon } from "assets/svg/delete.svg";
import styles from "./Modal.module.scss";
import { DeleteProps } from "types";
import Button from "components/button/Button";

const DeleteModal = ({ label, onCancel, onClick }: DeleteProps) => {
  return (
    <div className={styles.delete}>
      <DeleteIcon />
      <span className={styles.delete_label}>{label}</span>
      <span className={styles.delete_warn}>You can't reverse this action</span>
      <div className={styles.delete_buttons}>
        <Button
          label="Cancel"
          onClick={onCancel}
          customClass={styles.delete_buttons_cancel}
        />
        <Button
          label="Yes, Delete"
          onClick={onClick}
          customClass={styles.delete_buttons_click}
        />
      </div>
    </div>
  );
};

export default DeleteModal;
