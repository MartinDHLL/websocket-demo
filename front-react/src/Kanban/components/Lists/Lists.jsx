import List from "./List";

const Lists = ({ lists }) => {
  return (
    <div className="min-w-max flex justify-start gap-x-5 ">
      {lists.map((list, i) => (
        <List key={i} list={list} />
      ))}
    </div>
  );
};

export default Lists;
