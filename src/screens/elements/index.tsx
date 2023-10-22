import React, { useLayoutEffect, useState } from "react";
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
import CreateElement from "components/forms/createElement/CreateElement";
import { useDispatch, useSelector } from "react-redux";
import { FetchElements } from "redux/slices/elements";

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
  const dispatch: any = useDispatch();
  const { elements } = useSelector((state: any) => state.elements);

  const [showModal, setShowModal] = useState(false);

  useLayoutEffect(() => {
    dispatch(FetchElements());
  }, []);

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
          rowData={elements}
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
