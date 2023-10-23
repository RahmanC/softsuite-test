import React from "react";
import Select from "react-select";
import styles from "./Input.module.scss";

interface MultiSelectProps {
  label: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  onChange: (selectedOptions: { value: string; label: string }[]) => void;
  error?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  placeholder,
  onChange,
  label,
  error,
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
        closeMenuOnSelect={false}
      />
      {error && <span className={styles.error_message}>{error}</span>}
    </div>
  );
};

export default MultiSelect;
