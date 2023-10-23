import React, { useState } from "react";
import styles from "./Form.module.scss";
import Steps from "components/steps/Step";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useDispatch, useSelector } from "react-redux";
import {
  CaptureElementData,
  CreateElementLinkData,
  FetchElementLinks,
  UpdateElementLinkData,
} from "redux/slices/elements";
import ConditionalRender from "components/ConditionalRender";
import Modal from "components/modal/Modal";
import Confirmation from "components/modal/Confirmation";
import { ReactComponent as Check } from "assets/svg/check3.svg";
import Step3 from "./Step3";

const options = [
  {
    id: 1,
    label: "Staff Information",
  },
  {
    id: 2,
    label: "Additional Information",
  },
  {
    id: 3,
    label: "processing Information",
  },
];

interface Props {
  onClose: () => void;
  id: string;
  data: any;
}

const EditElementLink = ({ id, onClose, data }: Props) => {
  const dispatch: any = useDispatch();
  const { isLoading, createElement } = useSelector(
    (state: any) => state.elements
  );

  const linkId = data.id;

  const [successModal, setSuccessModal] = useState(false);
  const [active, setActive] = useState(1);

  const onSubmit = (data: any) => {
    dispatch(CaptureElementData(data));
    setActive(2);
  };

  const onSubmit2 = (data: any) => {
    let apiData = { ...createElement, ...data };
    dispatch(CaptureElementData(apiData));
    setActive(3);
  };

  const submitData = (data: any) => {
    let apiData = { ...createElement, ...data };
    dispatch(
      UpdateElementLinkData(id, linkId, apiData, () => {
        setSuccessModal(true);
      })
    );
  };

  const handleSuccess = () => {
    setSuccessModal(false);
    onClose();
    dispatch(FetchElementLinks(id));
  };

  return (
    <div className={styles.container}>
      <p className={styles.container_header}>Create Element Link</p>
      <div className={styles.container_step}>
        <Steps options={options} active={active} />
      </div>

      {active === 1 && (
        <Step1
          formData={onSubmit}
          loading={isLoading}
          data={data}
          closeModal={onClose}
        />
      )}
      {active === 2 && (
        <Step2
          onSubmit={onSubmit2}
          loading={isLoading}
          data={data}
          handleBack={() => setActive(1)}
        />
      )}
      {active === 3 && (
        <Step3
          onSubmit={submitData}
          loading={isLoading}
          data={data}
          handleBack={() => setActive(2)}
        />
      )}
      <ConditionalRender isVisible={successModal}>
        <Modal onClose={() => setSuccessModal(true)}>
          <Confirmation
            icon={<Check />}
            label="Element link has been edited successfully"
            onClick={handleSuccess}
          />
        </Modal>
      </ConditionalRender>
    </div>
  );
};

export default EditElementLink;
