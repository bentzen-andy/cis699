import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./WeekSummary.module.css";
import Breadcrumbs from "../components/Breadcrumbs";
import machBands from "./wk11-mach-bands.png";
import smooth from "./wk11-smooth.png";
import interpolatedNormals from "./wk-11-interpolated-normals.png";

const Week11 = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Week 11" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Reading Response</Card.Title>
          <Card.Body>
            <div>
              <strong>
                Chapter 6: Lighting and Shading - Interactive Computer Graphics,
                7th ed. Edward Angel.
              </strong>
            </div>

            <div>
              At this point in the book, we've learned how to create objects in
              3D space, but these objects all have a flat, solid colors. Very
              boring. Chapter 6 talks about how to add some life to our 3D
              objects.
            </div>
            <br />

            <div>
              The chapter dives into the complexity of light and reflection in
              the physical world, and how we could never hope to fully model
              this with a computer, (certainly not in real time). So the chapter
              offers a simplified approach using Phong shading. The text also
              describes the differences between different types of materials
              (with respect to how they reflect light):
            </div>
            <br />
            <div>
              <ol>
                <li>
                  specular surfaces - shiny appearance (most of light is
                  reflected)
                </li>
                <li>
                  diffuse surfaces - matte appearance (light gets reflected and
                  scattered in all directions)
                </li>
                <li>
                  translucent surfaces (light bends as it passes through, like a
                  glass of water)
                </li>
              </ol>
            </div>

            <div>
              The book covers an explanation of how to do all the matrix math
              within WebGL to achieve each of these lighting/shading effects.
              There's also a brief discussion of the issue we get with polygon
              meshes, and how to correct the faceted appearance by using some
              interpolation tricks. Basically you create more reflection lines
              (i.e., you interpolate additional normal vectors) for the light to
              reflect on.
            </div>
            <br />

            <div>
              In order to visualize this a little better, consider the two
              images from AutoCAD below. <strong>AutoCAD Example 1</strong>{" "}
              shows the "mach bands" described in chapter 6. Basically, every 3D
              face in the scene renders on its own, independently of all the
              other surrounding faces. This is an overly literal way of
              rendering the drawing, since we clearly don't want to show our
              office chair with this extremely faceted appearance. We know that
              this office chair has a smooth appearance in reality. So we need a
              rendering technique (as well as a data structure) that is capable
              of showing a smooth rendering.
            </div>
            <br />

            <div>
              <strong>AutoCAD Example 2</strong> (see image below) shows what we
              can do if we model this same chair using polygon mesh entities.
              This allows the computer to shade each face while also respecting
              its relative proximity to adjacent faces. In other words, if a few
              faces join together form a valley (as shown in the third example
              image below), then we will see smoother shading to show this. This
              creates a lot more matrix math for the GPU to work through, but
              modern GPUs can usually handle this type of work. This trick of
              interpolating normals, makes it possible to get pretty good
              results in realtime rendering--meaning we can now view the model
              interactively in CAD programs like AutoCAD or Blender.
            </div>
            <br />

            <div>
              <strong>AutoCAD Example 1: Mach Bands</strong>
            </div>
            <div>
              <img src={machBands} alt="Chair with mach bands" width="100%" />
            </div>
            <br />

            <div>
              <strong>AutoCAD Example 2: Smooth Shading</strong>
            </div>
            <div>
              <img src={smooth} alt="Chair with smooth shading" width="100%" />
            </div>
            <br />

            <div>
              <strong>Interpolated Normals</strong>
            </div>
            <div>
              <img
                src={interpolatedNormals}
                alt="Interpolated Normals"
                width="70%"
                style={{ borderStyle: "solid" }}
              />
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
                  href="https://atb-threejs-with-glsl.netlify.app/cube"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blue Cube
                </a>
              </strong>
            </div>

            <div>
              <strong>
                <a
                  href="https://atb-threejs-with-glsl.netlify.app/cube2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Red Cube
                </a>
              </strong>
            </div>

            <div>
              <strong>
                <a
                  href="https://atb-threejs-with-glsl.netlify.app/waves"
                  target="_blank"
                  rel="noreferrer"
                >
                  Waves
                </a>
              </strong>
            </div>

            <div>
              <strong>
                <a
                  href="https://github.com/bentzen-andy/shaders"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </strong>
            </div>
            <br />

            <strong>The Book of Shaders</strong>

            <div>
              This week's deliverables were inspired by the Book of Shaders as
              some ThreeJS tutorials I found online.
            </div>
            <br />

            <div>
              I managed to piece together the following examples that you can
              see above.
            </div>
            <br />

            <strong>Blue Cube & Red Cube</strong>
            <div>
              This is my "hello world" webpage for ThreeJS/WebGL integration. I
              followed a tutorial to learn about how to set up GLSL with ThreeJS
              and how use a vertex shader to change the color of a mesh.
            </div>
            <br />

            <strong>Waves</strong>
            <div>
              In this example I played around with some sine/cosine functions to
              create a wave effect along this mesh. I played around with some
              color effects with the fragment shader as well.
            </div>
            <br />

            <div>
              I'm still in the process of figuring out what shaders can actually
              do for me and how to use them properly. So far this is what I know
              about shaders:
            </div>
            <ol>
              <li>
                Shaders get executed in the GPU and therefore they can run very
                efficiently.
              </li>
              <li>
                A vertex shader can change the shape of meshes in the scene.
              </li>
              <li>
                A fragment shader can change the color of meshes I the scene.
              </li>
            </ol>

            <div>
              There's also a few questions that I still need to do some research
              on:
            </div>
            <ol>
              <li>
                How can I use a shader to make a wall in my game look more like
                a cinderblock wall?
              </li>
              <li>How can I use a shader to create water (i.e., waves)?</li>
              <li>
                Can I use a shader to apply a custom repeating pattern? Like if
                I have a 516px jpg of a fabric pattern, can I use a shader to
                repeat this pattern and apply it to a sofa or a lounge chair?
              </li>
            </ol>

            <div>
              I'll need to do a little more research on this and figure out a
              little more of the mysteries of GLSL shaders next week 😊{" "}
            </div>
            <br />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Week11;
