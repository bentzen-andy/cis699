import React, { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import TypeAheadDropDown from "../../components/TypeAheadDropDown.js";
import styles from "./Readings.module.css";
import ToastNotification from "../../components/ToastNotification.js";

const Readings = ({
  planId,
  readings,
  setReadings,
  label,
  fbAttribute,
  hasButton,
  isEditMode,
}) => {
  const [originalValue, setOriginalValue] = useState([]);
  const [editMode, setEditMode] = useState(isEditMode);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(false);

  function handleBookChange(book, dayNum, readingNum) {
    setReadings((current) => {
      let curr = [...current];
      let targetReadings = curr[dayNum][readingNum];
      curr[dayNum][readingNum] = { ...targetReadings, book };
      return curr;
    });
  }

  function handleChapterChange(chapter, dayNum, readingNum) {
    setReadings((current) => {
      let curr = [...current];
      let targetReadings = curr[dayNum][readingNum];
      curr[dayNum][readingNum] = { ...targetReadings, chapter };
      return curr;
    });
  }

  function insertDay(index) {
    setReadings((current) => {
      let curr = [...current];
      let newReadingDay = [
        { book: "", chapter: "" },
        { book: "", chapter: "" },
        { book: "", chapter: "" },
      ];
      curr.splice(index, 0, newReadingDay);
      return curr;
    });
  }

  function removeDay(dayNum) {
    setReadings((current) => {
      let curr = [...current];
      if (curr.length === 1) return curr;
      curr.splice(dayNum, 1);
      return curr;
    });
  }

  function addReading(dayNum) {
    setReadings((current) => {
      let curr = [...current];
      curr[dayNum].push({ book: "", chapter: "" });
      return curr;
    });
  }

  function removeReading(dayNum, readingNum) {
    setReadings((current) => {
      let curr = [...current];
      if (curr[dayNum].length === 1) return curr;
      delete curr[dayNum][readingNum];
      return curr;
    });
  }

  function handleEdit() {
    setOriginalValue(JSON.stringify(readings));
    setEditMode(true);
  }

  function handleCancel() {
    setReadings(JSON.parse(originalValue));
    setEditMode(false);
  }

  useEffect(() => {
    if (readings) {
      setReadings((current) => {
        let curr = [...current];
        let removeList = [];
        for (let i = 0; i < curr.length; i++) {
          if (!curr[i]) continue;
          for (let j = 0; j < curr[i].length; j++) {
            if (curr[i][j] === undefined) {
              removeList.unshift({ day: i, reading: j });
            }
          }
        }
        removeList.map((item) => {
          curr[item.day].splice(item.reading, 1);
        });
        return curr;
      });
    }
  }, [JSON.stringify(readings)]);

  return (
    <>
      <Form>
        <div className={styles["row-baseline"]}>
          <Form.Group>
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
                    if (planId) {
                    }
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
          </Form.Group>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}

        {editMode ? (
          <>
            <Button className={styles["button"]}>Add Day</Button>
            <hr />
            <Form.Group>
              <div className={styles["readings"]}>
                {readings.map((day, i) => {
                  return (
                    <div
                      className={styles["reading-day-edit-mode"]}
                      key={`${day}-${i}`}
                    >
                      <div
                        className={styles["row-baseline"]}
                        style={{ marginTop: "2rem" }}
                      >
                        <Button
                          className={styles["x-button"]}
                          onClick={() => removeDay(i)}
                          disabled={i === 0}
                        >
                          X
                        </Button>
                        <div style={{ marginRight: "1rem" }}>Day: {i + 1}</div>
                        <Button
                          className={styles["button"]}
                          style={{ marginRight: "0.5rem" }}
                          onClick={() => addReading(i)}
                        >
                          Add Reading
                        </Button>
                        <Button
                          className={styles["button"]}
                          onClick={() => insertDay(i + 1)}
                        >
                          Insert Day
                        </Button>
                      </div>
                      <div>
                        {day.map((reading, j) => (
                          <div
                            className={styles["row-baseline"]}
                            key={`${reading}-${j}`}
                            style={{ marginTop: "0.5rem" }}
                          >
                            <div>
                              <Form.Label>Book:</Form.Label>
                              <div className={styles["row-baseline"]}>
                                <Button
                                  className={styles["x-button"]}
                                  onClick={() => removeReading(i, j)}
                                  disabled={j === 0}
                                >
                                  X
                                </Button>
                                <TypeAheadDropDown
                                  handleBookChange={handleBookChange}
                                  dayNumber={i}
                                  readingNumber={j}
                                  book={readings[i][j].book}
                                />
                              </div>
                            </div>
                            <div>
                              <Form.Label>Chapter:</Form.Label>
                              <Form.Control
                                style={{ width: "5rem" }}
                                type="number"
                                min="1"
                                value={reading.chapter}
                                onChange={(e) =>
                                  handleChapterChange(e.target.value, i, j)
                                }
                              />
                            </div>
                          </div>
                        ))}

                        {day && day[0].book === "" && (
                          <Alert
                            style={{ marginTop: "1rem" }}
                            variant="warning"
                          >
                            No readings for this day.
                          </Alert>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Form.Group>
          </>
        ) : (
          <div className={styles["readings"]}>
            {readings.map((day, i) => {
              return (
                <div className={styles["reading-day"]} key={`${day}-${i}`}>
                  <div>
                    <strong>Day: {i + 1}</strong>
                  </div>
                  {day && day[0].book === "" ? (
                    <div>No readings...</div>
                  ) : (
                    day.map((reading, j) => {
                      return (
                        <div key={`${reading}-${j}`}>
                          <span>{reading.book}: </span>
                          <span>{reading.chapter}</span>
                        </div>
                      );
                    })
                  )}
                </div>
              );
            })}
          </div>
        )}

        {hasButton && editMode && (
          <>
            <Button
              className={styles["cancel-save-btn"]}
              style={{ marginTop: "1rem" }}
              onClick={() => handleCancel()}
            >
              Cancel
            </Button>
            <Button
              className={styles["cancel-save-btn"]}
              style={{ marginTop: "1rem" }}
              onClick={() => {
                setEditMode(false);
                if (planId) {
                }
              }}
            >
              Save
            </Button>
          </>
        )}
      </Form>
      <ToastNotification
        message="Your edits have been saved."
        trigger={showToast}
      />
    </>
  );
};
export default Readings;
