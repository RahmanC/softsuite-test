import React from "react";
import styles from "./Details.module.scss";
import { LinkDetailsProps } from "types";
import { GetLookups } from "utils/getLookups";

const LinkDetails = ({
  name,
  suborganizationId,
  amountType,
  departmentId,
  employeeTypeValueId,
  locationId,
  employeeCategoryValueId,
  effectiveStartDate,
  effectiveEndDate,
  createdAt,
  grade,
  gradeStep,
  pension,
  amount,
  housing,
  status,
}: LinkDetailsProps) => {
  const {
    getSubOrganizationName,
    getDepartment,
    getLocationName,
    getGrade,
    getGradeStep,
  } = GetLookups();

  return (
    <div className={styles.container}>
      <p className={styles.container_header}>Element Link Details</p>
      <div className={styles.container_box}>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>Name</span>
            <span>{name ?? "-"}</span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>sub organization</span>
            <span>{getSubOrganizationName(suborganizationId) ?? "-"}</span>
          </div>
        </div>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>department</span>
            <span>{getDepartment(departmentId) ?? "-"}</span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>location</span>
            <span>{getLocationName(locationId) ?? "-"}</span>
          </div>
        </div>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>employee type</span>
            <span>{employeeTypeValueId ?? "-"}</span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>employee category</span>
            <span>{employeeCategoryValueId ?? "-"}</span>
          </div>
        </div>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>effective date</span>
            <span>{createdAt ?? "-"}</span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>status</span>
            <span>{status ? "Active" : "Inactive"}</span>
          </div>
        </div>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>grade</span>
            <span>{getGrade(grade) ?? "-"}</span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>grade step</span>
            <span>{getGradeStep(gradeStep) ?? "-"}</span>
          </div>
        </div>
        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>amount type</span>
            <span>{amountType}</span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>amount</span>
            <span>{amount ?? "-"}</span>
          </div>
        </div>

        <div className={styles.container_box_inner}>
          <div className={styles.container_box_inner_data}>
            <span>pension</span>
            <span>{pension ?? "-"}</span>
          </div>
          <div className={styles.container_box_inner_data}>
            <span>housing</span>
            <span>{housing ?? "-"}</span>
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
      </div>
    </div>
  );
};

export default LinkDetails;
