import React from "react";
import "../App.css";

const Question = ({ question, options, onAnswerOptionClick }) => {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div>
        {options.map((option, index) => (
          <label key={index}>
            <input type="radio" onClick={() => onAnswerOptionClick(option)} />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
