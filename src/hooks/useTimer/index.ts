import { useState } from "react";
import useInterval from "../useInterval";

export default function useTimer() {
  const [remainingTime, setRemainingTime] = useState(0);

  useInterval(
    () => {
      setRemainingTime(remainingTime - 1);
    },
    remainingTime > 0 ? 1000 : null
  );

  const resetTimer = () => setRemainingTime(60);

  return { remainingTime, resetTimer };
}
