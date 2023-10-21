import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Paginate.module.scss";
import { ReactComponent as ArrowLeft } from "assets/svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "assets/svg/arrow-right.svg";
import { PaginationProps } from "types";

const Pagination = (props: PaginationProps) => {
  return (
    <div className={styles.container}>
      <ReactPaginate
        previousLabel={<ArrowLeft />}
        nextLabel={<ArrowRight />}
        pageCount={props.pageCount}
        onPageChange={props.onPageChange}
        breakLabel={"..."}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        containerClassName={styles.paginationBtn}
        previousLinkClassName={styles.previousBtn}
        nextLinkClassName={styles.nextBtn}
        disabledClassName={styles.paginationDisabled}
        activeClassName={styles.paginationActive}
      />
    </div>
  );
};

export default Pagination;
