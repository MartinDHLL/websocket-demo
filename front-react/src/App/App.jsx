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

  // socket.connect(); // remove after

  useEffect(() => {
    const connectionWindow = document.getElementById("connection-window");
    connectionWindow.hidden = connectionStatus;

    socket.on("connect", () => setConnectionStatus(socket.connected));
    socket.on("disconnect", () => setConnectionStatus(socket.connected));
    socket.on("usernameOnConnection", (message) => console.log(message));
  }, [connectionStatus]);

  return (
    <>
      <div className="fixed top-0 flex flex-row justify-between min-h-screen min-w-full">
        <ChannelsList />
        <MessagesList />
        <OptionsSidebar username={username} />
      </div>

      <div id="connection-window">
        <ConnectionWindow setUsername={setUsername} />
      </div>
    </>
  );
}

export default App;
