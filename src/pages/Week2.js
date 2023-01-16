import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./WeekSummary.module.css";
import Breadcrumbs from "../components/Breadcrumbs";

const Week2 = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Week 2" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Reading Response</Card.Title>
          <Card.Body>
            <strong>Quick Note</strong>
            <div>
              This week's homework will be short. I have a few appointments that
              I can't move and my wife and I leave for a cruise this Friday!! :)
              So that will take up my time for what would be "week 3" for this
              course. But don't worry. I'll be back to making games very soon!
            </div>
            <br />
            <div>
              <strong>
                Chapter 1 - Unity in Action: Multiplatform Game Development in
                C# Joseph Hocking
              </strong>
            </div>
            <div>
              This chapter gives a quick overview of Unity. Pros... cons... why
              the author chose it as a game engine to make games.
            </div>
          </Card.Body>
        </Card>

        <Card className={styles["card"]}>
          <Card.Title>Deliverables</Card.Title>
          <Card.Body>
            <div>
              <strong>
                Pong -{" "}
                <a
                  href="https://unity-projects-atb.netlify.app/pong/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://unity-projects-atb.netlify.app/pong/
                </a>
              </strong>
            </div>
            <br />
            <div>
              This is a very simple Pong game that I made to test a Unity build.
              You have basic controls with W and S (or alternatively up and down
              arrow) to control the paddle. The game will keep score, but it
              does not end unless you close the browser.
            </div>
            <div>
              I created this in order to test and deploy a simple WebGL build in
              Unity. I'll plan to build more games in unity this semester in
              this same way.
            </div>
            <br />
            <div>
              Next up is my Galaga clone. I hope to have this posted and turned
              in at the end of week 4.{" "}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Week2;
