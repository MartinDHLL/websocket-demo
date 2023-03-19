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
    //send event to socket
  };

  useEffect(() => {
    const connectionWindow = document.getElementById("connection-window");
    connectionWindow.hidden = connectionStatus;

    socket.on("connect", () => setConnectionStatus(socket.connected));
    socket.on("disconnect", () => setConnectionStatus(socket.connected));

    // replace switch by event listener to charge message from different room
    switch (room) {
      default:
        setMessages([]);
        break;
      case "Secret Project":
        setMessages([
          {
            sender: "Martin",
            content: "salut tlm ! :D",
            date: "hier, 10 h 15",
          },
          {
            sender: "Testeur",
            content: "salut, ready pour le test ?",
            date: "hier, 12 h 15",
          },
          {
            sender: "Martin",
            content: "TEST",
            date: "aujourd'hui, 10 h 15",
          },
        ]);
        break;
      case "LXP":
        setMessages([
          {
            sender: "Cyril",
            content: "On benchmark ?",
            date: "hier, 16 h 25",
          },
          {
            sender: "Martin",
            content: "Ok, Chat GPT en dis quoi ?",
            date: "hier, 16 h 25",
          },
          {
            sender: "Cyril",
            content: "J'ai sorti l'article sur mon blog",
            date: "aujourd'hui, 10 h 13",
          },
        ]);
        break;
      case "Perfect Future":
        setMessages([
          {
            sender: "le futur",
            content: "Salut",
            date: "demain, 12 h 45",
          },
        ]);
        break;
    }
  }, [connectionStatus, room]);

  return (
    <>
      <div className="fixed w-full top-0 flex flex-row justify-between min-h-screen min-w-full bg-white text-back">
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
