import {
  Button,
  OutlinedInput,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Task from "../Task/Task";
import { useState } from "react";
import { toast } from "react-hot-toast";

const List = ({ list, updateList, removeList }) => {
  const [tasks, setTasks] = useState([]);
  const [isModify, setModifyState] = useState(false);

  const handleRemoveTask = (task) => {
    setTasks(
      tasks.filter((taskToRemove) => {
        return taskToRemove.id !== task.id;
      })
    );
    toast("Tâche supprimée", { icon: "🗑️" });
  };

  const handleAddTask = (task) => {
    if (
      !task.title.length > 0 ||
      parseInt(task.priority) <= 0 ||
      parseInt(task.priority) > 10
    )
      return;
    task.id = (tasks[tasks.length - 1]?.id ?? -1) + 1;
    setTasks((tasks) => [...tasks, task]);
    toast("Tâche ajoutée", { icon: "➕" });
  };

  return (
    <div className="w-[30%] border-[1px] border-slate-200 shadow-lg min-h-[400px] rounded-xl">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                {isModify ? (
                  <OutlinedInput
                    defaultValue={list.title}
                    onKeyUp={(event) => {
                      if (event.key === "Enter") {
                        updateList({ id: list.id, title: event.target.value });
                        setModifyState(false);
                      }
                    }}
                  />
                ) : (
                  <p className="text-xl" onClick={() => setModifyState(true)}>
                    {list.title}
                  </p>
                )}
                <Stack direction={"row"} justifyContent={"center"}>
                  <OutlinedInput
                    size="small"
                    maxRows={1}
                    placeholder="priority number"
                  />
                  <OutlinedInput size="small" placeholder="title" />
                  <Button
                    size="small"
                    variant="contained"
                    onClick={(element) =>
                      handleAddTask({
                        priority:
                          element.target.parentNode.children[0].childNodes[0]
                            .value,
                        title:
                          element.target.parentNode.children[1].childNodes[0]
                            .value,
                      })
                    }
                  >
                    +
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3}>
                <Stack direction={"row"} justifyContent={"center"}>
                  <Button onClick={() => removeList(list)} variant="outlined">
                    supprimer la liste
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.length > 0 ? (
              tasks.map((task, i) => (
                <Task key={i} task={task} remove={handleRemoveTask} />
              ))
            ) : (
              <TableRow>
                <TableCell>
                  <p className="text-center">Aucune tâches</p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
