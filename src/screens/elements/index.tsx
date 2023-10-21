import React from "react";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import styles from "./Elements.module.scss";
import PageHeader from "components/pageHeader/PageHeader";

const paths = [
  { label: "Payroll Management", link: "/" },
  { label: "Element Setup" },
  { label: "Elements" },
];

const Elements = () => {
  return (
    <div className={styles.container}>
      <Breadcrumb paths={paths} />
      <div className={styles.container_inner}>
        <PageHeader
          header="Elements"
          placeholder="Search for element"
          filter
          buttonLabel="Create Element"
        />
      </div>
    </div>
  );
};

export default Elements;
