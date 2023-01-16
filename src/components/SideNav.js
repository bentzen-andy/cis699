import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import styles from "./SideNav.module.css";

const SideNav = () => {
  const { navigate } = useNavigate();

  return (
    <Nav className={styles["side-nav"]}>
      <div
        className={styles["main-links"]}
        style={{ position: "sticky", top: "1rem" }}
      >
        <div className={styles["logo-container"]}>
          <Link to="/">
            <div className={styles["link"]}>CIS 699 - Computer Graphics</div>
          </Link>
        </div>
        <Link className={styles["link"]} to="/week-1">
          <span>
            <div className={styles["link-text"]}>Week 1</div>
          </span>
        </Link>
        <Link className={styles["link"]} to="/week-2">
          <span>
            <div className={styles["link-text"]}>Week 2</div>
          </span>
        </Link>
        <Link className={styles["link"]} to="/week-3">
          <span>
            <div className={styles["link-text"]}>Week 3</div>
          </span>
        </Link>
      </div>
    </Nav>
  );
};

export default SideNav;
