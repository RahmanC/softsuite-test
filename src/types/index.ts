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
  actions?: any;
  customText?: string;
}

export interface DetailsProps {
  name?: string;
  classification?: string;
  category?: string;
  payrun?: string;
  description?: string;
  reporting?: string;
  startDate?: string;
  endDate?: string;
  type?: string;
  frequency?: string;
  months?: string[];
  prorate?: string;
  status?: string;
}

export interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export interface ConditionalProps {
  isVisible: boolean;
  children: any;
}
