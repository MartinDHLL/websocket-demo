import { Stack } from "@mui/system";
import { useState } from "react";
import ButtonList from "./ButtonList/ButtonList";
import Lists from "./components/Lists/Lists";

export default function Kanban() {
  const [lists, setLists] = useState([
    {
      title: "To do",
      tasks: [
        { title: "example", priority: 1 },
        { title: "ajouter une tâche", priority: 8 },
      ],
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
    <Stack direction={"column"} spacing={10} margin={2}>
      <ButtonList handleClick={handleAddList} />
      <Lists lists={lists} />
    </Stack>
  );
}
