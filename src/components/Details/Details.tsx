import React from "react";
import styles from "./Details.module.scss";
import { DetailsProps } from "types";
import { GetLookups } from "utils/getLookups";

const Details = ({
  name,
  classificationId,
  categoryId,
  payRunId,
  description,
  reportingName,
  effectiveStartDate,
  effectiveEndDate,
  processingType,
  payFrequency,
  selectedMonths,
  prorate,
  status,
}: DetailsProps) => {
  const { getClassificationName, getCategoryName, getPayRunName } =
    GetLookups();

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
            <span>{getClassificationName(classificationId) ?? "-"}</span>
          </div>
        </div>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>Element Category</span>
            <span>{getCategoryName(categoryId) ?? "-"}</span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>Payrun</span>
            <span>{getPayRunName(payRunId) ?? "-"}</span>
          </div>
        </div>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>Description</span>
            <span>{description ?? "-"}</span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>reporting name</span>
            <span>{reportingName ?? "-"}</span>
          </div>
        </div>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>effective start date</span>
            <span>{effectiveStartDate ?? "-"}</span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>effective end date</span>
            <span>{effectiveEndDate ?? "-"}</span>
          </div>
        </div>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>processing type</span>
            <span>{processingType ?? "-"}</span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>pay frequency</span>
            <span>{payFrequency ?? "-"}</span>
          </div>
        </div>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>pay months</span>
            <span>
              {selectedMonths?.map((m, index) => {
                return <span key={index}>{m}</span>;
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
            <span>{status ? "Active" : "Inactive"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
