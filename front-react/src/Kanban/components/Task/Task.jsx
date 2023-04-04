import { Button, TableCell, TableRow } from "@mui/material";
import TaskPriorityIcon from "./TaskPriorityIcon";

const Task = ({ task, remove }) => {
  return (
    <TableRow>
      {task.priority ? (
        <TaskPriorityIcon priority={task.priority} />
      ) : (
        <TableCell>
          <Button variant="outlined">+</Button>
        </TableCell>
      )}
      <TableCell className="break-all">{task.title}</TableCell>
      <TableCell onClick={() => remove(task)} className="hover:cursor-pointer">
        <img className="h-8" src="trash.svg" alt="trash icon" />
      </TableCell>
    </TableRow>
  );
};
export default Task;
