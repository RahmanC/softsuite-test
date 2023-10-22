import React, { useState } from "react";
import styles from "./Form.module.scss";
import Steps from "components/steps/Step";
import Step1 from "./Step1";
import Step2 from "./Step2";

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
  const [active, setActive] = useState(1);

  const onSubmit = (data: any) => {
    setActive(2);
  };

  return (
    <div className={styles.container}>
      <p className={styles.container_header}>Create Element</p>
      <div className={styles.container_step}>
        <Steps options={options} active={active} />
      </div>
      {active === 1 && <Step1 onSubmit={onSubmit} />}
      {active === 2 && <Step2 onSubmit={onSubmit} />}
    </div>
  );
};

export default CreateElement;
