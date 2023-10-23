import React, { useState } from "react";
import CustomInput from "../customInput/CustomInput";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import Button from "components/button/Button";
import ToggleButton from "components/customToggle/Toggle";

const amountType = [
  { id: "fixed value", name: "Fixed Value" },
  { id: "rate of salary", name: "Rate Of Salary" },
];

const Step3 = ({ onSubmit, loading, handleBack }: any) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const selectedType = watch("amountType");

  const [status, setStatus] = useState(false);

  const handleFormSubmit = (formData: any) => {
    const dataToSubmit = {
      status: status ? "Active" : "Inactive",
      modifiedBy: "Abdulrahman Afaraetu",
      ...formData,
    };

    onSubmit(dataToSubmit);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className={styles.container_form}
      >
        <div className={styles.container_form_row}>
          <CustomInput
            name="amountType"
            control={control}
            label="Amount Type"
            type="select"
            options={amountType}
            placeholder="Select An Amount Type"
            errors={errors}
            register={register}
          />
          {selectedType === "fixed value" ? (
            <CustomInput
              name="amount"
              control={control}
              label="amount"
              type="text"
              placeholder="Enter Amount"
              errors={errors}
              register={register}
            />
          ) : (
            <CustomInput
              name="rate"
              control={control}
              label="rate(%)"
              type="text"
              placeholder="Enter Rate"
              errors={errors}
              register={register}
            />
          )}
        </div>

        <div className={styles.container_form_row}>
          <CustomInput
            name="effectiveStartDate"
            control={control}
            label="Effective start date"
            type="date"
            placeholder="Select Date"
            errors={errors}
            register={register}
          />
          <CustomInput
            name="effectiveEndDate"
            control={control}
            label="Effective end date"
            type="date"
            placeholder="Select Date"
            errors={errors}
            register={register}
          />
        </div>

        <div className={styles.container_form_row}>
          <CustomInput
            name="automate"
            control={control}
            label="automate"
            type="radio"
            options={["Yes", "No"]}
            errors={errors}
            register={register}
          />
          <ToggleButton
            data={status}
            label="Status"
            handleToggle={() => setStatus(!status)}
          />
        </div>

        <div className={styles.container_form_row}>
          <Button
            label="Back"
            onClick={handleBack}
            customClass={styles.container_form_row_button}
          />
          <Button
            disabled={loading}
            type="submit"
            label="Create A New Element Link"
          />
        </div>
      </form>
    </div>
  );
};

export default Step3;
