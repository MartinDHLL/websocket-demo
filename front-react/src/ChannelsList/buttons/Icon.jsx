const Icon = ({ icon }) => (
  <img
    className="bg-gray-600 hover:bg-gray-200 cursor-pointer p-1"
    src={
      icon === "home"
        ? "house-solid.svg"
        : icon === "group"
        ? "user-group-solid.svg"
        : "user-solid.svg"
    }
    alt="home icon"
  ></img>
);

export default Icon;
