import React from "react";
import styles from "./Details.module.scss";
import { DetailsProps } from "types";

const Details = ({
  name,
  classification,
  category,
  payrun,
  description,
  reporting,
  startDate,
  endDate,
  type,
  frequency,
  months,
  prorate,
  status,
}: DetailsProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.container_header}>Element Details</p>
      <div className={styles.container_box}>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>Element Name</span>
            <span>{name ?? "-"}</span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>Element Classification</span>
            <span>{classification ?? "-"}</span>
          </div>
        </div>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>Element Category</span>
            <span>{category ?? "-"}</span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>Payrun</span>
            <span>{payrun ?? "-"}</span>
          </div>
        </div>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>Description</span>
            <span>{description ?? "-"}</span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>reporting name</span>
            <span>{reporting ?? "-"}</span>
          </div>
        </div>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>effective start date</span>
            <span>{startDate ?? "-"}</span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>effective end date</span>
            <span>{endDate ?? "-"}</span>
          </div>
        </div>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>processing type</span>
            <span>{type ?? "-"}</span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>pay frequency</span>
            <span>{frequency ?? "-"}</span>
          </div>
        </div>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>pay months</span>
            <span>
              {months?.map((m) => {
                return <span>{m}</span>;
              }) ?? "-"}
            </span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>Prorate</span>
            <span>{prorate ?? "-"}</span>
          </div>
        </div>

        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>status</span>
            <span>{status ?? "-"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
