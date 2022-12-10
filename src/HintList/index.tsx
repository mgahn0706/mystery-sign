import { Box, List, ListItem, ListSubheader, Typography } from "@mui/material";
import { HintType } from "@/types";
import HelpIcon from "@mui/icons-material/Help";
import { DragHandle } from "@mui/icons-material";

interface HintListProps {
  hintList: HintType[];
}

export default function HintList({ hintList }: HintListProps) {
  return (
    <Box display="flex" justifyContent="center">
      <List
        sx={{ width: "100%", maxWidth: 700, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={<ListSubheader component="div">Hints</ListSubheader>}
      >
        {hintList.map((hint, idx) => {
          return (
            <Box
              border="1px solid lightgray"
              borderRadius="20px"
              my={2}
              key={`hint-${idx}`}
            >
              <ListItem>
                <Typography textAlign="center" width="300px" fontSize="30px">
                  {hint.first}
                </Typography>
                <HelpIcon sx={{ m: 2 }} />
                <Typography textAlign="center" width="300px" fontSize="30px">
                  {hint.second}
                </Typography>
                <DragHandle sx={{ m: 2 }} />
                <Typography textAlign="center" width="300px" fontSize="30px">
                  {hint.result}
                </Typography>
              </ListItem>
            </Box>
          );
        })}
      </List>
    </Box>
  );
}
