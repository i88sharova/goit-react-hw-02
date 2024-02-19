import style from "./Options.module.css";

export const Options = ({ onTrack, totalFeedback, Setcliks }) => {
  return (
    <div>
      <button className={style.btn} onClick={() => onTrack("good")}>
        Good
      </button>
      <button className={style.btn} onClick={() => onTrack("neutral")}>
        Neutral
      </button>
      <button className={style.btn} onClick={() => onTrack("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <>
          <button
            className={style.btn}
            onClick={() => {
              Setcliks({
                good: 0,
                neutral: 0,
                bad: 0,
              });
            }}
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
};
