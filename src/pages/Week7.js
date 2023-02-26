import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./WeekSummary.module.css";
import Breadcrumbs from "../components/Breadcrumbs";
import mario from "./mario2.png";

const Week7 = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Week 7" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Reading Response</Card.Title>
          <Card.Body>
            <div>
              <strong>Chapter 6-7 - Unity in Action, Joseph Hocking.</strong>
            </div>
            <br />
            <div>
              <strong>User Interface </strong>
            </div>
            <div>
              I spent most of my time this week adding features onto my Mario
              game. The chapter readings helped with this a little, but I also
              used a few online tutorials to figure out who to make the user
              interface work in Unity.
            </div>
          </Card.Body>
        </Card>
        <Card className={styles["card"]}>
          <Card.Title>Deliverables</Card.Title>
          <Card.Body>
            <div>
              <strong>
                <a
                  href="https://unity-projects-atb.netlify.app/super-mario-bros3/"
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

            {/* <strong>
              <div></div>
            </strong> */}
            <div>
              This week my mantra was "Don't let perfection become the enemy of
              good." I really tried hard to make progress on this game even if
              all the details are't totally polished. I managed to finish up the
              vast majority of my to-do list from last week.
            </div>
            <br />

            <div>In total, I got the following done: </div>

            <ol>
              <li>Added sound and music.</li>
              <li>Fixed a few collision-related bugs.</li>
              <li>Added a GUI to show score, coins, etc.</li>
              <li>
                Added the ability to pause the game (press the Enter key).
              </li>
              <li>Built level 1-2 (or at least most of it).</li>
            </ol>

            <div>
              I think I'm pretty happy with how this project went. It's really
              gratifying to move from having a pile of lifeless sprites to
              having a recognizable game. I'd like to polish up a few more
              things for game some time in the future, but for now I'm ready to
              move on to building a game in 3D.
            </div>
            <br />

            <strong>
              <div>What's next? </div>
            </strong>
            <div>
              I'm now officially in the second half of the semester, so I'd like
              to get rolling on my term project, which will be a first-person
              shooter. I'll start slow with a Unity "Microgame" (which is
              basically a pre-built example project that Unity offers so that
              you can learn the right way to build it). I fond a tutorial that
              sort of guides you through the process. I'm hoping to get
              acclimated to 3D games in general with this micro game, and from
              there I'll start a my actual project. I'll also finish out a few
              more readings from the Edward Angel textbook to ensure I get some
              of the fundamentals down in terms of 3D computer graphics.
            </div>
            <br />

            <div>
              I updated the <a href="/schedule">schedule</a> with a few things
              to help keep me on track.
            </div>
            <br />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Week7;
