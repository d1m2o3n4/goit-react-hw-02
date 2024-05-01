import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/description/Description";
import Options from "./components/option/Option";
import Feedback from "./components/feedback/Feedback";

function App() {
  const getStoredFeedback = () => {
    const storedFeedback = localStorage.getItem("feedback");
    return storedFeedback
      ? JSON.parse(storedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  };
  const [feedback, setFeedback] = useState(getStoredFeedback);
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
}
export default App;
