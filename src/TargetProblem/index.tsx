import { Box, Button, ListItem, TextField, Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { DragHandle } from "@mui/icons-material";
import TargetProblemData from "./fixtures";
import { useState } from "react";
import useMysterySign from "../hooks/useMysterySign";

export default function TargetProblem({ round }: { round: string }) {
  const [enteredAnswer, setEnteredAnswer] = useState("");

  const answer = useMysterySign({
    first: TargetProblemData[round].first,
    second: TargetProblemData[round].second,
    round,
  });

  return (
    <Box
      border="1px solid lightgray"
      borderRadius="20px"
      my={2}
      pb={1}
      pt={1}
      width="300px"
    >
      <ListItem>
        <Typography textAlign="center" width="100px" fontSize="30px">
          {TargetProblemData[round].first}
        </Typography>
        <HelpIcon sx={{ m: 1 }} />
        <Typography textAlign="center" width="100px" fontSize="30px">
          {TargetProblemData[round].second}
        </Typography>
        <DragHandle sx={{ m: 2 }} />
        <TextField
          sx={{ width: "120px", fontSize: "30px" }}
          onChange={(e) => {
            if (
              (/^[0-9]+$/.test(e.target.value) && e.target.value !== "0") ||
              !e.target.value
            ) {
              setEnteredAnswer(e.target.value);
            }
          }}
          value={enteredAnswer}
        />
      </ListItem>
      <Button
        disabled={!enteredAnswer}
        sx={{ height: "20px", fontSize: "10px" }}
        variant="outlined"
        onClick={() => {
          if (answer === Number(enteredAnswer)) {
            window.alert("정답입니다! 승점 +1");
          } else {
            window.alert("오답입니다. 승점 -1");
          }
        }}
      >
        정답 제출
      </Button>
    </Box>
  );
}
