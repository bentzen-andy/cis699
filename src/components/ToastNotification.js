import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";

const ToastNotification = ({
  label = "Berkley Hub",
  message,
  delay = 3000,
  trigger,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (trigger) setShow(true);
  }, [trigger]);

  return (
    <ToastContainer className="p-3" position="top-center">
      <Toast onClose={() => setShow(false)} show={show} delay={delay} autohide>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">{label}</strong>
          <small>Just now.</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastNotification;
