import style from "./Feedback.module.css";

export const Feedback = ({ value }) => {
  const { good, neutral, bad } = value;

  return (
    <div>
      <ul>
        <li>
          <p> Good: {good}</p>
        </li>
        <li>
          <p> Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>{/* <p>Total: {totalFeed}</p> */}</li>
      </ul>
      {/* <p className={css.text}>Positive: {info}%</p> */}
    </div>
  );
};
