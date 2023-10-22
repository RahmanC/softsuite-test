import React from "react";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import styles from "./Elements.module.scss";
import PageHeader from "components/pageHeader/PageHeader";
import Table from "components/table/Table";
import { ELEMENT_COLUMN } from "components/table/TableColumns";
import { ListProps } from "types";
import { ReactComponent as View } from "assets/svg/eye.svg";
import { ReactComponent as Edit } from "assets/svg/pen.svg";
import { ReactComponent as Delete } from "assets/svg/bin.svg";
import { ReactComponent as Back } from "assets/svg/back.svg";
import Details from "components/Details/Details";

const paths = [
  { label: "Payroll Management", link: "/" },
  { label: "Element Setup" },
  { label: "Elements", link: "/elements" },
  { label: "Element Links" },
];

const list: ListProps[] = [
  {
    icon: <View />,
    text: "View Element Links",
    link: "/element",
  },
  {
    icon: <Edit />,
    text: "Edit Element",
    link: "/element",
  },
  {
    icon: <Delete />,
    text: "Delete Element",
    link: "/element",
  },
];

const ElementDetails = () => {
  return (
    <div className={styles.container}>
      <Breadcrumb paths={paths} />
      <div className={styles.container_inner}>
        <Back />
        <Details {...details} />
        {/* <PageHeader
          header="Elements"
          placeholder="Search for element"
          filter
          buttonLabel="Create Element"
        />
        <Table columnData={ELEMENT_COLUMN} rowData={data} list={list} /> */}
      </div>
    </div>
  );
};

export default ElementDetails;

const data = [
  {
    name: "allowance",
    category: "Deduction",
    classification: "pre-tax",
    status: "inactive",
    date: "14 - 02 - 2022 || 09:30 AM",
    modified: "Samson ",
  },
  {
    name: "allowance",
    category: "Deduction",
    classification: "pre-tax",
    status: "active",
    date: "14 - 02 - 2022 || 09:30 AM",
    modified: "Samson ",
  },
  {
    name: "allowance",
    category: "Deduction",
    classification: "pre-tax",
    status: "active",
    date: "14 - 02 - 2022 || 09:30 AM",
    modified: "Samson ",
  },
  {
    name: "allowance",
    category: "Deduction",
    classification: "pre-tax",
    status: "active",
    date: "14 - 02 - 2022 || 09:30 AM",
    modified: "Samson ",
  },
  {
    name: "allowance",
    category: "Deduction",
    classification: "pre-tax",
    status: "inactive",
    date: "14 - 02 - 2022 || 09:30 AM",
    modified: "Samson ",
  },
  {
    name: "allowance",
    category: "Deduction",
    classification: "pre-tax",
    status: "active",
    date: "14 - 02 - 2022 || 09:30 AM",
    modified: "Samson ",
  },
  {
    name: "allowance",
    category: "Deduction",
    classification: "pre-tax",
    status: "active",
    date: "14 - 02 - 2022 || 09:30 AM",
    modified: "Samson ",
  },
];

const details = {
  name: "Allowance",
  classification: "dedeuction",
  category: "cat",
  payrun: "dhhd",
  description: "",
  months: ["january, February, March, Septemper"],
};
