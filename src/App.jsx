import { useState } from "react";
import { Description } from "./components/Description/Description";
import { Feedback } from "./components/Feedback/Feedback";
import { Options } from "./components/Options/Options";

export const App = () => {
  return (
    <div>
      <Description />
      <Feedback />
      <Options />
    </div>
  );
};
