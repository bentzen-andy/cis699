import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./WeekSummary.module.css";
import Breadcrumbs from "../components/Breadcrumbs";
import mario from "./mario.png";

const Week6 = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Week 6" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Reading Response</Card.Title>
          <Card.Body>
            {/* <strong>Title</strong> */}
            <div>
              No reading this week. I spent all my time following a Unity
              tutorial. But don't worry--I wasn't slacking. I spent forever
              working on this game!
            </div>
            <br />
          </Card.Body>
        </Card>
        <Card className={styles["card"]}>
          <Card.Title>Deliverables</Card.Title>
          <Card.Body>
            <div>
              <strong>
                <a
                  href="https://unity-projects-atb.netlify.app/super-mario-bros2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Super Mario Bros - Demo
                </a>
              </strong>
            </div>

            <div>
              <strong>
                <a
                  href="https://github.com/bentzen-andy/SuperMarioBros/tree/main/Assets/Scripts"
                  target="_blank"
                  rel="noreferrer"
                >
                  Super Mario Bros - GitHub
                </a>
              </strong>
            </div>
            <br />
            <div>
              <img src={mario} alt="Super Mario Bros." width="70%" />
            </div>
            <br />

            <div>
              I spent this week through this{" "}
              <a href="https://www.youtube.com/watch?v=GCkq6XqyJZg&list=PLqlFiJjSZ2x1mrMpSQgYdRm8PyWRTg6He">
                Unity tutorial
              </a>{" "}
              for this Super Mario Bros game. The link above takes you to my
              recreation level 1-1.
            </div>
            <br />

            <div>
              The biggest part of the effort was implementing all the collision
              rules and physics. For instance, I had to implement all the
              gravity and jumping behavior for Mario in order to get the look
              and feel of the game to match the original. In other words I
              didn't use Unity's physics engine to make Mario move. Instead, I
              had to implement the gravity and time and velocity for all of
              Mario's movements. The reasoning behind this was that Unity's
              physics are designed to replicate real life, whereas the original
              Mario game tends to have unrealistic physics.
            </div>
            <br />

            <strong>
              <div>What went well?</div>
            </strong>
            <div>
              I really enjoyed getting my first enemy on the map. I was working
              on this the day after I get Mario's movement working, and it was
              really fun and satisfying to get it working. That was the point
              for me that it felt like a real game.
            </div>
            <br />

            <div>
              I also think I have a nice base to extend from for next week.
              There are still a few small bugs to work out, but overall I
              believe I can implement some new features without breaking too
              much of the existing code.
            </div>
            <br />

            <strong>
              <div>What didn't go well?</div>
            </strong>
            <div>
              Early on I followed pretty loosely from the tutorial. I tried to
              implement features in my own way and figure it all out on my own.
              After all, there's a lot of ways to accomplish the same thing in
              any 3D graphics. But later on in the tutorial videos, I found that
              some of the collision detection that I implemented wasn't working
              with the next part that I needed to build.
            </div>
            <br />
            <div>
              It was a nice learning experience, but I ended up spending a lot
              of time backtracking and stack-tracing my code to find the root
              cause of the bugs.
            </div>
            <br />

            <div>
              If you experiment a little, you can probably still find a few
              collision-related bugs. For instance, some of the Goombas and
              Koopas (the brown guys and the green turtles), don't turn around
              when they bump into each other. Or sometimes if you kick a shell,
              it will fail to kill the enemies when it hits them. I've taken
              some notes, and I have a list of bugs that I'd like to work on for
              next week.
            </div>
            <br />

            <strong>
              <div>What's next? </div>
            </strong>
            <div>
              I'd like continue working on this next week and finish
              implementing a few more features. For instance, I'd like to add
              some new moves and attacks for Mario (maybe Mario can get a new
              punch or slide attack). Or maybe I will add a few new power-ups
              like a feather that allows Mario to fly.
            </div>
            <br />

            <div>
              In total, I'd like to implement the following for next week:
              <ol>
                <li>Sound and music.</li>
                <li>Fix a few collision-related bugs.</li>
                <li>UI to show score, number of lives, coins, etc.</li>
                <li>Be able to pause the game.</li>
                <li>
                  Build new levels (the rest of world one and maybe an original
                  level).
                </li>
              </ol>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Week6;
