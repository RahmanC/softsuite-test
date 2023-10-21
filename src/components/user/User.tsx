import React from "react";
import { ReactComponent as Notification } from "assets/svg/Notification.svg";
import profilePic from "assets/png/user.png";
import styles from "./User.module.scss";

const User = () => {
  return (
    <div className={styles.container}>
      <Notification />
      <div className={styles.container_account}>
        <img
          src={profilePic}
          alt="Henry"
          className={styles.container_account_image}
        />
        <div className={styles.container_account_texts}>
          <span>Henry Okoro</span>
          <span className={styles.container_account_texts_title}>
            Payroll Manager
          </span>
        </div>
      </div>
    </div>
  );
};

export default User;
