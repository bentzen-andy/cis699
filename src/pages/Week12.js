import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./WeekSummary.module.css";
import Breadcrumbs from "../components/Breadcrumbs";

const Week12 = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Week 12" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Reading Response</Card.Title>
          <Card.Body>
            <div>No reading for this week.</div>
            <br />
          </Card.Body>
        </Card>
        <Card className={styles["card"]}>
          <Card.Title>Deliverables</Card.Title>
          <Card.Body>
            <div>
              <strong>
                <a
                  href="https://hazard-pay.netlify.app/build3/"
                  target="_blank"
                  rel="noreferrer"
                >
                  FPS Game - Hazard Pay
                </a>
              </strong>
            </div>

            <div>
              <strong>
                <a
                  href="https://github.com/bentzen-andy/HazardPay"
                  target="_blank"
                  rel="noreferrer"
                >
                  FPS Game - Hazard Pay - GitHub
                </a>
              </strong>
            </div>
            <br />
            <strong>Hazard Pay</strong>
            <div>I made a few more updates to the game this week.</div>
            <br />
            <div>
              The game now has enemies that attack the player with red lasers.
              The player has a limited amount of health. If you die, you will
              respawn in 4 seconds. If you succeed in killing all the bad guys,
              then you will be rewarded with an empty space to wander around for
              the rest of eternity (as I have yet to implement the logic for
              what to do when you beat a level).
            </div>
            <br />

            <div>
              As far as my current progress, here's what I have done so far and
              what's next.
            </div>
            <br />

            <div>Competed so far... </div>
            <ul>
              <li>Player movement (WASD)</li>
              <li>Running (hold shift)</li>
              <li>Movement bobbing animation (as the player is walking)</li>
              <li>Jumping (spacebar)</li>
              <li>Enemy (computer) players </li>
              <li>Health</li>
              <li>Shooting</li>
            </ul>
            <div>Next up...</div>
            <ul>
              <li>Weapons</li>
              <li>UI</li>
              <li>Audio</li>
              <li>More maps</li>
              <li>Materials (via Unity shader graph)</li>
            </ul>
            <br />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Week12;
