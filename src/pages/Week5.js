import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./WeekSummary.module.css";
import Breadcrumbs from "../components/Breadcrumbs";

const Week5 = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Week 5" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Reading Response</Card.Title>
          <Card.Body>
            <div>
              <strong>
                Chapter 3-4 - Interactive Computer Graphics, 7th ed. Edward
                Angel.
              </strong>
            </div>
            <br />
            <div>
              <strong>Interaction and Animation</strong>
            </div>
            <div>
              These two chapters talked about how to create a web based UI and
              then in turn how to feed that information into WebGL. For
              instance, maybe you want to create a button or a dropdown that
              allows you to set the speed or rotation axis for a cube. Or maybe
              you want to create an onclick event handler that draws a line or a
              rectangle based on where the user clicks. Or, if you're really
              ambitious, maybe you could set the mouse wheel to zoom in/out
              within the scene (or maybe you can add functionality to pan/orbit
              around in the scene as well.)
            </div>
            <br />
            <div>
              Chapter 4 reviewed a lot of complex matrix that you need to
              implement in order to get WebGL to efficiently carry out any of
              the rotations, translations, or scaling that you might need for
              your scene. Much of this matrix math gets done in the shaders.
              Hence, WebGL has a special way to link variable information from
              the application to the shader. The textbook shows an example of
              passing a theta value to the shader and then writing a script in
              the shader that efficiently rotates the vertices for each frame.
            </div>

            <br />
            <div>
              <strong>My Thoughts...</strong>
            </div>

            <div>
              After working through my first deliverable, I can say that working
              directly in WebGL is pretty tedious. No surprise. This is meant to
              be low level code that can be implemented in an efficient way. I
              was able to get a demo working with basic collision checking, but
              for future work, I think I'd like to move on to some high-level
              libraries (like ThreeJS). I don't want to spend all day trying to
              draw a cube in WebGL when I can get up and running faster by using
              a library.
            </div>

            <br />
          </Card.Body>
        </Card>
        <Card className={styles["card"]}>
          <Card.Title>Deliverables</Card.Title>
          <Card.Body>
            {/*  */}
            {/* WebGL Demo */}
            {/*  */}
            <div>
              <strong>WebGL - Basic Collision Checking</strong>
            </div>

            <div>
              <strong>
                <a
                  href="https://basic-web-gl-atb.netlify.app/week5/basiccollisioncheckingwebgl"
                  target="_blank"
                  rel="noreferrer"
                >
                  Basic Collision Checking - Demo
                </a>
              </strong>
            </div>

            <div>
              <strong>
                <a
                  href="https://github.com/bentzen-andy/web-gl-textbook/blob/main/week5/basicCollisionCheckingWebGL.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Basic Collision Checking - GitHub -
                  basicCollisionCheckingWebGL.html
                </a>
              </strong>
            </div>

            <div>
              <strong>
                <a
                  href="https://github.com/bentzen-andy/web-gl-textbook/blob/main/week5/basicCollisionCheckingWebGL.js"
                  target="_blank"
                  rel="noreferrer"
                >
                  Basic Collision Checking - GitHub -
                  basicCollisionCheckingWebGL.js
                </a>
              </strong>
            </div>

            <div>
              <strong>
                <a
                  href="https://github.com/bentzen-andy/web-gl-textbook/blob/main/Common/Square.js"
                  target="_blank"
                  rel="noreferrer"
                >
                  Basic Collision Checking - GitHub - Square.js
                </a>
              </strong>
            </div>

            <div>
              <strong>
                <a
                  href="https://github.com/bentzen-andy/web-gl-textbook/blob/main/Common/Line.js"
                  target="_blank"
                  rel="noreferrer"
                >
                  Basic Collision Checking - GitHub - Line.js
                </a>
              </strong>
            </div>
            <br />
            <div>
              The above demo shows my work in WebGL. I created an abstract data
              type for a square with built-in collision checking. I basically
              took existing code that from the textbook, and modified it to get
              it to move a square around on the screen instead of rotating it.
              Notice the following:
              <ol>
                <li>
                  <strong>Readability: </strong> If you quickly read through the
                  code on the main script (i.e.,
                  <a
                    href="https://github.com/bentzen-andy/web-gl-textbook/blob/main/week5/basicCollisionCheckingWebGL.js"
                    target="_blank"
                    rel="noreferrer"
                  >
                    basicCollisionCheckingWebGL.js
                  </a>
                  ), you'll see my custom Square object. And you'll probably be
                  able to understand how it works without needing to read
                  through my Square implementation in detail.
                </li>
                <li>
                  <strong>Decoupled:</strong> All the collision checking code is
                  delegated to the Square object. The goal was to keep the
                  implementation clean and decoupled as much as possible from
                  the main script. I basically only added in an instantiation of
                  the Square object, and then updated it's position on every
                  render. If we need to replace Square with Hexagon in the
                  future, we could probably do so with the same public API that
                  the Square class offers.
                </li>
              </ol>
            </div>
            <br />

            {/*  */}
            {/* ThreeJS Demo */}
            {/* */}
            <div>
              <strong>
                ThreeJS - Basic Collision Checking (not yet done...)
              </strong>
            </div>

            <div>
              <strong>
                <a
                  href="https://three-js-collision-checking-atb.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Basic Collision Checking - Demo
                </a>
              </strong>
            </div>

            <div>
              <strong>
                <a
                  href="https://github.com/bentzen-andy/three-js-hello-world/blob/main/main.js"
                  target="_blank"
                  rel="noreferrer"
                >
                  Basic Collision Checking - GitHub
                </a>
              </strong>
            </div>

            <div>
              This demo (using ThreeJS) was much easier and more enjoyable to
              work on. I tried to set up a similar demo--with a square/cube
              moving around a space bouncing off the walls. I did not have
              enough time this week to get the physics set up to actually make
              it check collisions against the walls. ThreeJS doesn't come with
              physics properties on its own, so I will need to finish some
              tutorials and documentation to fully recreate this collision
              checking demo in ThreeJS.
            </div>
            <br />
            <div>
              I did include orbit controls so you should be able to
              orbit/zoom/pan around in the scene (which I think is totally
              awesome!).
            </div>
            <br />

            <div>
              <strong>ThreeJS - Cool Textured Design</strong>
            </div>

            <div>
              <strong>
                <a
                  href="https://three-js-wrinkled-plane-atb.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cool Textured Design - Demo
                </a>
              </strong>
            </div>

            <div>
              <strong>
                <a
                  href="https://github.com/bentzen-andy/three-js-wrinkled-plane/blob/main/main.js"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cool Textured Design - GitHub
                </a>
              </strong>
            </div>

            <br />
            <div>
              The second deliverable that I have here is taken from a YouTube
              tutorial. It features a cool design with these triangular pattens.
              I was especially impressed that there was a library that I could
              import to quickly and easily create UI sliders (at the top right
              of the screen). This is a development only tool used to make fine
              adjustments to the design. Very nice!
            </div>
            <br />

            <div>
              In conclusion, ThreeJS seems to be a very good tool for quickly
              creating nice designs and animations. So far these little
              shortcuts make ThreeJS a joy to work with compared to working in
              WebGL directly.
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Week5;
