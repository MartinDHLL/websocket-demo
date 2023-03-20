import { useEffect, useState } from "react";

const Channel = ({ name, room, changeRoom }) => {
  const [isActive, setActive] = useState(false);
  const setClasses = () => {
    return `break-all overflow-hidden  max-h-[5%] rounded-[10px] cursor-pointer ${
      isActive
        ? "text-white bg-gray-800"
        : "bg-gray-500 text-white hover:bg-black hover:text-blue-200"
    }`;
  };

  useEffect(() => {
    setActive(name === room);
  }, [name, room]);

  return (
    <div
      onClick={() => {
        changeRoom(name);
      }}
      className={setClasses()}
    >
      <div className="pr-2 pl-2 text-[12pt] ">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Channel;
