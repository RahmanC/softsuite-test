import styles from "./Table.module.scss";

interface Value {
  value: string;
}

export const ELEMENT_COLUMN = [
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Element Category",
    accessor: "category",
  },
  {
    header: "Element Classification",
    accessor: "classification",
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

export const ELEMENT_DETAILS_COLUMN = [
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Sub-Organization",
    accessor: "sub",
  },
  {
    header: "Department",
    accessor: "department",
  },
  {
    header: "Employee Category",
    accessor: "category",
  },
  {
    header: "Amount",
    accessor: "amount",
    Cell: ({ value }: Value) => {
      return <p>NGN {value}</p>;
    },
  },
  {
    header: "Details",
    accessor: "details",
    Cell: ({ value }: Value) => {
      return <p className={styles.more}>View details</p>;
    },
  },
];
