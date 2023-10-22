import React from "react";
import Select from "react-select";
import styles from "./Input.module.scss";

interface MultiSelectProps {
  label: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  onChange: (selectedOptions: { value: string; label: string }[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  placeholder,
  onChange,
  label,
}) => {
  const handleChange: any = (
    selectedOptions: { value: string; label: string }[]
  ) => {
    onChange(selectedOptions);
  };

  return (
    <div className={styles.container}>
      <label className={styles.container_label}>{label}</label>
      <Select
        isMulti
        options={options}
        onChange={handleChange}
        placeholder={placeholder}
        // className={`${styles.container_input} `}
      />
    </div>
  );
};

export default MultiSelect;
