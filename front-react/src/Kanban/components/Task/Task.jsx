import { TableCell, TableRow } from "@mui/material";
import TaskPriorityIcon from "./TaskPriorityIcon";

const Task = ({ task }) => {
  return (
    <TableRow>
      <TableCell className="break-all">{task.title}</TableCell>
      {task.priority ? <TaskPriorityIcon priority={task.priority} /> : "+"}
      <TableCell></TableCell>
    </TableRow>
  );
};
export default Task;
