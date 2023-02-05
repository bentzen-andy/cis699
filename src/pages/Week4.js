import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./WeekSummary.module.css";
import Breadcrumbs from "../components/Breadcrumbs";

const Week4 = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Week 4" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Reading Response</Card.Title>
          <Card.Body>
            <strong>
              Chapter 14: Audio Control Interface - Unity in Action:
              Multiplatform Game Development in C# Joseph Hocking
            </strong>
            <div>
              This chapter describes how to add music and sound effects to a
              game in Unity. I used this info to add some sound effects to my
              Galaga game. I added laser sounds when the ships fire at each
              other, and I added explosion sounds for when the ships blow up.
            </div>
            <br />
          </Card.Body>
        </Card>
        <Card className={styles["card"]}>
          <Card.Title>Deliverables</Card.Title>
          <Card.Body>
            <div>
              <strong>
                Galaga Clone -{" "}
                <a
                  href="https://unity-projects-atb.netlify.app/GalagaClone2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://unity-projects-atb.netlify.app/GalagaClone2/
                </a>
              </strong>
            </div>
            <br />
            <div>
              <strong>Instructions:</strong>
            </div>
            <div>Move: arrow keys or WASD</div>
            <div>Shoot: control or spacebar</div>
            <div>Destroy all the enemy ships to win.</div>
            <br />
            <div>
              <strong>What I Learned</strong>
            </div>
            <div>
              I followed this tutorial to get me started on this project:{" "}
              <a href="https://www.youtube.com/watch?v=-on5HRW8v1A">
                https://www.youtube.com/watch?v=-on5HRW8v1A
              </a>
              . I learned a little bit about how to make projectiles in Unity
              and how to make those projectiles interact with other game objects
              (i.e., how to make sure a projectile hits and destroys an enemy
              ship.).
            </div>
            <br />
            <div>
              When I finished the tutorial, I ended up with this for the game:{" "}
              <a
                href="https://unity-projects-atb.netlify.app/GalagaClone1/"
                target="_blank"
                rel="noreferrer"
              >
                https://unity-projects-atb.netlify.app/GalagaClone1/
              </a>
            </div>
            <br />
            <div>
              Next, I added the following elements to the game on my own:
              <ol>
                <li>I added multiple enemy ships. </li>
                <li>
                  I added sound effects--for example: shooting sounds, explosion
                  sounds, music. (This was my main learning objective for the
                  week since my assigned reading for the week dealt with adding
                  sounds and music in Unity.)
                </li>
                <li>
                  I wrote a script to control how the enemy ships shoot. On my
                  first revision, every enemy ship would fire at the exact same
                  time (boring...). So I randomized it. I made it so that every
                  ship needs to take some random amount of time to "reload"
                  between shots (between 0 and 40 seconds). This makes them fire
                  independently from each other. I also programmed the enemy
                  ships to reload their guns faster as time progresses. This
                  keeps the game challenging and encouraged the player to shoot
                  fast before it gets out of control. (Try playing the game for
                  60 seconds without shooting any of the enemy ships and see how
                  long you can last!)
                </li>
              </ol>
            </div>
            <div>
              <strong>If I Had More Time</strong>
            </div>
            <div>
              I'd like to work a little more on this game throughout the
              semester. If I have more time I'd like to fix a few bugs (e.g.,
              the music doesn't start until you click the screen, and the left
              and right boundaries of the game exceed the span of the
              viewport.). I'd also like to add some more of the no-brainer
              elements that any complete game should have. For instance:
              <ul>
                <li>scoreboard</li>
                <li>main menu</li>
                <li>ability to pause the game</li>
                <li>some message for when all enemies have been killed</li>
                <li>
                  some response from the game when the player has been killed
                  (e.g., give the option to restart)
                </li>
                <li>bonuses/power-ups</li>
                <li>additional waves of enemies</li>
                <li>
                  maybe an overworld screen that allows the player to pick
                  different planets to visit (i.e., the player should be able to
                  advance to different levels in the game)
                </li>
              </ul>
            </div>
            <div>
              But for today I needed to focus on my objectives for this week
              (sound/music) and move on.
            </div>
            <br />
            <div>
              For next week, I will dig into basic animation in WebGL. I plan to
              do my reading from Angel (ch 3), and then I'll likely dig into
              some JS animation libraries (e.g., three.js). I might also try to
              dig into shaders. I still nee d to get a good theoretical grasp on
              how shaders work, how to write them, and why they are used to
              begin with. Coming soon!
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Week4;
