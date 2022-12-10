import { useState } from "react";
import { Box, Typography } from "@mui/material";
import HintInput from "../HintInput/index";
import HintList from "../HintList";
import { HintType } from "@/types";
import useMysterySign from "../hooks/useMysterySign";

export default function Main() {
  const [hintList, setHintList] = useState<HintType[]>([]);
  const [round, setRound] = useState(1);

  const useHandleEnterHint = (hint: HintType) => {
    const result = useMysterySign({
      first: hint.first,
      second: hint.second,
      round,
    });
    setHintList([...hintList, hint]);
  };

  return (
    <>
      <Typography fontFamily="Zen Dots" variant="h2">
        MYSTERY SIGN
      </Typography>
      <Typography fontFamily="Zen Dots" variant="body1">
        추러스 12월 정기모임
      </Typography>
      <Box display="flex" justifyContent="center">
        <HintInput onEnterHint={useHandleEnterHint} />
      </Box>
      <HintList hintList={hintList} />
    </>
  );
}
