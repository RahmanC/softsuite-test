import React from "react";
import CustomInput from "../customInput/CustomInput";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import Button from "components/button/Button";

const Step1 = ({ onSubmit }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.container_form}>
        <div className={styles.container_form_row}>
          <CustomInput
            name="name"
            control={control}
            label="name"
            type="text"
            placeholder="Input Name"
            errors={errors}
          />
          <CustomInput
            name="classification"
            control={control}
            label="element classification"
            type="select"
            errors={errors}
            placeholder="Select Classification"
          />
        </div>
        <div className={styles.container_form_row}>
          <CustomInput
            name="category"
            control={control}
            label="Element category"
            type="select"
            placeholder="Select Element Category"
            errors={errors}
          />
          <CustomInput
            name="payrun"
            control={control}
            label="Payrun"
            type="select"
            placeholder="Select Payrun"
            errors={errors}
          />
        </div>
        <CustomInput
          name="description"
          control={control}
          label="Description"
          type="textarea"
          placeholder="Input Description"
          errors={errors}
        />
        <CustomInput
          name="report"
          control={control}
          label="reporting name"
          type="textarea"
          placeholder="Input Reporting Name"
          errors={errors}
        />
        <div className={styles.container_form_row}>
          <Button
            label="Cancel"
            // onClick={}
            customClass={styles.container_form_row_button}
          />
          <Button type="submit" label="Next" />
        </div>
      </form>
    </div>
  );
};

export default Step1;
