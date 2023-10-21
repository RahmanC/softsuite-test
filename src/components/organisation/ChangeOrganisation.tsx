import React from "react";
import styles from "./Organisation.module.scss";
import { ReactComponent as Home } from "assets/svg/house.svg";
import { ReactComponent as ArrowDown } from "assets/svg/arrowDown.svg";

const ChangeOrganisation: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_inner}>
        <Home />
        <div className={styles.container_inner_texts}>
          <p className={styles.container_inner_texts_label}>
            Change Organisation
          </p>
          <p className={styles.container_inner_texts_name}>PaperSoft Limited</p>
        </div>
      </div>
      <ArrowDown />
    </div>
  );
};

export default ChangeOrganisation;
