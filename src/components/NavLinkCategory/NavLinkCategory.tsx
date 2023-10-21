import React from "react";
import { useClickOutside } from "hooks/useClickOutside";
import styles from "./NavLinkCategory.module.scss";
import NavLink from "components/NavLink/NavLink";
import { NavLinkCatProps } from "types";
import { ReactComponent as ArrowDown } from "assets/svg/arrowDown.svg";
import { ReactComponent as ArrowUp } from "assets/svg/arrow-up-white.svg";

const NavLinkCategory = ({
  heading,
  options,
  icon,
  iconActive,
}: NavLinkCatProps) => {
  const { visible, ref, setVisible } = useClickOutside();

  const handleMenu = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles.nav_link_category} ref={ref}>
      <div
        className={`${styles.nav_link_category_head} ${
          visible && styles.visible
        }`}
        onClick={handleMenu}
      >
        <div className={styles.nav_link_category_head_left}>
          <span className={styles.nav_link_category_head_icon}>
            {visible ? iconActive : icon}
          </span>
          <p className={styles.nav_link_category_head_heading}>{heading}</p>
        </div>
        {visible ? <ArrowUp /> : <ArrowDown />}
      </div>
      {visible &&
        options.map((o, index: number) => (
          <div className={styles.nav_link_category_sub}>
            <NavLink key={index} text={o.text} />
          </div>
        ))}
    </div>
  );
};

export default NavLinkCategory;
