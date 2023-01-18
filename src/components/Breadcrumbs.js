import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = ({ links }) => {
  return (
    <Breadcrumb>
      {links
        .map((link, i) => (
          <div key={i + 1}>
            <Link to={link.link} style={{ color: "#7c3078" }}>
              {link.label}
            </Link>
            <span className={styles["divider"]}>/</span>
          </div>
        ))
        .slice(0, -1)}
      <Breadcrumb.Item active key={0}>
        {" "}
        {links[links.length - 1].label}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};
export default Breadcrumbs;
