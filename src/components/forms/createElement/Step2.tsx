import React, { useState } from "react";
import CustomInput from "../customInput/CustomInput";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import Button from "components/button/Button";
import MultiSelect from "../customInput/MultiSelect";
import ToggleButton from "components/customToggle/Toggle";

const months = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
];

const Step2 = ({ onSubmit }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [status, setStatus] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState<
    { value: string; label: string }[]
  >([]);

  const handleSelectChange = (
    selectedOptions: { value: string; label: string }[]
  ) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.container_form}>
        <div className={styles.container_form_row}>
          <CustomInput
            name="startDate"
            control={control}
            label="Effective start date"
            type="date"
            placeholder="Select Date"
            errors={errors}
          />
          <CustomInput
            name="endDate"
            control={control}
            label="Effective end date"
            type="date"
            placeholder="Select Date"
            errors={errors}
          />
        </div>
        <div className={styles.container_form_row}>
          <CustomInput
            name="type"
            control={control}
            label="processing type"
            type="radio"
            options={["Open", "Closed"]}
            errors={errors}
          />
          <CustomInput
            name="frequency"
            control={control}
            label="pay frequency"
            type="radio"
            options={["Monthly", "Selected Months"]}
            errors={errors}
          />
        </div>

        <MultiSelect
          label="selected pay months"
          placeholder="Select"
          options={months}
          onChange={handleSelectChange}
        />
        <div className={styles.container_form_row}>
          <CustomInput
            name="prorate"
            control={control}
            label="prorate"
            type="radio"
            options={["Yes", "No"]}
            errors={errors}
          />
          <ToggleButton
            data={status}
            label="Status"
            handleToggle={() => setStatus(!status)}
          />
        </div>
        <div className={styles.container_form_row}>
          <Button
            label="Cancel"
            customClass={styles.container_form_row_button}
          />
          <Button type="submit" label="Create New Element" />
        </div>
      </form>
    </div>
  );
};

export default Step2;
