import { useState } from "react";
import { Box, Typography } from "@mui/material";
import HintInput from "../HintInput/index";
import HintList from "../HintList";
import { HintType } from "@/types";

export default function Main() {
  const [hintList, setHintList] = useState<HintType[]>([]);

  const handleEnterHint = (hint: HintType) => {
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
        <HintInput onEnterHint={handleEnterHint} />
      </Box>
      <HintList hintList={hintList} />
    </>
  );
}
