import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>© 2022 SoftSuite. All rights reserved.</p>
      <p>support@softsuite.com</p>
    </div>
  );
};

export default Footer;
