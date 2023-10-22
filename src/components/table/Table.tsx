import React, { useMemo, useState } from "react";
import { useSortBy, useTable, useGlobalFilter } from "react-table";

import styles from "./Table.module.scss";
import { ReactComponent as Sort } from "assets/svg/sort.svg";
import MoreActions from "components/moreAction/MoreAction";
import Pagination from "components/pagination/Pagination";
import PageSize from "components/pageSize/PageSize";
import { TableDataProps } from "types";
import Action from "components/Action/Action";
import NoData from "components/NoData/NoData";

const Table = ({
  columnData,
  rowData,
  loading,
  list,
  actions,
  customText,
  noRecord,
}: TableDataProps) => {
  const columns = useMemo(() => columnData, [columnData]);
  const data = useMemo(() => rowData, [rowData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  // pagination
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(rows?.length / itemsPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const handlePageSizeChange = (newSize: number) => {
    setItemsPerPage(newSize);
    setPageNumber(0);
  };

  return (
    <div className={styles.container}>
      <table {...getTableProps()} className={styles.container_table}>
        <thead className={styles.container_table_head}>
          {headerGroups?.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers?.map((column: any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className={styles.container_table_head_th}>
                    <div>{column.render("header")}</div>
                    <span>
                      <Sort />
                    </span>
                  </div>
                </th>
              ))}
              {(list || actions) && (
                <th className={styles.container_table_head_th}>
                  {list ? "Action" : "Actions"}
                </th>
              )}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {loading ? (
            <tr>
              <td colSpan={columns.length}>
                <span>Loading...</span>
              </td>
            </tr>
          ) : rows?.length < 1 ? (
            <tr>
              <td colSpan={columns.length}>
                <NoData noRecord={noRecord} />
              </td>
            </tr>
          ) : (
            rows
              ?.slice(pagesVisited, pagesVisited + itemsPerPage)
              ?.map((row: any) => {
                prepareRow(row);
                return (
                  <tr
                    {...row?.getRowProps()}
                    className={styles.container_table_row}
                  >
                    {row?.cells?.map((cell: any) => {
                      return (
                        <td
                          {...cell?.getCellProps()}
                          className={styles.container_table_row_text}
                        >
                          {cell?.render("Cell")}
                        </td>
                      );
                    })}
                    {list && (
                      <td className={styles.container_table_row_icon}>
                        <MoreActions
                          data={row?.original}
                          list={list}
                          customText={customText}
                        />
                      </td>
                    )}
                    {actions && (
                      <td className={styles.container_table_row_icon}>
                        <Action data={row?.original} customText={customText} />
                      </td>
                    )}
                  </tr>
                );
              })
          )}
        </tbody>
      </table>
      <div className={styles.container_paginate}>
        <PageSize
          totalItems={rows?.length}
          itemsPerPage={itemsPerPage}
          onPageSizeChange={handlePageSizeChange}
        />
        {rows?.length > itemsPerPage && (
          <Pagination pageCount={pageCount} onPageChange={changePage} />
        )}
      </div>
    </div>
  );
};

export default Table;
