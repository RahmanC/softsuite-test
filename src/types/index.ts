import { Control, DeepMap, FieldError, FieldValues } from "react-hook-form";
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
  customClass?: string;
  disabled?: any;
  type?: any;
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
  noRecord: string;
  handleDetails?: any;
  onClickEdit?: any;
  onClickDelete?: any;
}

export interface DetailsProps {
  name?: string;
  classificationId?: string;
  categoryId?: string;
  payRunId?: string;
  description?: string;
  reportingName?: string;
  effectiveStartDate?: string;
  effectiveEndDate?: string;
  processingType?: string;
  payFrequency?: string;
  selectedMonths?: string[];
  prorate?: string;
  status?: string;
}

export interface LinkDetailsProps {
  name?: string;
  suborganizationId?: string;
  amountType?: string;
  departmentId?: string;
  employeeTypeValueId?: string;
  locationId?: string;
  effectiveStartDate?: string;
  effectiveEndDate?: string;
  employeeCategoryValueId?: string;
  createdAt?: string;
  housing?: string;
  grade?: string;
  status?: string;
  gradeStep?: string;
  pension?: string;
  amount?: string;
}

export interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  customClass?: string;
  customInner?: string;
}

export interface ConditionalProps {
  isVisible: any;
  children: any;
}

export interface NoRecord {
  noRecord: string;
}

export interface InputProps<T extends FieldValues> {
  name: any;
  control: Control<T>;
  label: string;
  type: "text" | "date" | "radio" | "select" | "textarea" | "toggle";
  options?: any[];
  multiple?: boolean;
  placeholder?: string;
  errors?: DeepMap<T, FieldError>;
  initialValue?: any;
  defaultValue?: any;
  register?: any;
}

export interface ToggleProps {
  data: boolean;
  handleToggle: any;
  label?: string;
}

export interface DeleteProps {
  label: string;
  onCancel?: () => void;
  onClick: () => void;
}
export interface ConfirmProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}
