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

  const resetTimer = () => setRemainingTime(30);

  return { remainingTime, resetTimer };
}
