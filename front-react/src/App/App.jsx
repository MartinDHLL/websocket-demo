import { useEffect, useState } from "react";
import ChannelsList from "../ChannelsList/ChannelsList";
import ConnectionWindow from "../ConnectionWindow/ConnectionWindow";
import MessagesList from "../MessagesList/MessagesList";
import OptionsSidebar from "../OptionsSidebar/OptionsSidebar";
import socket from "../socketio";
import "./App.css";

function App() {
  const [connectionStatus, setConnectionStatus] = useState(socket.connected);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState(null);
  const [messages, setMessages] = useState([]);

  // socket.connect(); // remove after
  const changeRoom = (name) => {
    setRoom(name);
  };

  useEffect(() => {
    const connectionWindow = document.getElementById("connection-window");
    connectionWindow.hidden = connectionStatus;

    socket.on("connect", () => setConnectionStatus(socket.connected));
    socket.on("disconnect", () => setConnectionStatus(socket.connected));
  }, [connectionStatus]);

  return (
    <>
      <div className="fixed top-0 flex flex-row justify-between min-h-screen min-w-full bg-white text-back">
        <ChannelsList room={room} changeRoom={changeRoom} />
        {room != null ? (
          <MessagesList messages={messages} />
        ) : (
          <p className="text-xl py-10">Aucune discussions selectionnées</p>
        )}

        <OptionsSidebar username={username} />
      </div>

      <ConnectionWindow setUsername={setUsername} />
    </>
  );
}

export default App;
