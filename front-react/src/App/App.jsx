import { useEffect, useState } from "react";
import ChannelsList from "../ChannelsList/ChannelsList";
import ConnectionWindow from "../ConnectionWindow/ConnectionWindow";
import MessagesList from "../MessagesList/MessagesList";
import OptionsSidebar from "../OptionsSidebar/OptionsSidebar";
import { getMessages } from "../services/message.service";
import socket from "../socketio";
import "./App.css";

function App() {
  const [connectionStatus, setConnectionStatus] = useState(socket.connected);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isMessagesLoaded, setMessagesLoadStatus] = useState(false);

  const changeRoom = (name) => {
    setRoom(name);
    setMessagesLoadStatus(false);
    setMessages([]);
    socket.emit("request join room"); // send a request to join the room, the back-end will check data and cleans all active rooms
  };

  useEffect(() => {
    const connectionWindow = document.getElementById("connection-window");
    connectionWindow.hidden = connectionStatus;

    // When a message is received, the message is added to the array
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

    // Get all messages of a room and join the room with the socket when the user is authorized to join
    function getMessagesAndJoin() {
      console.log("ok");
      getMessages(room).then((data) => {
        if (data && data.length > 0) {
          data[0].key = (messages[messages.length - 1]?.key ?? 0) + 1;
          console.log(data);
          setMessages(data);
          setMessagesLoadStatus(true);
          socket.emit("join room", room);
          return;
        }
        setMessagesLoadStatus(true);
        return;
      });
    }

    socket.on("connect", () => setConnectionStatus(socket.connected));
    socket.on("disconnect", () => setConnectionStatus(socket.connected));
    socket.on("message", addMessage);
    socket.on("join room", getMessagesAndJoin);

    return () => {
      socket.off("connect", () => setConnectionStatus(socket.connected));
      socket.off("disconnect", () => setConnectionStatus(socket.connected));
      socket.off("message", addMessage);
      socket.off("join room", getMessagesAndJoin);
    };
  }, [messages, connectionStatus, room]);

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
