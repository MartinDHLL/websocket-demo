import { TableCell } from "@mui/material";

const TaskPriorityIcon = ({ priority }) => {
  const color = () => {
    const color = { background: `hsl(0deg ${priority * 10}% 55%)` };
    return color;
  };

  return (
    <TableCell className="h-full">
      <div
        className="border-black border-2 rounded-[100%] p-1 text-center h-full w-full"
        style={color()}
      >
        <p>{priority}</p>
      </div>
    </TableCell>
  );
};

export default TaskPriorityIcon;
