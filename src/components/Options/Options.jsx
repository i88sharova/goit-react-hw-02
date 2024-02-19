import style from "./Options.module.css";

export const Options = ({ onTrack }) => {
  return (
    <div>
      <button className={style.btn} onClick={() => onTrack("good")}>
        Goog
      </button>
      <button className={style.btn} onClick={() => onTrack("neutral")}>
        Neutral
      </button>
      <button className={style.btn} onClick={() => onTrack("bad")}>
        Bad
      </button>
    </div>
  );
};
