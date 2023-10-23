import { Controller, FieldValues } from "react-hook-form";
import { InputProps } from "types";

import styles from "./Input.module.scss";

const CustomInput = <T extends FieldValues>({
  name,
  control,
  label,
  type,
  options,
  multiple,
  placeholder,
  initialValue,
  defaultValue,
  errors,
  register,
}: InputProps<T>) => {
  const isInvalid = errors && errors.name?.type === "required";

  const inputInitialValue =
    defaultValue !== undefined ? defaultValue : initialValue || "";

  switch (type) {
    case "text":
      return (
        <div className={styles.container}>
          <label className={styles.container_label}>{label}</label>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <input
                className={`${styles.container_input} ${
                  isInvalid ? styles.invalid : ""
                }`}
                placeholder={placeholder}
                {...field}
                type="text"
                defaultValue={inputInitialValue}
                {...register(field.name, {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
            )}
          />
          {isInvalid && (
            <span className={styles.error_message}>Please input {label}</span>
          )}
        </div>
      );

    case "date":
      return (
        <div className={styles.container}>
          <label className={styles.container_label}>{label}</label>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="date"
                className={`${styles.container_input} ${
                  isInvalid ? styles.invalid : ""
                }`}
                placeholder={placeholder}
                defaultValue={inputInitialValue}
              />
            )}
          />
          {isInvalid && (
            <span className={styles.error_message}>Please input {label}</span>
          )}
        </div>
      );

    case "textarea":
      return (
        <div className={styles.container}>
          <label className={styles.container_label}>{label}</label>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                rows={4}
                cols={50}
                className={`${styles.container_input} ${
                  isInvalid ? styles.invalid : ""
                }`}
                placeholder={placeholder}
                defaultValue={inputInitialValue}
              />
            )}
          />
          {isInvalid && (
            <span className={styles.error_message}>Please input {label}</span>
          )}
        </div>
      );

    case "select":
      return (
        <div className={styles.container}>
          <label className={styles.container_label}>{label}</label>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <select
                {...field}
                multiple={multiple}
                className={`${styles.container_input} ${
                  isInvalid ? styles.invalid : ""
                }`}
                defaultValue={inputInitialValue}
              >
                <option value="">{placeholder}</option>
                {options?.map((option: any, index: number) => (
                  <option key={index} value={+option.id}>
                    {option.description}
                  </option>
                ))}
              </select>
            )}
          />
          {isInvalid && (
            <span className={styles.error_message}>Please input {label}</span>
          )}
        </div>
      );

    case "radio":
      return (
        <div className={styles.container}>
          <label className={styles.container_label}>{label}</label>
          <div
            className={`${styles.container_radio} ${
              isInvalid ? styles.invalid : ""
            }`}
          >
            {options?.map((option) => (
              <div key={option}>
                <Controller
                  name={name}
                  control={control}
                  // rules={rules}
                  render={({ field }) => (
                    <label>
                      <input
                        type="radio"
                        {...field}
                        value={option}
                        // checked={inputInitialValue === option}
                        className={styles.container_inputRadio}
                      />
                      {option}
                    </label>
                  )}
                />
              </div>
            ))}
          </div>
          {isInvalid && (
            <span className={styles.error_message}>Select an option.</span>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default CustomInput;
