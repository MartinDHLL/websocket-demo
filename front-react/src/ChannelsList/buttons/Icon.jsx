import { Link } from "react-router-dom";

const Icon = ({ icon }) => (
  <Link to="/">
    <div className="min-w-[50px] h-[50px] bg-gray-600 hover:bg-gray-200 cursor-pointer p-3 m-1 rounded-[100%]">
      <img className="max-h-full" src={chooseIcon(icon)} alt="home icon" />
    </div>
  </Link>
);

const chooseIcon = (icon) => {
  switch (icon) {
    default:
      return null;
    case "home":
      return "house.svg";
    case "chat":
      return "comments.svg";
    case "kanban":
      return "list.svg";
  }
};

export default Icon;
