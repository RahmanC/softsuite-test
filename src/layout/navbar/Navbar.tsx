import React from "react";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import styles from "./Navbar.module.scss";
import ChangeOrganisation from "components/organisation/ChangeOrganisation";
import Search from "components/search/Search";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <ChangeOrganisation />
      <Search placeholder="Search for anything..." />
    </div>
  );
};

export default Navbar;
