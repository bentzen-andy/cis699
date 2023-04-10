import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./WeekSummary.module.css";
import Breadcrumbs from "../components/Breadcrumbs";

const Week13 = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Week 13" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Deliverables</Card.Title>
          <Card.Body>
            <div>
              <strong>
                <a
                  href="https://hazard-pay.netlify.app/build4/"
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
            <div>
              Some really good improvements this week. I now have more guns, a
              main menu, more enemies, and music/SFX. I also added some
              pickups/items within the level including ammo pickups (one for
              each weapon type), health pickups, checkpoints, and a bouncepad. I
              also added a death sequence where the screen fades to red and a
              pause menu (if you press ESC).
            </div>
            <br />

            <strong>Current Challenges and Future Outlook</strong>
            <div>
              I'm loving the progress that I'm making so far. However, I am
              running into a new issue: My enemy characters can sometimes move
              is a way that somehow separates them from their colliders. This
              causes a number of issues. When the issue occurs, all game objects
              (including bullets) are clipping through the enemies without
              damaging them. They also appear to move through walls/floors, and
              hover in the air. I'm not sure what's causing this yet. I just
              know that the issue is more likely to occur if I use the bouncepad
              to jump up onto the tall green block. I'll need to do some digging
              here. Maybe revert back a few commits to see where this issue
              began.
            </div>
            <br />

            <div>
              Over the next two weeks, I'm planning to (1) build a few new
              levels and (2) clean up the environments with shaders. I'm still
              not exactly sure how to implement shaders into this game, but I
              have a rough idea. I'd like to create an outdoor, downtown
              environment. Maybe I can use shaders to create some brick
              buildings. Maybe I can create some small puddles of water in the
              street/sidewalk. With a little luck, I'll be able to polish this
              up enough to make it actually look/feel like a real game!
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
              <li>Shooting (right click to aim down sights)</li>
              <li>Weapons (cycle through guns with [1],[2],[3], or TAB)</li>
              <li>UI</li>
              <li>Audio</li>
            </ul>
            <div>Next up...</div>
            <ul>
              <li>More levels</li>
              <li>Materials (via Unity shader graph)</li>
            </ul>
            <br />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Week13;
