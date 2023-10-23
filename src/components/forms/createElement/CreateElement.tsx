import React, { useState } from "react";
import styles from "./Form.module.scss";
import Steps from "components/steps/Step";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useDispatch, useSelector } from "react-redux";
import { CaptureElementData, CreateElementData } from "redux/slices/elements";

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

const CreateElement = () => {
  const dispatch: any = useDispatch();
  const { isLoading, createElement } = useSelector(
    (state: any) => state.elements
  );

  const [active, setActive] = useState(1);

  const onSubmit = (data: any) => {
    dispatch(CaptureElementData(data));
    // console.log("step1", data);
    setActive(2);
  };

  const submitData = (data: any) => {
    let apiData = { ...createElement, ...data };
    dispatch(CreateElementData(data)).then((res: any) => {
      console.log("crea", res);
    });
    console.log("data", apiData);
  };

  return (
    <div className={styles.container}>
      <p className={styles.container_header}>Create Element</p>
      <div className={styles.container_step}>
        <Steps options={options} active={active} />
      </div>

      {active === 1 && (
        <Step1 formData={onSubmit} loading={isLoading} data={createElement} />
      )}
      {active === 2 && (
        <Step2
          onSubmit={submitData}
          loading={isLoading}
          handleBack={() => setActive(1)}
        />
      )}
    </div>
  );
};

export default CreateElement;
