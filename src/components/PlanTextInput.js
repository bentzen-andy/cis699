import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import styles from "./PlanTextInput.module.css";
import ToastNotification from "./ToastNotification";

const PlanTextInput = ({
  planId,
  label,
  value,
  setter,
  fbAttribute,
  hasButton,
  isEditMode,
  multiline,
  dateInput,
}) => {
  const [originalValue, setOriginalValue] = useState("");
  const [editMode, setEditMode] = useState(isEditMode);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(false);

  function handleCancel() {
    setter(originalValue);
    setEditMode(false);
  }

  function handleEdit() {
    setOriginalValue(value);
    setEditMode(true);
  }

  return (
    <>
      <Form>
        <Form.Group>
          <div className={styles["row-baseline"]}>
            <Form.Label style={{ fontSize: "1.4rem" }}>{label}</Form.Label>
            {hasButton && editMode && (
              <>
                <Button
                  className={styles["cancel-save-btn"]}
                  onClick={() => handleCancel()}
                >
                  Cancel
                </Button>
                <Button className={styles["cancel-save-btn"]}>Save</Button>
              </>
            )}
            {hasButton && !editMode && (
              <Button
                className={styles["edit-btn"]}
                onClick={() => handleEdit()}
              >
                Edit
              </Button>
            )}
          </div>

          {error && <Alert variant="danger">{error}</Alert>}
          {editMode ? (
            <Form.Group style={{ marginBottom: "1rem" }}>
              <Form.Control
                className={styles["input"]}
                type={dateInput ? "date" : "text"}
                required
                as={multiline && "textarea"}
                rows={multiline && "5"}
                value={value}
                onChange={(e) => setter(e.target.value)}
              />
            </Form.Group>
          ) : (
            <div>{value}</div>
          )}
        </Form.Group>
      </Form>

      <ToastNotification
        message="Your edits have been saved."
        trigger={showToast}
      />
    </>
  );
};
export default PlanTextInput;
