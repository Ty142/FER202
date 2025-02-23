import React, { useState } from "react";
import Question from "./Question";
import Score from "./Score";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "what is 7 * 8",
    options: ["45", "56", "64", "65"],
    answer: "56",
  },
];

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (selectOption) => {
    if (selectOption === quizData[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="question">
      {showResult ? (
        <Score score={score} totalQuestions={quizData.length} />
      ) : (
        <Question
          question={quizData[currentQuestionIndex].question}
          options={quizData[currentQuestionIndex].options}
          onAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
};

export default QuizApp;
