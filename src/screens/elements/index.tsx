import React, { useState } from "react";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import styles from "./Elements.module.scss";
import PageHeader from "components/pageHeader/PageHeader";
import Table from "components/table/Table";
import { ELEMENT_COLUMN } from "components/table/TableColumns";
import { ListProps } from "types";
import { ReactComponent as View } from "assets/svg/eye.svg";
import { ReactComponent as Edit } from "assets/svg/pen.svg";
import { ReactComponent as Delete } from "assets/svg/bin.svg";
import ConditionalRender from "components/ConditionalRender";
import Modal from "components/modal/Modal";
import CreateElement from "components/forms/CreateElement";

const paths = [
  { label: "Payroll Management", link: "/" },
  { label: "Element Setup" },
  { label: "Elements" },
];

const list: ListProps[] = [
  {
    icon: <View />,
    text: "View Element Links",
    link: "/elements",
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

const Elements = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <Breadcrumb paths={paths} />
      <div className={styles.container_inner}>
        <PageHeader
          header="Elements"
          placeholder="Search for element"
          filter
          buttonLabel="Create Element"
          onClick={() => setShowModal(true)}
        />
        <Table
          columnData={ELEMENT_COLUMN}
          rowData={data}
          list={list}
          noRecord="There are no elements to display"
        />
        <ConditionalRender isVisible={showModal}>
          <Modal onClose={() => setShowModal(false)}>
            <CreateElement />
          </Modal>
        </ConditionalRender>
      </div>
    </div>
  );
};

export default Elements;

const data = [
  {
    id: "1",
    name: "allowance",
    category: "Deduction",
    classification: "pre-tax",
    status: "inactive",
    date: "14 - 02 - 2022 || 09:30 AM",
    modified: "Samson ",
  },
  {
    id: "2",
    name: "allowance",
    category: "Deduction",
    classification: "pre-tax",
    status: "active",
    date: "14 - 02 - 2022 || 09:30 AM",
    modified: "Samson ",
  },
  {
    id: "3",
    name: "allowance",
    category: "Deduction",
    classification: "pre-tax",
    status: "active",
    date: "14 - 02 - 2022 || 09:30 AM",
    modified: "Samson ",
  },
  {
    id: "4",
    name: "allowance",
    category: "Deduction",
    classification: "pre-tax",
    status: "active",
    date: "14 - 02 - 2022 || 09:30 AM",
    modified: "Samson ",
  },
  {
    id: "5",
    name: "allowance",
    category: "Deduction",
    classification: "pre-tax",
    status: "inactive",
    date: "14 - 02 - 2022 || 09:30 AM",
    modified: "Samson ",
  },
  {
    id: "6",
    name: "allowance",
    category: "Deduction",
    classification: "pre-tax",
    status: "active",
    date: "14 - 02 - 2022 || 09:30 AM",
    modified: "Samson ",
  },
  {
    id: "7",
    name: "allowance",
    category: "Deduction",
    classification: "pre-tax",
    status: "active",
    date: "14 - 02 - 2022 || 09:30 AM",
    modified: "Samson ",
  },
];
