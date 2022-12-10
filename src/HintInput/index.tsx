import { Box, TextField, Button } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { useState } from "react";
import { HintType } from "@/types";
import useMysterySign from "../hooks/useMysterySign/index";

interface HintInputProps {
  onEnterHint: (hint: HintType) => void;
}

export default function HintInput({ onEnterHint }: HintInputProps) {
  const [enteredValue, setEnteredValue] = useState<{
    first: string;
    second: string;
  }>({
    first: "",
    second: "",
  });
  const [isPlayerOneFirst, setPlayerOneFirst] = useState(true);

  const result = useMysterySign({ ...enteredValue, round: 1 });

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
        sx={{
          ml: 2,
        }}
        variant="outlined"
        onClick={() => {
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
    </Box>
  );
}
