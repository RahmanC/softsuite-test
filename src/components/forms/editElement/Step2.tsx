import React, { useState } from "react";
import CustomInput from "../customInput/CustomInput";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import Button from "components/button/Button";
import MultiSelect from "../customInput/MultiSelect";
import ToggleButton from "components/customToggle/Toggle";
import ConditionalRender from "components/ConditionalRender";

const months = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "Septempber", label: "Septempber" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

const Step2 = ({ onSubmit, loading, handleBack, data }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const selectedFrequency = watch("payFrequency");

  const [status, setStatus] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState<
    { value: string; label: string }[]
  >([]);

  const handleSelectChange = (
    selectedOptions: { value: string; label: string }[]
  ) => {
    setSelectedOptions(selectedOptions);
  };

  const handleFormSubmit = (formData: any) => {
    const dataToSubmit = {
      status: status ? "Active" : "Inactive",
      selectedMonths: selectedOptions.map((m) => m.value),
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
            name="effectiveStartDate"
            control={control}
            label="Effective start date"
            type="date"
            placeholder="Select Date"
            errors={errors}
            defaultValue={data.effectiveStartDate}
          />
          <CustomInput
            name="effectiveEndDate"
            control={control}
            label="Effective end date"
            type="date"
            placeholder="Select Date"
            errors={errors}
            defaultValue={data.effectiveEndDate}
          />
        </div>
        <div className={styles.container_form_row}>
          <CustomInput
            name="processingType"
            control={control}
            label="processing type"
            type="radio"
            options={["Open", "Closed"]}
            errors={errors}
            defaultValue={data.processingType}
          />
          <CustomInput
            name="payFrequency"
            control={control}
            label="pay frequency"
            type="radio"
            options={["Monthly", "Selected Months"]}
            errors={errors}
            defaultValue={data.payFrequency}
          />
        </div>
        <ConditionalRender isVisible={selectedFrequency === "Selected Months"}>
          <MultiSelect
            label="selected pay months"
            placeholder="Select Months"
            options={months}
            onChange={handleSelectChange}
          />
        </ConditionalRender>
        <div className={styles.container_form_row}>
          <CustomInput
            name="prorate"
            control={control}
            label="prorate"
            type="radio"
            options={["Yes", "No"]}
            errors={errors}
            defaultValue={data.prorate}
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
          <Button disabled={loading} type="submit" label="Create New Element" />
        </div>
      </form>
    </div>
  );
};

export default Step2;
