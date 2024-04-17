import React from "react";
import css from "./Feedback.module.css";
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.button}>
    {options.map((option) => {
      return (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}>
          {option}{" "}
        </button>
      );
    })}
  </div>
);
export default FeedbackOptions;
