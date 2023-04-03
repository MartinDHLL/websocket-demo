import { Stack } from "@mui/system";
import { Add } from "./buttons";

const ButtonList = ({ handleClick }) => (
  <Stack position={"fixed"} direction={"row"}>
    <Add handleClick={handleClick} />
  </Stack>
);

export default ButtonList;
