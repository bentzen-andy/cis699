import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import { formatDate } from "../hooks/useDate";
import styles from "./Prayers.module.css";
import ModalConfirmDelete from "../components/ModalConfirmDelete";
import Breadcrumbs from "../components/Breadcrumbs";
import ToastNotification from "../components/ToastNotification";

const Prayers = () => {
  const [prayerRequests, setPrayerRequests] = useState([]);
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
            { link: null, label: "Prayer Requests" },
          ]}
        />
      </Container>
      <Container className="d-flex align-items-center justify-content-center">
        <Card className={styles["card"]}>
          <Card.Title>Prayer Requests</Card.Title>
          <Card.Body>
            {prayerRequests.length === 0 && (
              <div>No prayer requests available...</div>
            )}
            {prayerRequests.map((prayerRequest, i) => (
              <div key={i}>
                <div>
                  <strong>Name</strong>: {prayerRequest.enteredName}
                </div>
                <div>
                  <strong>Prayer Request</strong>: {prayerRequest.enteredPrayer}
                </div>
                <div>
                  <strong>Date/Time</strong>:{" "}
                  {formatDate(new Date(prayerRequest.timeStamp))}
                </div>
                <Button
                  className={styles["delete-button"]}
                  onClick={() => {
                    setShowModal(true);
                    setFocusId(prayerRequest.id);
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

export default Prayers;
