import React from "react";
import { PageSizeProps } from "types";
import styles from "./PageSize.module.scss";

const PageSize = ({
  totalItems,
  itemsPerPage,
  onPageSizeChange,
}: PageSizeProps) => {
  const pageSizes = [5, 10, 15];

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = parseInt(e.target.value, 10);
    onPageSizeChange(newSize);
  };

  return (
    <div className={styles.container}>
      <span className={styles.container_text}>Showing</span>
      <select
        value={itemsPerPage}
        onChange={handlePageSizeChange}
        className={styles.container_select}
      >
        {pageSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <span className={styles.container_text}>out of {totalItems}</span>
    </div>
  );
};

export default PageSize;
