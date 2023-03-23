import List from "./List";

const Lists = ({ lists }) => {
  return lists.map((list) => <List key={list.key} list={list} />);
};

export default Lists;
