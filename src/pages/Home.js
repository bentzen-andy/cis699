import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  // User must be signed in to view this page. If not redirect to the login page.

  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs links={[{ link: "/", label: "Home" }]} />
      </Container>

      <Container className="d-flex align-items-center justify-content-center">
        <Card className={styles["card"]}>
          <Card.Body>
            <Card.Title>Computer Graphics Portfolio</Card.Title>
            <Card.Text>
              <Link to="/week-1">Week 1 </Link>
            </Card.Text>
            {/* <Card.Text>
              <Link to="/week-2">Week 2 </Link>
            </Card.Text> */}
            {/* <Card.Text>
              <Link to="/week-3">Week 3 </Link>
            </Card.Text> */}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Home;
