import React from "react";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import styles from "./Navbar.module.scss";
import ChangeOrganisation from "components/organisation/ChangeOrganisation";
import Search from "components/search/Search";
import User from "components/user/User";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_logo}>
        <Logo />
      </div>
      <div className={styles.container_column2}>
        <ChangeOrganisation />
        <Search placeholder="Search for anything..." />
      </div>
      <div>
        <User />
      </div>
    </div>
  );
};

export default Navbar;
