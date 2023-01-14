import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import styles from "../WeekSummary.module.css";
import Breadcrumbs from "../../components/Breadcrumbs";

const Week1 = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Week 1" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Hello, Unity</Card.Title>
          <Card.Body>
            This is a very simple{" "}
            <a
              href="https://unity-projects-atb.netlify.app/pong/"
              target="_blank"
              rel="noreferrer"
            >
              Pong game
            </a>{" "}
            that I made to test a Unity build. You have basic controls with W
            and S (or alternatively up and down arrow) to control the paddle.
            The game will keep score, but it does not end unless you close the
            browser.
          </Card.Body>
          <Card.Body>
            I created this in order to test and deploy a simple WebGL build in
            Unity. I'll plan to build more games in unity this semester in this
            same way.
          </Card.Body>
        </Card>
        <Card className={styles["card"]}>
          <Card.Title>
            Interactive Computer Graphics, 7th ed. Edward Angel.
          </Card.Title>
          <Card.Body>
            <div>
              <strong>Chapter 1 - Reading Response</strong>
            </div>
            <div>
              This chapter is a intro to the basics of computer graphics.
            </div>
          </Card.Body>

          <Card.Body>
            <div>
              <strong>Chapter 2 - Reading Response</strong>
            </div>
            <div>TODO...</div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Week1;
