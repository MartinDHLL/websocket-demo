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
        className="border-black border-2 rounded-[100%] text-center w-10 h-10 flex flex-col justify-center"
        style={color()}
      >
        <p className="">{priority}</p>
      </div>
    </TableCell>
  );
};

export default TaskPriorityIcon;
