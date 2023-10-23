import React from "react";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import styles from "./Navbar.module.scss";
import Search from "components/search/Search";
import User from "components/user/User";
import { ReactComponent as Home } from "assets/svg/house.svg";
import CustomSwitcher from "components/customSwitch/CustomSwitcher";
import MobileHamburger from "./MobileHamburger/MobileHamburger";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isMobile } = useSelector((state: any) => state.utils);

  return (
    <div className={styles.container}>
      <MobileHamburger />
      {!isMobile && (
        <>
          <div className={styles.container_logo}>
            <Logo />
          </div>
          <div className={styles.container_column2}>
            <CustomSwitcher
              icon={<Home />}
              label="Change Organisation"
              value="PaperSoft Limited"
              customClass={styles.container_column2_switch}
            />
            <Search placeholder="Search for anything..." />
          </div>
        </>
      )}
      <div>
        <User />
      </div>
    </div>
  );
};

export default Navbar;
