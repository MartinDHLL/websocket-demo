import { Button, TableCell } from "@mui/material";
import TaskPriorityIcon from "./TaskPriorityIcon";

const Task = ({ task, remove }) => {
  return (
    <>
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
    </>
  );
};
export default Task;
