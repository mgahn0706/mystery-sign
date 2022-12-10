import { Box, List, ListItem, ListSubheader, Typography } from "@mui/material";
import { HintType } from "@/types";
import HelpIcon from "@mui/icons-material/Help";
import { DragHandle } from "@mui/icons-material";

interface HintListProps {
  hintList: HintType[];
}

export default function HintList({ hintList }: HintListProps) {
  console.log(hintList);
  return (
    <Box display="flex" justifyContent="center">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Hints
          </ListSubheader>
        }
      >
        {hintList.map((hint) => {
          return (
            <Box>
              <ListItem key={hint.first}>
                <Typography textAlign="center" width="100px">
                  {hint.first}
                </Typography>
                <HelpIcon sx={{ m: 2 }} />
                <Typography textAlign="center" width="100px">
                  {hint.second}
                </Typography>
                <DragHandle sx={{ m: 2 }} />
                <Typography textAlign="center" width="100px">
                  {Number(hint.second) * 2}
                </Typography>
              </ListItem>
            </Box>
          );
        })}
      </List>
    </Box>
  );
}
