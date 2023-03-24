import { TableCell, TableRow } from "@mui/material";
import TaskPriorityIcon from "./TaskPriorityIcon";

const Task = ({ task }) => {
  return (
    <TableRow>
      <TableCell className="break-all">{task.title}</TableCell>
      <TaskPriorityIcon priority={task.priority} />
    </TableRow>
  );
};
export default Task;
