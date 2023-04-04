import { useState } from "react";
import List from "./List";
import ButtonList from "../../ButtonList/ButtonList";
import { toast } from "react-hot-toast";

const Lists = () => {
  const [lists, setLists] = useState([
    {
      id: 0,
      title: "To do",
    },
  ]);

  const handleAddList = (title) => {
    setLists((lists) => [
      ...lists,
      {
        id: (lists[lists.length - 1]?.id ?? 0) + 1,
        title: title,
      },
    ]);
    toast.success("Nouvelle liste créée");
  };

  const handleUpdateList = (list) => {
    setLists(
      lists.map((listToBeUpdated) => {
        return listToBeUpdated.id === list.id
          ? { ...listToBeUpdated, title: list.title }
          : listToBeUpdated;
      })
    );
    toast("Liste mise à jour", { icon: "✏️" });
  };

  const handleRemoveList = (list) => {
    setLists(
      lists.filter((listToRemove) => {
        return listToRemove.id !== list.id;
      })
    );
    toast("Liste supprimée", { icon: "🗑️" });
  };

  return (
    <>
      <ButtonList handleClick={handleAddList} />
      <div className="min-w-max flex gap-x-5">
        {lists.map((list, i) => (
          <List
            key={i}
            list={list}
            updateList={handleUpdateList}
            removeList={handleRemoveList}
          />
        ))}
      </div>
    </>
  );
};

export default Lists;
