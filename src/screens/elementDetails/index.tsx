import React, { useState } from "react";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import styles from "./Elements.module.scss";
import PageHeader from "components/pageHeader/PageHeader";
import Table from "components/table/Table";
import { ELEMENT_DETAILS_COLUMN } from "components/table/TableColumns";
import { ListProps } from "types";
import { ReactComponent as View } from "assets/svg/eye.svg";
import { ReactComponent as Edit } from "assets/svg/pen.svg";
import { ReactComponent as Delete } from "assets/svg/bin.svg";
import { ReactComponent as Back } from "assets/svg/back.svg";
import Details from "components/Details/Details";
import ConditionalRender from "components/ConditionalRender";
import Modal from "components/modal/Modal";

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
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <Breadcrumb paths={paths} />
      <div className={styles.container_inner}>
        <Back />
        <Details {...details} />
        <PageHeader
          header="Element Links"
          placeholder="Search for element link"
          filter
          buttonLabel="Create Element Link"
          onClick={() => setShowModal(true)}
        />
        <Table columnData={ELEMENT_DETAILS_COLUMN} rowData={data} actions />

        <ConditionalRender isVisible={showModal}>
          <Modal onClose={() => setShowModal(false)}>
            <p>test</p>
          </Modal>
        </ConditionalRender>
      </div>
    </div>
  );
};

export default ElementDetails;

const data = [
  {
    name: "allowance",
    sub: "Deduction",
    department: "pre-tax",
    category: "inactive",
    amount: "10,000:00",
    details: "Samson ",
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
