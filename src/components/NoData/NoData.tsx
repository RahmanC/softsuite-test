import React from "react";
import image from "assets/png/ellipse.png";
import { ReactComponent as Danger } from "assets/svg/Danger.svg";
import styles from "./NoData.module.scss";
import { NoRecord } from "types";

const NoData = ({ noRecord }: NoRecord) => {
  return (
    <span className={styles.container}>
      <img src={image} alt="No Data" width={150} height={150} />
      <span className={styles.container_text}>
        <Danger />
        <span>{noRecord}</span>
      </span>
    </span>
  );
};

export default NoData;
