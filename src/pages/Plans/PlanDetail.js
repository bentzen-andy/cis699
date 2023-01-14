import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import PlanTextInput from "../../components/PlanTextInput";
import PlanImageInput from "../../components/PlanImageInput";
import Readings from "./Readings";
import styles from "./PlanDetail.module.css";
import ModalConfirmDelete from "../../components/ModalConfirmDelete";
import Breadcrumbs from "../../components/Breadcrumbs";

const PlanDetail = ({
  isEditMode,
  hasButtons,
  hasSubmitButton,
  hasDeleteButton,
}) => {
  const [plan, setPlan] = useState({});
  const [plans, setPlans] = useState(null);
  const [imageSource, setImageSource] = useState("");
  const [imageBlob, setImageBlob] = useState(null);
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [startDate, setStartDate] = useState("");
  const [allInputsAreFilledIn, setAllInputsAreFilledIn] = useState(false);
  const [planNameError, setPlanNameError] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [focusId, setFocusId] = useState("");
  const [readings, setReadings] = useState([
    [
      { book: "", chapter: "" },
      { book: "", chapter: "" },
      { book: "", chapter: "" },
    ],
  ]);

  let { planId } = useParams();
  const navigate = useNavigate();

  function handleCancel() {
    navigate("/plans", { replace: false });
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  useEffect(() => {
    setAllInputsAreFilledIn(
      imageBlob && name !== "" && summary !== "" && readings && !planNameError
    );
  }, [imageBlob, name, summary, readings, planNameError]);

  // Checks if the user-entered plan name already exists
  useEffect(() => {
    if (
      plans &&
      plans.some(
        (item) =>
          item.planName.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      setPlanNameError(
        "Plan name already exits. Please choose a different name."
      );
    } else {
      setPlanNameError(null);
    }
  }, [name]);

  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: "/plans", label: "Plans" },
            { link: null, label: plan.planName ? plan.planName : "New Plan" },
          ]}
        />
      </Container>

      <Container className="d-flex align-items-center justify-content-center">
        <Card className={styles["card"]}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title>Add a New Bible Reading Plan:</Card.Title>

            <div className={styles["button-container"]}>
              {hasDeleteButton && (
                <Button
                  className={styles["delete-button"]}
                  variant="danger"
                  onClick={() => {
                    setShowModal(true);
                    setFocusId(plan.id);
                  }}
                >
                  Delete Plan
                </Button>
              )}
            </div>
          </div>

          <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <PlanTextInput
              planId={planId}
              label="Plan Name"
              value={name}
              setter={setName}
              fbAttribute="planName"
              isEditMode={isEditMode}
              hasButton={hasButtons}
            />
            {isEditMode && planNameError && (
              <Alert variant="danger">{planNameError}</Alert>
            )}

            <hr />

            <PlanTextInput
              planId={planId}
              label="Plan Summary"
              value={summary}
              setter={setSummary}
              fbAttribute="planSummary"
              isEditMode={isEditMode}
              hasButton={hasButtons}
              multiline
            />

            <hr />

            <PlanImageInput
              planId={planId}
              label="Plan Image"
              originalImageFilename={plan.planImage}
              defaultImage={imageSource}
              setImageBlob={setImageBlob}
              fbAttribute="planImage"
              isEditMode={isEditMode}
              hasButton={hasButtons}
            />

            <hr />

            <PlanTextInput
              planId={planId}
              label="Specific Plan Start Date"
              value={startDate ? startDate : "No specified start date."}
              setter={setStartDate}
              fbAttribute="planStartDate"
              isEditMode={isEditMode}
              hasButton={hasButtons}
              dateInput
            />

            <hr />

            <Readings
              planId={planId}
              readings={readings}
              setReadings={setReadings}
              label="Plan Readings"
              fbAttribute="readings"
              isEditMode={isEditMode}
              hasButton={hasButtons}
            />
            {hasSubmitButton && (
              <div>
                <Button
                  className={styles["cancel-button"]}
                  onClick={handleCancel}
                >
                  Cancel
                </Button>

                <Button
                  className={styles["submit-button"]}
                  disabled={!allInputsAreFilledIn}
                >
                  Submit
                </Button>
              </div>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default PlanDetail;
