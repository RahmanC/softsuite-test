export interface SearchProps {
  placeholder: string;
  customClass?: string;
}

export interface CustomSwitch {
  label: string;
  value: string;
  icon: any;
  customClass?: any;
}

export interface NavLinkProps {
  icon?: any;
  text: string;
}

export interface NavLinkCatProps {
  options: NavLinkProps[];
  icon?: any;
  iconActive?: any;
  heading: string;
}
