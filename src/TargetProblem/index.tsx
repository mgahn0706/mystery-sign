import { Box, ListItem, Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { DragHandle } from "@mui/icons-material";
import TargetProblemData from "./fixtures";

export default function TargetProblem({ round }: { round: number }) {
  return (
    <Box border="1px solid lightgray" borderRadius="20px" my={2} width="700px">
      <ListItem>
        <Typography textAlign="center" width="300px" fontSize="30px">
          {TargetProblemData[round - 1].first}
        </Typography>
        <HelpIcon sx={{ m: 2 }} />
        <Typography textAlign="center" width="300px" fontSize="30px">
          {TargetProblemData[round - 1].second}
        </Typography>
        <DragHandle sx={{ m: 2 }} />
        <Typography textAlign="center" width="300px" fontSize="30px">
          ?
        </Typography>
      </ListItem>
    </Box>
  );
}
