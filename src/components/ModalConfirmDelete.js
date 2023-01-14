import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ModalConfirmDelete = ({
  showModal,
  handleCloseModal,
  itemId,
  onClickHandler,
  navigateTo,
  setShowToast,
}) => {
  const navigate = useNavigate();

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete? (This action cannot be reversed.)
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            onClickHandler(itemId);
            handleCloseModal();
            if (setShowToast) {
              setShowToast(true);
              setTimeout(() => setShowToast(false), 1);
            }
            if (navigateTo) navigate(navigateTo, { replace: false });
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirmDelete;
