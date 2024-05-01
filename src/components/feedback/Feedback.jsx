import React from "react";
import s from "./Feefback.module.css";
const Feedback = ({ feedback, totalFeedback }) => {
  const { good, neutral, bad } = feedback;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);
  return (
    <>
      <div className={s.feedBackList}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedback}</p>
      </div>
    </>
  );
};
export default Feedback;
