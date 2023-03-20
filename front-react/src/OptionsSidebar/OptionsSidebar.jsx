import { useState } from "react";
import socket from "../socketio";
import UserInfo from "./UserInfo/UserInfo";

export default function OptionsSidebar({ username, changeRoom }) {
  const [isBarOpen, setBarState] = useState(false);

  const setClasses = () => {
    return `flex flex-col justify-start items-center p-5 bg-slate-800 min-h-full text-white rounded-tl-[20px] rounded-bl-[20px] ${
      isBarOpen
        ? "w-[20%]"
        : "w-[0] hover:bg-black animation- hover:cursor-pointer hover:animate-pulse"
    }`;
  };

  const handleClick = isBarOpen
    ? // si la barre verticale de droite est déjà ouverte
      () => {
        setBarState(false); // fermer la barre de connexion
        changeRoom(null); // changer le canal vers null (aucun canal) et effacer tous les messages existants
        socket.disconnect();
      }
    : // si la barre verticale de droite est fermée
      () => {
        setBarState(true); // ouvrir la barre verticale
      };

  return (
    <div onClick={handleClick} className={setClasses()}>
      {!isBarOpen ? (
        <div className="flex flex-col justify-center h-full">
          <hr className="border-2 h-[30%] rounded-full" />
        </div>
      ) : null}
      {isBarOpen ? (
        <div>
          <UserInfo username={username} />
          <button
            onClick={handleClick}
            className="m-2 p-1 bg-white text-black hover:bg-black hover:text-red-200"
          >
            Se deconnecter
          </button>
        </div>
      ) : null}
    </div>
  );
}
