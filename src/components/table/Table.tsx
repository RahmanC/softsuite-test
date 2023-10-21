import React, { useMemo, useState } from "react";
import { useSortBy, useTable, useGlobalFilter, Column } from "react-table";

import styles from "./Table.module.scss";
import { ReactComponent as Sort } from "assets/svg/sort.svg";
import MoreActions from "components/moreAction/MoreAction";
import Pagination from "components/pagination/Pagination";

type ColumnData = Array<Column<any>>;
type RowData = Array<{ [key: string]: any }>;

interface TableDataProps {
  columnData: ColumnData;
  rowData: RowData;
  loading?: boolean;
  error?: boolean;
  pageSize?: number;
  list?: any;
  customText?: string;
}

const Table = ({
  columnData,
  rowData,
  loading,
  error,
  pageSize,
  list,
  customText,
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
  const size = pageSize || 5;
  const pagesVisited = pageNumber * size;
  const pageCount = Math.ceil(rows?.length / size);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
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
              {list && (
                <th className={styles.container_table_head_th}>Action</th>
              )}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {loading ? (
            <tr>
              <div>Loading...</div>
            </tr>
          ) : rows?.length < 1 ? (
            <tr>
              <td>No record</td>
            </tr>
          ) : (
            rows?.slice(pagesVisited, pagesVisited + size)?.map((row: any) => {
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
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {rows?.length > size && (
        <Pagination pageCount={pageCount} onPageChange={changePage} />
      )}
    </div>
  );
};

export default Table;
