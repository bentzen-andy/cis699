import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./WeekSummary.module.css";
import Breadcrumbs from "../components/Breadcrumbs";

const Week2 = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Week 3" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Reading Response</Card.Title>
          <Card.Body>
            <div>On vacation... be back next week.</div>

            <img
              width="100%"
              alt="cruise ship"
              src="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1680/840/75/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/wish/DCL_WISH-SIGNATURE-4_JRoh-D-5x2.jpg?2022-03-23T05:13:10+00:00"
            />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Week2;
