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
      <Typography variant="h2">MYSTERY SIGN</Typography>
      <Box display="flex" justifyContent="center">
        <HintInput onEnterHint={handleEnterHint} />
      </Box>
      <HintList hintList={hintList} />
    </>
  );
}
