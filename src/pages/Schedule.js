import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./Schedule.module.css";
import Breadcrumbs from "../components/Breadcrumbs";

const Schedule = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Schedule" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Schedule</Card.Title>
          <Card.Body style={{ fontSize: "0.8rem" }}>
            <table>
              <thead>
                <tr>
                  <th className={styles["col-1"]}>Week #</th>
                  <th className={styles["col-2"]}>Date</th>
                  <th className={styles["col-3"]}>Assigned Reading/Video</th>
                  <th className={styles["col-4"]}>Topic </th>
                  <th className={styles["col-5"]}>Homework</th>
                  <th className={styles["col-6"]}>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Week 1</th>
                  <td>9-Jan</td>
                  <td>Angel ch 1-2</td>
                  <td>Intro stuff &amp; graphics programming</td>
                  <td>Reading response </td>
                  <td></td>
                </tr>
                <tr>
                  <th>Week 2</th>
                  <td>16-Jan</td>
                  <td>Hocking ch 1</td>
                  <td>Getting to know Unity</td>
                  <td>Short reading response</td>
                  <td></td>
                </tr>
                <tr>
                  <th>Week 3</th>
                  <td>23-Jan</td>
                  <td>Vacation (cruise)</td>
                  <td></td>
                  <td>No homework</td>
                  <td></td>
                </tr>
                <tr>
                  <th>Week 4</th>
                  <td>30-Jan</td>
                  <td>Hocking ch 11 &amp; YouTube</td>
                  <td>Playing audio: sound effects and music</td>
                  <td>Simple Galaga clone</td>
                  <td>https://www.youtube.com/watch?v=-on5HRW8v1A</td>
                </tr>
                <tr>
                  <th>Week 5</th>
                  <td>6-Feb</td>
                  <td>
                    Angel ch 3 <strong>and ch 4</strong>
                  </td>
                  <td>Interaction and animation</td>
                  <td>Reading response </td>
                  <td></td>
                </tr>
                <tr>
                  <th>Week 6</th>
                  <td>13-Feb</td>
                  <td>Hocking ch 6</td>
                  <td>Creating a basic 2D platformer</td>
                  <td>Super Mario (NES) clone</td>
                  <td></td>
                </tr>
                <tr>
                  <th>Week 7</th>
                  <td>20-Feb</td>
                  <td>
                    <del>Angel ch 4</del> <strong>Hocking ch 6-7</strong>
                  </td>
                  <td>
                    <del>Geometric objects and transformations</del>{" "}
                    <strong>Additional features for Super Mario Bros.</strong>
                  </td>
                  <td>
                    <del>Reading response</del>{" "}
                    <strong>Super Mario (NES) clone</strong>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th>Week 8</th>
                  <td>27-Feb</td>
                  <td>
                    <del>Hocking ch 7</del> <strong>Unity Tutorial</strong>
                  </td>
                  <td>
                    <del>Putting a GUI into a game</del>{" "}
                    <strong>First Person Shooter Demo</strong>
                  </td>
                  <td>
                    <del>Super Mario (NES) clone - GUI</del>{" "}
                    <strong>Very small FPS game</strong>
                  </td>
                  <td>
                    <strong>https://www.youtube.com/watch?v=_QajrabyTJc</strong>
                  </td>
                </tr>
                <tr>
                  <th>Week 9</th>
                  <td>6-Mar</td>
                  <td>Angel ch 5</td>
                  <td>Viewing</td>
                  <td>Reading response </td>
                  <td></td>
                </tr>
                <tr>
                  <th>Week 10</th>
                  <td>13-Mar</td>
                  <td>
                    Hocking ch 2<strong> and Brackeys demo</strong>
                  </td>
                  <td>Building a demo that puts you in 3D space</td>
                  <td>Doom clone part 1: movement </td>
                  <td>
                    <strong>
                      https://www.youtube.com/playlist?list=PLPV2KyIb3jR5PhGqsO7G4PsbEC_Al-kPZ
                    </strong>
                  </td>
                </tr>
                <tr>
                  <th>Week 11</th>
                  <td>20-Mar</td>
                  <td>Angel ch 6</td>
                  <td>Lighting and shading</td>
                  <td>Reading response </td>
                  <td></td>
                </tr>
                <tr>
                  <th>Week 12</th>
                  <td>27-Mar</td>
                  <td>
                    Hocking ch 3<strong> and Brackeys demo</strong>
                  </td>
                  <td>Adding enemies and projectiles to the 3D game</td>
                  <td>Doom clone part 2: enemies </td>
                  <td>
                    <strong>
                      https://www.youtube.com/playlist?list=PLPV2KyIb3jR5PhGqsO7G4PsbEC_Al-kPZ
                    </strong>
                  </td>
                </tr>
                <tr>
                  <th>Week 13</th>
                  <td>3-Apr</td>
                  <td>Angel ch 7</td>
                  <td>Discrete techniques</td>
                  <td>Reading response </td>
                  <td></td>
                </tr>
                <tr>
                  <th>Week 14</th>
                  <td>10-Apr</td>
                  <td>
                    Hocking ch 4<strong> and Brackeys demo</strong>
                  </td>
                  <td>Developing graphics for your game</td>
                  <td>Doom clone part 3: textures </td>
                  <td>
                    <strong>
                      https://www.youtube.com/playlist?list=PLPV2KyIb3jR5PhGqsO7G4PsbEC_Al-kPZ
                    </strong>
                  </td>
                </tr>
                <tr>
                  <th>Week 15</th>
                  <td>17-Apr</td>
                  <td>YouTube</td>
                  <td>
                    Misc topics: will get feedback from prof to make final
                    improvements to the game.{" "}
                    <strong> and Brackeys demo</strong>
                  </td>
                  <td>Doom clone - finishing touches</td>
                  <td>
                    <strong>
                      https://www.youtube.com/playlist?list=PLPV2KyIb3jR5PhGqsO7G4PsbEC_Al-kPZ
                    </strong>
                  </td>
                </tr>
                <tr>
                  <th>Week 16</th>
                  <td>24-Apr</td>
                  <td></td>
                  <td>Open </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Schedule;
