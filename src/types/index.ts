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
