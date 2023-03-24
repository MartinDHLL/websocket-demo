import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Task from "../Task/Task";

const List = ({ list }) => (
  <div className="w-[20%] border-[1px] border-slate-200 shadow-lg min-h-[400px] rounded-xl">
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              {list.title}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.tasks.map((task, i) => (
            <Task key={i} task={task} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);

export default List;
