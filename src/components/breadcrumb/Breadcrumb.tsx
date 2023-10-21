import React from "react";
import { Link } from "react-router-dom";
import { BreadcrumbProps } from "types";
import styles from "./Breadcrumb.module.scss";
import { ReactComponent as Arrow } from "assets/svg/arrow-right.svg";

const Breadcrumb = ({ paths }: BreadcrumbProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_breadcrumb}>
        {paths.map((path, index) => {
          const activeItem = index !== paths.length - 1;
          return (
            <li key={index} className={styles.container_breadcrumb_item}>
              {path.link ? (
                <Link
                  to={path.link}
                  className={`${styles.container_breadcrumb_item_link} ${
                    !activeItem && styles.container_breadcrumb_item_lastLink
                  }`}
                >
                  {path.label}
                </Link>
              ) : (
                <span
                  className={`${styles.container_breadcrumb_item_link} ${
                    !activeItem && styles.container_breadcrumb_item_lastLink
                  }`}
                >
                  {path.label}
                </span>
              )}
              {/* icon should be hidden for the active page */}
              {activeItem && <Arrow />}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;
