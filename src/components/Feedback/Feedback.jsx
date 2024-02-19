import style from "./Feedback.module.css";

export const Feedback = ({ value, totalFeedback, positiv }) => {
  const { good, neutral, bad } = value;

  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li> Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiv}%</li>
      </ul>
    </div>
  );
};
