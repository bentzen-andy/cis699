import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./WeekSummary.module.css";
import Breadcrumbs from "../components/Breadcrumbs";
import fullView from "./wk9-full-view.png";
import options from "./wk9-options.png";
import parallel from "./wk9-parallel.png";
import perspective from "./wk9-perspective.png";

const Week9 = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Week 9" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Reading Response</Card.Title>
          <Card.Body>
            <div>
              <strong>
                Chapter 5: Viewing - Interactive Computer Graphics, 7th ed.
                Edward Angel.
              </strong>
            </div>
            <br />

            <div>
              <strong>Perspective vs Parallel</strong>
            </div>
            <div>
              This chapter was mainly about the difference between perspective
              and parallel views (and the range of possible perspective views in
              between). I think one of the best ways to explain the difference
              between them is to show a few images. Below are a few screenshots
              from AutoCAD. Note that these office chairs are perfectly lined up
              in rows and columns. Note that the parallel view makes it possible
              to line them up perfectly within the view but, in contrast, the
              perspective view more naturally mimics the human eye.
            </div>
            <br />

            <div>
              In technical terms, this is because the perspective view forces
              the camera to have a focal point that is some tangible distance
              from the camera. That's why the perspective view below shows the
              chairs sort converging to that focal point. Imagine you had an
              infinite number of chairs lined up. In the perspective view, they
              would appear to converge a single point (similar to rail-road
              tracks). In contrast, the parallel view has a camera focal point
              that is infinitely far from the camera. It's kind of a funny thing
              to get your head around, but it enables us to create some good
              applications (especially in architecture and design).
            </div>
            <br />

            <div>
              <strong>Office Chairs in AutoCAD</strong>
            </div>
            <div>
              <img src={fullView} alt="Full view" width="800px" />
            </div>
            <br />

            <div>
              <strong>View Settings in AutoCAD</strong>
            </div>
            <div>
              <img src={options} alt="options" width="300px" />
            </div>
            <br />

            <div>
              <strong>Parallel View from the Front</strong>
            </div>
            <div>
              <img src={parallel} alt="Parallel view" width="800px" />
            </div>
            <br />

            <div>
              <strong>Perspective View from the Front</strong>
            </div>
            <div>
              <img src={perspective} alt="Perspective view" width="800px" />
            </div>
            <br />

            <br />

            <strong>Applications for Perspective Views</strong>
            <div>
              I won't repeat what the textbook already says about perspective
              views, (or how to configure it in WebGL), but I will say a little
              about how to choose an ideal field of view (FoV) for a game. For
              instance, if you're making a first-person shooter, it might be a
              good start to choose 60 degrees for your FoV (since this most
              closely mimics the human eye). This is an ideal FoV for console
              games where the user is likely siting in their living room with a
              big-screen TV. However game developers who target desktop games
              may opt for a 90-95 degree FoV to prevent motion sickness. This
              has to do with the fact that a desktop gamer will be sitting much
              closer to the screen and may not actually have the entire screen
              in his/her field of view at the same time. (See this concise video
              for details:{" "}
              <a
                href="https://www.youtube.com/watch?v=blZUao2jTGA"
                target="_blank"
                rel="noreferrer"
              >
                https://www.youtube.com/watch?v=blZUao2jTGA
              </a>
              )
            </div>
            <br />
            <strong>Applications for Parallel Views</strong>
            <div>
              Parallel views are ideal for computer-aided design (CAD) software.
              For instance AutoCAD defaults to a parallel view (and in my
              experience as a CAD drafter, it is much easier to draw in this
              view mode). For instance, we may need to draw a desk or a table
              that comes in multiple widths/depths. Our standard practice is to
              draw the first iteration and then copy it into rows and columns.
              From there, we can orbit the camera to a front view (or a left
              view) and stretch every table in the row at once. The parallel
              view makes it possible to do this. If we were stuck using a
              perspective view, we would waste time lining up the focal point of
              camera just to ensure we select the table edges properly.
            </div>
            <br />
            <div>
              Another application of parallel views is architectural drawings
              (blueprints). For instance, imagine a plan view (top-down) of a
              floor of an office building. Everything in this drawing needs to
              conform to an exact scale. If I need to install drywall, I should
              be able to measure a wall on the blueprint using a ruler and then
              multiply by the drawing's scale to get the actual length of the
              wall. Imagine if we had to use a perspective view for an
              architectural drawing. If we did this, the walls in the center of
              the drawing would appear closer (i.e., larger) then the walls on
              the border of the drawing. In other words the drawing would not be
              to scale, and it would be virtually unusable.
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
                  href="https://three-js-perspective-view-demo.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Perspective View Demo - ThreeJS
                </a>
              </strong>
            </div>

            <div>
              <strong>
                <a
                  href="https://three-js-parallel-view-demo.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Parallel View Demo - ThreeJS
                </a>
              </strong>
            </div>
            <br />

            <div>
              The above demos both show the same scene but use different camera
              configurations. Both scenes feature a cube that bounces back and
              forth, moving toward and away from the camera (you can orbit the
              camera in the scene with the mouse to get a better idea of this).
              When you open the link to the Perspective Demo you should notice
              that the cube appears to grow in size, but the cube's size stays
              the same in the Parallel Demo. This is because the perspective
              view will show closer objects as being larger in the scene (much
              like the human eye), and the parallel view keeps all objects the
              same size.
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Week9;
