import Footer from "layout/footer/Footer";
import Navbar from "layout/navbar/Navbar";
import Sidebar from "layout/sidebar/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

const AppLayout = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.container_inner}>
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
