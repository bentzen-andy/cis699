import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "./Home.module.css";

let CURRENT_WEEK = 6;

const Home = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs links={[{ link: "/", label: "Home" }]} />
      </Container>

      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Body>
            <Card.Title>Computer Graphics Portfolio</Card.Title>
            <Link to="/schedule">Schedule</Link>

            {new Array(16).fill("").map((item, i) => {
              if (i + 1 <= CURRENT_WEEK) {
                return (
                  <Link className={styles["link"]} to={`/week-${i + 1}`}>
                    <span>
                      <div className={styles["link-text"]}>{`Week ${
                        i + 1
                      }`}</div>
                    </span>
                  </Link>
                );
              } else {
                return (
                  <div className={styles["text"]}>
                    <span>
                      <div className={styles["link-text"]}>{`Week ${
                        i + 1
                      }`}</div>
                    </span>
                  </div>
                );
              }
            })}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Home;
