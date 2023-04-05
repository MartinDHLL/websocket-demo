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

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", JSON.stringify({ list, tasks }));
    event.dataTransfer.effectAllowed = "move";
  };

  const handleDrop = (event) => {
    event.target.style.backgroundColor = "#FFFFFF"
    const newData = JSON.parse(event.dataTransfer.getData("text/plain"));
    updateList({id:list.id, title:newData.list.title});
    removeList(newData.list)
    setTasks(newData.tasks);
    console.log(newData);
  };

  return (
    <div
      className="w-min-max w-[20em] border-[1px] border-slate-200 shadow-lg rounded-xl"
      onDragOver={(event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        event.target.style.backgroundColor = "#F2F4F4";
      }}
      onDragLeave={(event) => {
        event.target.style.backgroundColor = "#FFFFFF";
      }}
      onDrop={handleDrop}
    >
    <Button onDragStart={handleDragStart} draggable>drag area</Button>
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
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3}>
                <Stack direction={"row"} justifyContent={"center"}>
                  {/* <Button onClick={() => removeList(list)} variant="outlined">
                    supprimer la liste
                  </Button> */}
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
          </TableHead>
          <TableBody className="overflow-y-auto max-h-[10em]">
            {tasks.length > 0 ? (
              tasks.map((task, i) => (
                <TableRow> 
                <Task key={i} task={task} remove={handleRemoveTask} />
                </TableRow>
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
