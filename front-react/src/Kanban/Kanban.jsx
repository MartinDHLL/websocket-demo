import { Stack } from "@mui/system";
import { useState } from "react";
import ButtonList from "./ButtonList/ButtonList";
import Lists from "./components/Lists/Lists";

export default function Kanban() {
  const [lists, setLists] = useState([
    {
      title: "Test",
      tasks: [
        { title: "créer un kabanqqqqqqqqqqqqqqq", priority: 10 },
        { title: "ajouter une tâche", priority: 8 },
      ],
    },
    {
      title: "Test 2",
      tasks: [{ title: "créer un kabanqqqqqqqqqqqqqqq", priority: 10 }],
    },
    {
      title: "Test",
      tasks: [
        { title: "créer un kabanqqqqqqqqqqqqqqq", priority: 10 },
        { title: "ajouter une tâche", priority: 8 },
      ],
    },
    {
      title: "to Do",
      tasks: [],
    },
    {
      title: "to Do",
      tasks: [
        { title: "créer un kabanqqqqqqqqqqqqqqq", priority: 10 },
        { title: "ajouter une tâche", priority: 8 },
      ],
    },
    {
      title: "to Do",
      tasks: [],
    },
  ]);

  const handleAddList = (title) => {
    setLists((lists) => [
      ...lists,
      {
        key: lists.length,
        title: title,
        tasks: [{ title: "my first task" }],
      },
    ]);
  };

  return (
    <Stack direction={"column"} spacing={4} className="m-5">
      <ButtonList handleClick={handleAddList} />
      <Lists lists={lists} />
    </Stack>
  );
}
