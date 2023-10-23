import React from "react";
import styles from "./Sidebar.module.scss";
import CustomSwitcher from "components/customSwitch/CustomSwitcher";
import { ReactComponent as Switch } from "assets/svg/switch.svg";
import { ReactComponent as Dashboard } from "assets/svg/home.svg";
import { ReactComponent as Payroll } from "assets/svg/payroll.svg";
import { ReactComponent as ActivePayroll } from "assets/svg/payroll-white.svg";
import { ReactComponent as ActiveElement } from "assets/svg/gear-white.svg";
import { ReactComponent as Element } from "assets/svg/gear.svg";
import { ReactComponent as Employee } from "assets/svg/user-group.svg";
import { ReactComponent as Account } from "assets/svg/user.svg";
import { ReactComponent as Logout } from "assets/svg/Logout.svg";
import NavLink from "components/NavLink/NavLink";
import NavLinkCategory from "components/NavLinkCategory/NavLinkCategory";
import { useSelector } from "react-redux";

const links = [{ text: "Elements" }, { text: "Balances" }];
const Sidebar = () => {
  const { showHamburger, isMobile } = useSelector((state: any) => state.utils);

  return (
    <div
      className={`${styles.container} ${
        isMobile && showHamburger ? styles.show_sidebar : ""
      }`}
    >
      <CustomSwitcher
        icon={<Switch />}
        label="Switch Module"
        value="Payroll Management"
      />
      <div className={styles.container_menu}>
        <NavLink icon={<Dashboard />} text="Dashboard" />
        <NavLinkCategory
          icon={<Payroll />}
          iconActive={<ActivePayroll />}
          heading="Payroll Activities"
          options={links}
        />
        <NavLink icon={<Dashboard />} text="Salary Structure" />
        <NavLinkCategory
          icon={<Element />}
          iconActive={<ActiveElement />}
          heading="Element Setup"
          options={links}
        />
        <NavLink icon={<Employee />} text="Employees" />
        <div className={styles.container_menu_divider}></div>

        <NavLinkCategory
          icon={<Element />}
          iconActive={<ActiveElement />}
          heading="Payroll Settings"
          options={links}
        />
        <NavLink icon={<Account />} text="My Account" />
        <NavLink icon={<Logout />} text="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;
