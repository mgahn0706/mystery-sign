import { Box, TextField, Button } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { useState } from "react";
import { HintType } from "@/types";
import useMysterySign from "../hooks/useMysterySign/index";
import Timer from "./Timer";
import useTimer from "../hooks/useTimer";

interface HintInputProps {
  onEnterHint: (hint: HintType) => void;
  round: string;
}

export default function HintInput({ onEnterHint, round }: HintInputProps) {
  const [enteredValue, setEnteredValue] = useState<{
    first: string;
    second: string;
  }>({
    first: "",
    second: "",
  });
  const [isPlayerOneFirst, setPlayerOneFirst] = useState(
    Number(round) % 2 === 1
  );

  const result = useMysterySign({ ...enteredValue, round: round });
  const { remainingTime, resetTimer } = useTimer();

  return (
    <Box display="flex">
      <TextField
        id="outlined-basic"
        label={isPlayerOneFirst ? "선 플레이어" : "후 플레이어"}
        onChange={(e) => {
          setEnteredValue({ ...enteredValue, first: e.target.value });
        }}
        value={enteredValue.first}
      />
      <HelpIcon
        sx={{
          m: 2,
        }}
      />
      <TextField
        id="outlined-basic"
        label={isPlayerOneFirst ? "후 플레이어" : "선 플레이어"}
        onChange={(e) => {
          setEnteredValue({ ...enteredValue, second: e.target.value });
        }}
        value={enteredValue.second}
      />
      <Button
        disabled={remainingTime > 0}
        sx={{
          ml: 2,
        }}
        variant="outlined"
        onClick={() => {
          resetTimer();
          setEnteredValue({ first: "", second: "" });
          setPlayerOneFirst(!isPlayerOneFirst);
          onEnterHint({
            ...enteredValue,
            result,
          });
        }}
      >
        입력
      </Button>
      <Timer remainingTime={remainingTime} />
    </Box>
  );
}
