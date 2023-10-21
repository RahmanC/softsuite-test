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
            value === "inactive" && styles.inactive
          }`}
        >
          {value}
        </p>
      );
    },
  },
  {
    header: "Date & Time Modified",
    accessor: "date",
  },
  {
    header: "Modified By",
    accessor: "modified",
  },
];
