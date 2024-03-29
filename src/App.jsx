import { useState, useEffect } from "react";
import { Description } from "./components/Description/Description";
import { Feedback } from "./components/Feedback/Feedback";
import { Options } from "./components/Options/Options";
import { Notification } from "./components/Notification/Notification";

const getFeedback = () => {
  const feedbackValue = localStorage.getItem("feedback");
  return feedbackValue !== null
    ? JSON.parse(feedbackValue)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

export const App = () => {
  const [cliks, setCliks] = useState(getFeedback);

  const updateFeedback = (feedbackType) => {
    setCliks({
      ...cliks,
      [feedbackType]: cliks[feedbackType] + 1,
    });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(cliks));
  }, [cliks]);

  const totalFeedback = cliks.good + cliks.neutral + cliks.bad;

  const positiv = Math.round(
    ((cliks.good + cliks.neutral) / totalFeedback) * 100
  );

  return (
    <div>
      <Description />
      <Options
        onTrack={(feedbackType) => updateFeedback(feedbackType)}
        totalFeedback={totalFeedback}
        setCliks={setCliks}
      />
      {totalFeedback >= 1 && (
        <Feedback
          value={cliks}
          totalFeedback={totalFeedback}
          positiv={positiv}
        />
      )}
      {totalFeedback < 1 && <Notification />}
    </div>
  );
};
