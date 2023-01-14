import React, { useEffect, useState } from "react";
import { Container, Card, ListGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import styles from "./PlansAll.module.css";
import Breadcrumbs from "../../components/Breadcrumbs";

const PlansAll = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);

  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          style={{ marginRight: "1rem" }}
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Plans" },
          ]}
        />
      </Container>
      <Container className="d-flex align-items-center justify-content-center">
        <Card className={styles["card"]}>
          <Card.Title>Plans</Card.Title>
          <div>
            <Link className={styles["link"]} to="/plans/new">
              <Button className={styles["button"]}>Add a Plan</Button>
            </Link>
          </div>
          <Card.Body>
            <ListGroup variant="flush">
              {plans.map((plan, i) => (
                <div className={styles["plan"]} key={i}>
                  <ListGroup.Item className={styles["list-item"]}>
                    <span>
                      {i + 1}. <strong>{plan.planName}</strong>
                      <p className={styles["plan-summary"]}>
                        {plan.planSummary}
                      </p>
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        className={styles["button"]}
                        style={{ marginRight: "1rem" }}
                      >
                        {!plan.active ? "Activate Plan" : "Deactivate Plan"}
                      </Button>
                      <Link
                        className={styles["link-view-plan"]}
                        to={`/plans/view/${plan.id}`}
                      >
                        <Button className={styles["button"]}>View Plan</Button>
                      </Link>
                    </div>
                  </ListGroup.Item>
                </div>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default PlansAll;
