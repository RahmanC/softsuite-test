import React from "react";
import styles from "./PageHeader.module.scss";
import { PageHeaderprops } from "types";
import Search from "components/search/Search";
import { ReactComponent as Filter } from "assets/svg/filter.svg";
import Button from "components/button/Button";

const PageHeader = ({
  header,
  placeholder,
  buttonLabel,
  filter,
  onClick,
}: PageHeaderprops) => {
  return (
    <div className={styles.container}>
      <p className={styles.container_header}>{header}</p>
      <div className={styles.container_bottom}>
        <div className={styles.container_bottom_search}>
          <Search
            placeholder={placeholder}
            customInput={styles.container_bottom_search_input}
          />
          {filter && <Filter />}
        </div>
        <Button label={buttonLabel} icon={true} onClick={onClick} />
      </div>
    </div>
  );
};

export default PageHeader;
