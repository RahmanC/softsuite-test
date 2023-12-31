import React, { useState } from "react";
import styles from "./Form.module.scss";
import Steps from "components/steps/Step";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useDispatch, useSelector } from "react-redux";
import {
  CaptureElementData,
  CreateElementData,
  FetchElements,
} from "redux/slices/elements";
import ConditionalRender from "components/ConditionalRender";
import Modal from "components/modal/Modal";
import Confirmation from "components/modal/Confirmation";
import { ReactComponent as Check } from "assets/svg/check3.svg";

const options = [
  {
    id: 1,
    label: "Element Details",
  },
  {
    id: 2,
    label: "Additional Details",
  },
];

interface Props {
  onClose: () => void;
}

const CreateElement = ({ onClose }: Props) => {
  const dispatch: any = useDispatch();
  const { isLoading, createElement } = useSelector(
    (state: any) => state.elements
  );

  const [successModal, setSuccessModal] = useState(false);
  const [active, setActive] = useState(1);

  const onSubmit = (data: any) => {
    dispatch(CaptureElementData(data));
    setActive(2);
  };

  const submitData = (data: any) => {
    let apiData = { ...createElement, ...data };
    dispatch(
      CreateElementData(apiData, () => {
        setSuccessModal(true);
      })
    );
  };

  const handleSuccess = () => {
    setSuccessModal(false);
    onClose();
    dispatch(FetchElements());
  };

  return (
    <div className={styles.container}>
      <p className={styles.container_header}>Create Element</p>
      <div className={styles.container_step}>
        <Steps options={options} active={active} />
      </div>

      {active === 1 && (
        <Step1
          formData={onSubmit}
          loading={isLoading}
          data={createElement}
          closeModal={onClose}
        />
      )}
      {active === 2 && (
        <Step2
          onSubmit={submitData}
          loading={isLoading}
          handleBack={() => setActive(1)}
        />
      )}
      <ConditionalRender isVisible={successModal}>
        <Modal onClose={() => setSuccessModal(true)}>
          <Confirmation
            icon={<Check />}
            label="Element has been created successfully"
            onClick={handleSuccess}
          />
        </Modal>
      </ConditionalRender>
    </div>
  );
};

export default CreateElement;
