import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import { formatDate } from "../hooks/useDate";
import styles from "./Questions.module.css";
import ModalConfirmDelete from "../components/ModalConfirmDelete";
import Breadcrumbs from "../components/Breadcrumbs";
import ToastNotification from "../components/ToastNotification";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [focusId, setFocusId] = useState("");
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Questions" },
          ]}
        />
      </Container>
      <Container className="d-flex align-items-center justify-content-center">
        <Card className={styles["card"]}>
          <Card.Title>Questions</Card.Title>
          <Card.Body>
            {questions.length === 0 && <div>No questions available...</div>}
            {questions.map((question, i) => (
              <div key={i}>
                <div>
                  <strong>Name</strong>: {question.enteredName}
                </div>
                <div>
                  <strong>Question</strong>: {question.enteredQuestion}
                </div>
                <div>
                  <strong>Date/Time</strong>:{" "}
                  {formatDate(new Date(question.timeStamp))}
                </div>
                <Button
                  className={styles["delete-button"]}
                  onClick={() => {
                    setShowModal(true);
                    setFocusId(question.id);
                  }}
                  variant="danger"
                >
                  Delete
                </Button>

                <hr />

                <ModalConfirmDelete
                  showModal={showModal}
                  handleCloseModal={handleCloseModal}
                  itemId={focusId}
                  setShowToast={setShowToast}
                />
              </div>
            ))}
          </Card.Body>
        </Card>
      </Container>

      <ToastNotification
        message="Prayer request has been deleted."
        trigger={showToast}
      />
    </>
  );
};

export default Questions;
