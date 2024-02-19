import { useState } from "react";
import { Description } from "./components/Description/Description";
import { Feedback } from "./components/Feedback/Feedback";
import { Options } from "./components/Options/Options";
import { Notification } from "./components/Notification/Notification";

export const App = () => {
  const [cliks, Setcliks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    Setcliks({
      ...cliks,
      [feedbackType]: cliks[feedbackType] + 1,
    });
  };

  const totalFeedback = cliks.good + cliks.neutral + cliks.bad;

  return (
    <div>
      <Description />
      <Options
        onTrack={(feedbackType) => updateFeedback(feedbackType)}
        totalFeedback={totalFeedback}
        Setcliks={Setcliks}
      />
      {totalFeedback >= 1 && <Feedback value={cliks} />}
      {totalFeedback < 1 && <Notification />}
    </div>
  );
};
