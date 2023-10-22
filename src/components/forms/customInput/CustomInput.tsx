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
}: InputProps<T>) => {
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
                className={styles.container_input}
                {...field}
                type="text"
                placeholder={placeholder}
              />
            )}
          />
        </div>
      );

    case "email":
      return (
        <div>
          <label>{label}</label>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <input {...field} type="email" placeholder={placeholder} />
            )}
          />
        </div>
      );

    case "password":
      return (
        <div>
          <label>{label}</label>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <input {...field} type="password" placeholder={placeholder} />
            )}
          />
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
                className={styles.container_input}
              >
                {options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
      );

    default:
      return null;
  }
};

export default CustomInput;
