import React from "react";
import styles from "./Step.module.scss";
import { ReactComponent as Check } from "assets/svg/check2.svg";

const Steps = ({ options, active }: any) => {
  return (
    <div className={styles.container}>
      {options.map((n: any, index: number) => (
        <div key={index} className={styles.container_steps}>
          <span
            className={
              active >= n.id
                ? styles.container_steps_line
                : styles.container_steps_line2
            }
          ></span>
          <span
            className={
              active >= n.id
                ? styles.container_steps_num
                : styles.container_steps_num2
            }
          >
            {active > n.id ? <Check /> : n.id}
          </span>
          {index === options.length - 1 && (
            <span
              className={
                active > n.id
                  ? styles.container_steps_line
                  : styles.container_steps_line2
              }
            ></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Steps;
