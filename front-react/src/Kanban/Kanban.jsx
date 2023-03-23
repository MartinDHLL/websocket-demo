import { useEffect, useState } from "react";
import Lists from "./components/Lists/Lists";

export default function Kanban() {
  const [lists, setLists] = useState([
    { key: 0, title: "to Do", tasks: [{ key: 0, title: "créer un kaban" }] },
  ]);

  const handleAddList = (title) => {
    setLists((lists) => [
      ...lists,
      {
        key: lists.length,
        title: title,
        tasks: [{ key: 0, title: "my first task" }],
      },
    ]);
  };

  return <Lists lists={lists} />;
}
