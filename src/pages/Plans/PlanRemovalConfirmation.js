import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./PlanRemovalConfirmation.module.css";

const PlanRemovalConfirmation = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          style={{ marginRight: "1rem" }}
          links={[
            { link: "/", label: "Home" },
            { link: "/plans", label: "Plans" },
            { link: null, label: "Plan Removal Confirmation" },
          ]}
        />
      </Container>

      <Container className="d-flex align-items-center justify-content-center">
        <Card className={styles["card"]}>
          <Card.Body>
            <Card.Text>Your reading plan has been deleted.</Card.Text>
            <Card.Text>
              Return to <Link to="/plans">plans</Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default PlanRemovalConfirmation;
