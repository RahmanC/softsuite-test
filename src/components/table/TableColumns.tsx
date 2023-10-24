import { GetLookups } from "utils/getLookups";
import styles from "./Table.module.scss";

interface Value {
  value: string | number;
}

export const ELEMENT_COLUMN = () => {
  const { getClassificationName, getCategoryName } = GetLookups();

  return [
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Element Category",
      accessor: "categoryId",
      Cell: (value: any) => {
        let data = value.row.original.categoryId;
        return <span>{getCategoryName(data)}</span>;
      },
    },
    {
      header: "Element Classification",
      accessor: "classificationId",
      Cell: (value: any) => {
        let data = value.row.original.classificationId;
        return <span>{getClassificationName(data)}</span>;
      },
    },
    {
      header: "Status",
      accessor: "status",
      Cell: ({ value }: Value) => {
        return (
          <p
            className={`${styles.status} ${
              value !== "Active" && styles.inactive
            }`}
          >
            {value === "Active" ? "Active" : "Inactive"}
          </p>
        );
      },
    },
    {
      header: "Date & Time Modified",
      accessor: "createdAt",
    },
    {
      header: "Modified By",
      accessor: "modifiedBy",
    },
  ];
};

export const ELEMENT_DETAILS_COLUMN = () => {
  const { getSubOrganizationName, getCategoryName, getDepartment } =
    GetLookups();

  return [
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Sub-Organization",
      accessor: "suborganizationId",
      Cell: (value: any) => {
        let data = value.row.original.suborganizationId;
        return <span>{getSubOrganizationName(data)}</span>;
      },
    },
    {
      header: "Department",
      accessor: "departmentId",
      Cell: (value: any) => {
        let data = value.row.original.departmentId;
        return <span>{getDepartment(data)}</span>;
      },
    },
    {
      header: "Employee Category",
      accessor: "employeeCategoryValueId",
      Cell: (value: any) => {
        let data = value.row.original.employeeCategoryValueId;
        return <span>{getCategoryName(data)}</span>;
      },
    },
    {
      header: "Amount",
      accessor: "amount",
      Cell: ({ value }: Value) => {
        return (
          <p>
            NGN{" "}
            {Number(value)?.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
        );
      },
    },
  ];
};
