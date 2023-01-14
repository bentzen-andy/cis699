import React, { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import styles from "./PlanImageInput.module.css";
import ToastNotification from "./ToastNotification";

const PlanImageInput = ({
  planId,
  label,
  originalImageFilename,
  defaultImage,
  setImageBlob,
  fbAttribute,
  hasButton,
  isEditMode,
}) => {
  const [editMode, setEditMode] = useState(isEditMode);
  const [file, setFile] = useState(null);
  const [imageSource, setImageSource] = useState(null);
  const [originalFile, setOriginalFile] = useState(null);
  const [originalImageSource, setOriginalImageSource] = useState(null);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImageSource(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  useEffect(() => {
    setImageSource(defaultImage);
  }, [defaultImage]);

  function handleEdit() {
    setOriginalFile(file);
    setOriginalImageSource(imageSource);
    setEditMode(true);
  }

  function handleCancel() {
    setFile(originalFile);
    setImageSource(originalImageSource);
    setEditMode(false);
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
                <Button
                  className={styles["cancel-save-btn"]}
                  onClick={() => {
                    setEditMode(false);
                  }}
                >
                  Save
                </Button>
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
                type="file"
                required
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  setImageBlob(e.target.files[0]);
                }}
              />
              {imageSource && (
                <img
                  className={styles["plan-image"]}
                  src={imageSource}
                  alt="Plan"
                />
              )}
            </Form.Group>
          ) : (
            <div>
              {imageSource ? (
                <img
                  className={styles["plan-image"]}
                  src={imageSource}
                  alt="Plan"
                />
              ) : (
                <div className={styles["image-placeholder"]} />
              )}
            </div>
          )}
        </Form.Group>
      </Form>

      <ToastNotification message="Image saved." trigger={showToast} />
    </>
  );
};
export default PlanImageInput;
