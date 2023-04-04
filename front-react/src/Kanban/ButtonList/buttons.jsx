import { Button } from "@mui/material";

export const Add = ({ handleClick }) => (
  <Button variant="contained" onClick={() => handleClick("New list")}>
    +
  </Button>
);
