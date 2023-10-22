import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import styles from "./Form.module.scss";
import CustomInput from "./customInput/CustomInput";

const CreateElement = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <p className={styles.container_header}>Create Element</p>
      {/* <div>progress</div> */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.container_form}>
        <div className={styles.container_form_row}>
          <CustomInput
            name="name"
            control={control}
            label="name"
            type="text"
            placeholder="Input Name"
          />
          <CustomInput
            name="name"
            control={control}
            label="element classification"
            type="select"
            placeholder="Select Classification"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateElement;
