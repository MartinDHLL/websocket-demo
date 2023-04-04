import { Stack } from "@mui/system";
import Lists from "./components/Lists/Lists";
import { createPortal } from "react-dom";
import { Toaster } from "react-hot-toast";

export default function Kanban() {
  return (
    <>
      {createPortal(<Toaster />, document.body)}
      <Stack direction={"column"} spacing={10} margin={2}>
        <Lists />
      </Stack>
    </>
  );
}
