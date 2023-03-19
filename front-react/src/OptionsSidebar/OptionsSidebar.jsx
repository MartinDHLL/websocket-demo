import { useEffect, useState } from "react";
import socket from "../socketio";

export default function OptionsSidebar({ username }) {
  const [barClass, setBarClass] = useState("");
  const [isBarOpen, setBarState] = useState(false);

  const handleClick = () => {
    console.log(isBarOpen);
    setBarState(false);
    socket.disconnect();
    console.log(isBarOpen);
  };

  useEffect(() => {
    setBarClass(
      `flex flex-col justify-start items-center p-5 bg-slate-800 min-h-full text-white rounded-tl-[20px] rounded-bl-[20px] ${
        isBarOpen
          ? "w-[20%]"
          : "w-[0] hover:bg-black animation- hover:cursor-pointer hover:animate-pulse"
      }`
    );
  }, [isBarOpen]);

  return (
    <div onClick={() => setBarState(true)} className={barClass}>
      {!isBarOpen ? (
        <div className="flex flex-col justify-center h-full">
          <hr className="border-2 h-[30%] rounded-full" />
        </div>
      ) : null}
      {isBarOpen ? (
        <div>
          <p>Utilisateur : {username}</p>
          <button
            onClick={handleClick}
            className="p-1 bg-white text-black hover:bg-black hover:text-red-200"
          >
            Se deconnecter
          </button>
        </div>
      ) : null}
    </div>
  );
}
