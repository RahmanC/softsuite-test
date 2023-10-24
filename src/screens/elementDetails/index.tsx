/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect, useState } from "react";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import styles from "./Elements.module.scss";
import PageHeader from "components/pageHeader/PageHeader";
import Table from "components/table/Table";
import { ELEMENT_DETAILS_COLUMN } from "components/table/TableColumns";
import Details from "components/Details/Details";
import ConditionalRender from "components/ConditionalRender";
import Modal from "components/modal/Modal";
import { GoBack } from "components/GoBack";
import { useDispatch, useSelector } from "react-redux";
import {
  CaptureElementData,
  DeleteElementLink,
  FetchElementById,
  FetchElementLinks,
} from "redux/slices/elements";
import { useStorage } from "hooks/useStorage";
import ElementLinkDetails from "screens/elementLinkDetails";
import CreateElementLink from "components/forms/createElementLink/CreateElementLink";
import DeleteModal from "components/modal/Delete";
import Confirmation from "components/modal/Confirmation";
import { ReactComponent as Check } from "assets/svg/check.svg";
import EditElementLink from "components/forms/editElementLink/EditElementLink";

const paths = [
  { label: "Payroll Management", link: "/" },
  { label: "Element Setup" },
  { label: "Elements", link: "/elements" },
  { label: "Element Links" },
];

const ElementDetails = () => {
  const { getSessionStorage } = useStorage("__softSuite");

  const dispatch: any = useDispatch();
  const { singleElement, elementLinks, isLoading } = useSelector(
    (state: any) => state.elements
  );

  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [successModal, setSuccessModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDetails, setShowDetails] = useState(null);

  useLayoutEffect(() => {
    dispatch(FetchElementById(getSessionStorage.id));
    dispatch(FetchElementLinks(getSessionStorage.id));
  }, []);

  const handleDelete = (data: any) => {
    dispatch(
      DeleteElementLink(getSessionStorage.id, data.id, () => {
        setDeleteModal(null);
        setSuccessModal(true);
      })
    );
  };

  const handleSuccess = () => {
    setSuccessModal(false);
    dispatch(FetchElementLinks(getSessionStorage.id));
  };

  const handleCloseCreateModal = () => {
    setShowModal(false);
    dispatch(CaptureElementData({}));
  };

  return (
    <div className={styles.container}>
      <Breadcrumb paths={paths} />
      <div className={styles.container_inner}>
        <GoBack />
        <Details {...singleElement} />
        <PageHeader
          header="Element Links"
          placeholder="Search for element link"
          filter
          buttonLabel="Create Element Link"
          onClick={() => setShowModal(true)}
        />
        <Table
          columnData={ELEMENT_DETAILS_COLUMN}
          rowData={elementLinks}
          loading={isLoading}
          handleDetails={(data: React.SetStateAction<null>) =>
            setShowDetails(data)
          }
          actions
          onClickEdit={(data: any) => setEditModal(data)}
          onClickDelete={(data: any) => setDeleteModal(data)}
          noRecord="There are no element links to display"
        />

        <ConditionalRender isVisible={showModal}>
          <Modal onClose={handleCloseCreateModal}>
            <CreateElementLink
              id={getSessionStorage.id}
              onClose={handleCloseCreateModal}
            />
          </Modal>
        </ConditionalRender>

        <ConditionalRender isVisible={showDetails}>
          <Modal
            onClose={() => setShowDetails(null)}
            customClass={styles.sideModal}
            customInner={styles.sideModal_inner}
          >
            <ElementLinkDetails
              closeModal={() => setShowDetails(null)}
              data={showDetails}
            />
          </Modal>
        </ConditionalRender>

        <ConditionalRender isVisible={editModal}>
          <Modal onClose={() => setEditModal(null)}>
            <EditElementLink
              id={getSessionStorage.id}
              data={editModal}
              onClose={() => setEditModal(null)}
            />
          </Modal>
        </ConditionalRender>

        <ConditionalRender isVisible={deleteModal}>
          <Modal onClose={() => setDeleteModal(null)}>
            <DeleteModal
              label="Are you sure you want to 
delete Element Link?"
              onCancel={() => setDeleteModal(null)}
              onClick={() => handleDelete(deleteModal)}
            />
          </Modal>
        </ConditionalRender>

        <ConditionalRender isVisible={successModal}>
          <Modal onClose={() => setSuccessModal(true)}>
            <Confirmation
              icon={<Check />}
              label="Element link has been deleted successfully"
              onClick={handleSuccess}
            />
          </Modal>
        </ConditionalRender>
      </div>
    </div>
  );
};

export default ElementDetails;
