const Icon = ({ icon }) => (
  <div className="min-w-[50px] h-[50px] bg-gray-600 hover:bg-gray-200 cursor-pointer p-1 border-[0.5px]">
    <img
      className="max-h-full"
      src={
        icon === "home"
          ? "house-solid.svg"
          : icon === "group"
          ? "user-group-solid.svg"
          : "user-solid.svg"
      }
      alt="home icon"
    ></img>
  </div>
);

export default Icon;
