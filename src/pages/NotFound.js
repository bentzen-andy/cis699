import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Page not found...</Card.Title>
          <Card.Text>
            Return to <Link to="/">Homepage</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NotFound;
