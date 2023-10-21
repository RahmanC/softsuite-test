import { Column } from "react-table";

export interface SearchProps {
  placeholder: string;
  customClass?: string;
  customInput?: string;
}

export interface CustomSwitch {
  label: string;
  value: string;
  icon: React.ReactNode;
  customClass?: any;
}

export interface NavLinkProps {
  icon?: React.ReactNode;
  text: string;
}

export interface NavLinkCatProps {
  options: NavLinkProps[];
  icon?: React.ReactNode;
  iconActive?: React.ReactNode;
  heading: string;
}

export interface BreadcrumbProps {
  paths: { label: string; link?: string }[];
}

export interface PageHeaderprops {
  header: string;
  placeholder: string;
  buttonLabel?: string;
  filter?: boolean;
  onClick?: () => void;
}

export interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export interface ListProps {
  icon: React.ReactNode;
  text: string;
  link?: string;
  onClickModal?: any;
}

export interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

export interface PageSizeProps {
  totalItems: number;
  itemsPerPage: number;
  onPageSizeChange: (newSize: number) => void;
}

export interface TableDataProps {
  columnData: Array<Column<any>>;
  rowData: Array<{ [key: string]: any }>;
  loading?: boolean;
  error?: boolean;
  pageSize?: number;
  list?: any;
  customText?: string;
}
