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
import {
  CaptureElementData,
  DeleteElement,
  FetchElements,
} from "redux/slices/elements";
import DeleteModal from "components/modal/Delete";
import Confirmation from "components/modal/Confirmation";
import { ReactComponent as Check } from "assets/svg/check.svg";
import EditElement from "components/forms/editElement/EditElement";
import {
  FetchGrades,
  FetchLookupValues,
  FetchSuborganization,
} from "redux/slices/lookups";

const paths = [
  { label: "Payroll Management", link: "/" },
  { label: "Element Setup" },
  { label: "Elements" },
];

const Elements = () => {
  const column = ELEMENT_COLUMN();
  const dispatch: any = useDispatch();
  const { elements, isLoading } = useSelector((state: any) => state.elements);

  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [successModal, setSuccessModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useLayoutEffect(() => {
    dispatch(FetchElements());
    dispatch(FetchLookupValues());
    dispatch(FetchSuborganization());
    dispatch(FetchGrades());
  }, [dispatch]);

  const list: ListProps[] = [
    {
      icon: <View />,
      text: "View Element Links",
      link: "/elements",
    },
    {
      icon: <Edit />,
      text: "Edit Element",
      onClickModal: (data: any) => setEditModal(data),
    },
    {
      icon: <Delete />,
      text: "Delete Element",
      onClickModal: (data: any) => setDeleteModal(data),
    },
  ];

  const handleDelete = (data: any) => {
    dispatch(
      DeleteElement(data.id, () => {
        setDeleteModal(null);
        setSuccessModal(true);
      })
    );
  };

  const handleSuccess = () => {
    setSuccessModal(false);
    dispatch(FetchElements());
  };

  const handleCloseCreateModal = () => {
    setShowModal(false);
    dispatch(CaptureElementData({}));
  };

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
          columnData={column}
          rowData={elements}
          loading={isLoading}
          list={list}
          noRecord="There are no elements to display"
        />
        <ConditionalRender isVisible={showModal}>
          <Modal onClose={handleCloseCreateModal}>
            <CreateElement onClose={handleCloseCreateModal} />
          </Modal>
        </ConditionalRender>

        <ConditionalRender isVisible={editModal}>
          <Modal onClose={() => setEditModal(null)}>
            <EditElement data={editModal} onClose={() => setEditModal(null)} />
          </Modal>
        </ConditionalRender>

        <ConditionalRender isVisible={deleteModal}>
          <Modal onClose={() => setDeleteModal(null)}>
            <DeleteModal
              label="Are you sure you want to 
delete Element?"
              onCancel={() => setDeleteModal(null)}
              onClick={() => handleDelete(deleteModal)}
            />
          </Modal>
        </ConditionalRender>

        <ConditionalRender isVisible={successModal}>
          <Modal onClose={() => setSuccessModal(true)}>
            <Confirmation
              icon={<Check />}
              label="Element has been deleted successfully"
              onClick={handleSuccess}
            />
          </Modal>
        </ConditionalRender>
      </div>
    </div>
  );
};

export default Elements;
