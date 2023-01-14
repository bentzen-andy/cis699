import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles["container"]}>
      <SideNav />
      <main className={styles["main-content"]}>
        <TopNav />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
