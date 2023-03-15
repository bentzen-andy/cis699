import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import styles from "./SideNav.module.css";

let CURRENT_WEEK = 10;

const SideNav = () => {
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
        <Link className={styles["link"]} to="/schedule">
          <span>
            <div className={styles["link-text"]}>Schedule</div>
          </span>
        </Link>
        {new Array(16).fill("").map((item, i) => {
          if (i + 1 <= CURRENT_WEEK) {
            return (
              <Link className={styles["link"]} to={`/week-${i + 1}`}>
                <span>
                  <div className={styles["link-text"]}>{`Week ${i + 1}`}</div>
                </span>
              </Link>
            );
          } else {
            return (
              <div className={styles["text"]}>
                <span>
                  <div className={styles["link-text"]}>{`Week ${i + 1}`}</div>
                </span>
              </div>
            );
          }
        })}
      </div>
    </Nav>
  );
};

export default SideNav;
