import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./WeekSummary.module.css";
import Breadcrumbs from "../components/Breadcrumbs";

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
          <Card.Title>Reading Response</Card.Title>
          <Card.Body>
            <div>
              <strong>
                Chapter 1 - Interactive Computer Graphics, 7th ed. Edward Angel.
              </strong>
            </div>
            <div>
              This chapter is a intro to the basics of computer graphics. The
              author talks about the similarities and difference between modern
              CAD software the old-fashioned camera lenses. The author also
              talks about the history of computer hardware used to process
              computer graphics. Over time people discovered that the rendering
              process involves doing simple math on very large matrices. So they
              developed a way to do the math in parallel to make the process
              faster. They eventually came up with something called a
              "pipeline-architecture" which eventually led to the use of
              shaders, which allow a programmer to write a script that changes
              the color (and possibly the location) of individual vertices in a
              very efficient way.
            </div>
            <br />

            <div>
              The author also discuss the four steps in the rendering pipeline
              (1. vertex processing, 2. clipping & primitive assembly, 3.
              rasterization, and 4. fragment processing). This is basically the
              process of taking shapes in a 3D CAD workspace, and rendering them
              to a 2D viewport.
            </div>
            <br />

            <div>
              The bottom line of this chapter is that graphic processing
              hardware is very specifically designed and optimized to do what it
              does. Understanding and appreciating this can be helpful in
              understanding the API that we need to use to make graphics work.
            </div>
          </Card.Body>

          <Card.Body>
            <div>
              <strong>Chapter 2</strong>
            </div>
            <div>This chapter got me up and running with the WebGL API. </div>
            <br />
            <div>
              So far from reading this chapter, I know how to draw simple 2D
              line drawings. I borrowed some code from the textbook website and
              refactored for readability (I broke it out into several smaller
              functions). The basic steps to the code are as follows:
            </div>
            <ol>
              <li>
                Initialize a bunch of stuff (e.g., canvas element, shaders).
              </li>
              <li>Create an ordered list of vertices.</li>
              <li>Send the vertices to the GPU.</li>
              <li>Render the vertices.</li>
            </ol>
            <div>
              Arranging the points in the correct order is a little tricky. The
              WebGL API gives you only a few ways to render lines. I won't
              repeat what's written in the textbook here, but basically, I
              believe the textbook said that WebGL lets you draw lines, and
              requires you to build more complex drawing functions from there. I
              wanted to draw something a little more interesting than straight
              lines, so I wrote a few functions in JavaScript to draw curved
              shapes (i.e., arcs and circles.). You can take a look at my
              example drawings below.
            </div>
          </Card.Body>
        </Card>

        <Card className={styles["card"]}>
          <Card.Title>Deliverables</Card.Title>
          <Card.Body>
            <div>
              <strong>Example Drawings</strong>
            </div>
            <div>
              <a
                href="https://basic-web-gl-atb.netlify.app/week1/draw-line/"
                target="_blank"
                rel="noreferrer"
              >
                Line
              </a>
            </div>
            {/* <div>
              <a
                href="https://basic-web-gl-atb.netlify.app/week1/gasket1/"
                target="_blank"
                rel="noreferrer"
              >
                Gasket
              </a>
            </div> */}
            <div>
              <a
                href="https://basic-web-gl-atb.netlify.app/week1/triangle/"
                target="_blank"
                rel="noreferrer"
              >
                Triangle
              </a>
            </div>
            <div>
              <a
                href="https://basic-web-gl-atb.netlify.app/week1/smiley-face/"
                target="_blank"
                rel="noreferrer"
              >
                Smiley Face 1
              </a>
            </div>
            <div>
              <a
                href="https://basic-web-gl-atb.netlify.app/week1/smiley-face2/"
                target="_blank"
                rel="noreferrer"
              >
                Smiley Face 2
              </a>
            </div>
            <br />
            <div>
              <strong>My API</strong>
            </div>
            <div>
              See my full API code{" "}
              <a href="https://github.com/bentzen-andy/web-gl-textbook/blob/main/week1/smiley-face2.js">
                here on GitHub
              </a>
            </div>
            <div className={styles["code"]}>
              <pre>/*</pre>
              <pre> * arcPointRight: 2D point - beginning of arc</pre>
              <pre>
                {" "}
                * arcPointLeft: 2D point - end of arc (assuming it runs
                clockwise from arcPointRight)
              </pre>
              <pre> * arcCenter: 2D point</pre>
              <pre>
                {" "}
                * levelOfDetail - int - number of subdivision passes to run on
                the arc
              </pre>
              <pre> */</pre>
              <pre>
                getArcPoints(arcPointRight, arcPointLeft, arcCenter,
                levelOfDetail)
              </pre>
            </div>

            <div className={styles["code"]}>
              <pre>/*</pre>
              <pre>
                {" "}
                * circlePoint0Deg: 2D point - point on the circle at 0 deg from
                the center.
              </pre>
              <pre> * circleCenter: 2D point</pre>
              <pre> * arcCenter: 2D point</pre>
              <pre>
                {" "}
                * levelOfDetail - int - number of subdivision passes to run on
                the circle
              </pre>
              <pre> */</pre>
              <pre>
                getCirclePoints(circlePoint0Deg, circleCenter, levelOfDetail)
              </pre>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Week1;
