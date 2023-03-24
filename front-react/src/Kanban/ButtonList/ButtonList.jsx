import { Stack } from "@mui/system";
import { Add } from "./buttons";

const ButtonList = ({ handleClick }) => (
  <Stack direction={"row"}>
    <Add handleClick={handleClick} />
  </Stack>
);

export default ButtonList;
