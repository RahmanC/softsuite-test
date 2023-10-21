import * as React from "react";
import { NavLink as Nav } from "react-router-dom";
import style from "./NavLink.module.scss";
import { NavLinkProps } from "types";

const NavLink = ({ icon, text }: NavLinkProps) => {
  return (
    <Nav
      to={text.toLocaleLowerCase().replaceAll(" ", "-")}
      className={({ isActive }) =>
        isActive
          ? `${style.side_nav_link} ${style.active}`
          : style.side_nav_link
      }
    >
      {icon && <span>{icon}</span>}
      <span className={style.side_nav_link_text}>{text}</span>
    </Nav>
  );
};

export default NavLink;
