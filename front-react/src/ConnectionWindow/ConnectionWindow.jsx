import { useState } from "react";
import socket from "../socketio";
import ConfirmButton from "./buttons/ConfirmButton";

export default function ConnectionWindow({ setUsername }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const connectToSocket = () => {
    if (input != null && input.length > 0) {
      socket.connect();
      socket.emit("usernameOnConnection", input);
      setUsername(input);
    } else {
      // pop a error window that tell to the user that the username doesn't respect the standard
      console.log("Le nom d'utilisateur est vide !");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      {/* transparent background with blur to hide non-loaded components */}
      <div className="fixed w-full h-full backdrop-blur-sm bg-transparent" />
      <div className="fixed bg-neutral-900 flex flex-col gap-y-4 items-center justify-center w-[80%] h-[80%] rounded-[100px] shadow-2xl text-white text-2xl">
        <p>Rentrez votre nom d'utilisateur</p>
        <input
          onChange={handleInput}
          type="text"
          id="input-name"
          className="text-center"
        />
        <ConfirmButton handleClick={connectToSocket} />
      </div>
    </div>
  );
}
