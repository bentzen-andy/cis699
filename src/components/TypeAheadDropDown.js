import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import styles from "./TypeAheadDropDown.module.css";

const TypeAheadDropDown = ({
  items,
  book,
  handleBookChange,
  dayNumber,
  readingNumber,
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);

  function onTextChange(e) {
    let wordList = [];
    const val = e.target.value;
    if (val.length > 0) {
      const regex = new RegExp(`^${val}`, `i`);
      wordList = items.sort().filter((v) => regex.test(v));
    }
    setSuggestions(wordList);
    setText(val);
    handleBookChange(val, dayNumber, readingNumber);
  }

  function keyDownHandler(e) {
    if (e.code === "Tab") {
      let selectedBook;
      if (currentIndex === -1) selectedBook = suggestions[0];
      else selectedBook = suggestions[currentIndex];
      setText(selectedBook);
      handleBookChange(selectedBook, dayNumber, readingNumber);
      setSuggestions([]);
    }
    if (e.code === "Escape") {
      setText("");
      handleBookChange("", dayNumber, readingNumber);
      setSuggestions([]);
    }
    if (e.code === "ArrowDown" && suggestions.length > 0) {
      let i = currentIndex + 1;
      if (i > suggestions.length - 1) i = suggestions.length - 1;
      setText(suggestions[i]);
      setCurrentIndex(i);
      handleBookChange(suggestions[i], dayNumber, readingNumber);
    }
    if (e.code === "ArrowUp" && suggestions.length > 0) {
      let i = currentIndex - 1;
      if (i < 0) i = 0;
      setText(suggestions[i]);
      setCurrentIndex(i);
      handleBookChange(suggestions[i], dayNumber, readingNumber);
    }
    if (e.code === "Backspace") {
      const i = -1;
      setCurrentIndex(i);
    }
  }

  function blurHandler() {
    setTimeout(() => {
      setSuggestions([]);
      setCurrentIndex(-1);
    }, 150);
  }

  function renderSuggestions() {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item, i) => (
          <li
            className={i === currentIndex ? styles["selected"] : ""}
            key={item}
            onClick={(e) => {
              setText(item);
              handleBookChange(item, dayNumber, readingNumber);
              setSuggestions([]);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={styles["type-ahead-drop-down"]}>
      <Form.Control
        onChange={onTextChange}
        onKeyDown={(e) => keyDownHandler(e)}
        onBlur={blurHandler}
        value={text === "" ? book : text}
        type="text"
        style={{ width: "10rem" }}
      />
      {renderSuggestions()}
    </div>
  );
};

export default TypeAheadDropDown;
