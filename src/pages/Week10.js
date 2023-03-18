import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./WeekSummary.module.css";
import Breadcrumbs from "../components/Breadcrumbs";

const Week10 = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Week 10" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Reading Response</Card.Title>
          <Card.Body>
            {/* <strong>Title</strong> */}
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
                  href="https://hazard-pay.netlify.app/build2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  FPS Game - Hazard Pay
                </a>
              </strong>
            </div>
            <br />
            <strong>Hazard Pay</strong>
            <div>
              This week I plugged away a on a few updates for my FPS game.{" "}
            </div>
            <br />
            <div>
              I spent some time getting Unity set up on my Windows machine since
              it has a bigger screen and it's just easier to work on compared to
              my MacBook. So I rebuilt the project and made some additions. I'm
              also trying to be thoughtful about how I'm writing my code (as
              opposed to blindly following the tutorial). For instance, I
              borrowed from a different tutorial to create my player movement
              scripts. I really liked the pattern that Brackey used for player
              movement. So now I have to be thoughtful about how to add to my
              code, since my code base doesn't line up perfectly with my current
              tutorial on Udemy. It takes a little extra work to think though
              the problem, but I like that better anyway because it forces me to
              keep my brain in the driver's seat.
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
            </ul>
            <div>Next up...</div>
            <ul>
              <li>
                Shooting (likely with raycasting) I may try some slow-moving
                projectiles as well.
              </li>
              <li>Enemy (computer) players </li>
              <li>Health</li>
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

export default Week10;
