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
  const [isMessagesLoaded, setMessagesLoadStatus] = useState(false);

  const changeRoom = (name) => {
    setMessagesLoadStatus(false);
    setRoom(name);
    socket.emit("join room", name);
    // replace code bellow by DB implementation, fetch or axios...  if(data) {setMessages(data);setMessagesLoadStatus(true);}
    setMessages([]);
    setTimeout(() => setMessagesLoadStatus(true), 2000);
  };

  useEffect(() => {
    const connectionWindow = document.getElementById("connection-window");
    connectionWindow.hidden = connectionStatus;

    function addMessage(message) {
      setMessages((messages) => [
        ...messages,
        {
          key: (messages[messages.length - 1]?.key ?? 0) + 1,
          sender: message.sender,
          content: message.content,
          date: message.date,
          hours: message.hours,
        },
      ]);
    }

    socket.on("connect", () => setConnectionStatus(socket.connected));
    socket.on("disconnect", () => setConnectionStatus(socket.connected));
    socket.on("message", addMessage);

    return () => {
      socket.off("connect", () => setConnectionStatus(socket.connected));
      socket.off("disconnect", () => setConnectionStatus(socket.connected));
      socket.off("message", addMessage);
    };
  }, [messages, connectionStatus]);

  return (
    <>
      <div className="fixed w-full top-0 flex flex-row justify-between min-h-screen min-w-full bg-white text-back">
        <ChannelsList room={room} changeRoom={changeRoom} />
        {room != null ? (
          <MessagesList
            messages={messages}
            setMessages={setMessages}
            room={room}
            isMessagesLoaded={isMessagesLoaded}
          />
        ) : (
          <p className="text-xl py-10">Aucune discussions selectionnées</p>
        )}
        <OptionsSidebar username={username} changeRoom={changeRoom} />
      </div>

      <ConnectionWindow setUsername={setUsername} />
    </>
  );
}

export default App;
