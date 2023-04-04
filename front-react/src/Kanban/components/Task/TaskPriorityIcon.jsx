import { TableCell } from "@mui/material";

const TaskPriorityIcon = ({ priority }) => {
  const color = () => {
    const color = {
      background:
        priority > 5
          ? `hsl(0deg ${priority * 10}% 70%)`
          : `hsl(120deg ${-priority * 10 + 100}% 55%)`,
    };
    return color;
  };

  return (
    <TableCell className="h-full">
      <div
        className="text-center w-10 h-10 flex flex-col justify-center"
        style={color()}
      >
        <p className="text-xl">{priority}</p>
      </div>
    </TableCell>
  );
};

export default TaskPriorityIcon;
