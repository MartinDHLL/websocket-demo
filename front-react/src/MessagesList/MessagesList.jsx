import {
  generateDate,
  generateHours,
  transformDate,
} from "../services/date.service";
import socket from "../socketio";
import Input from "./Input/Input";
import Message from "./Message/Message";

export default function MessagesList({ messages, room, setMessages }) {
  const sendMessage = (content) => {
    const message = {
      key: (messages[messages.length - 1]?.key ?? 0) + 1,
      sender: socket.io.opts.query.username,
      content: content,
      date: generateDate(),
      hours: generateHours(),
    };
    socket.send(room, message);
    setMessages((messages) => [...messages, message]);
    console.log(messages);
  };
  return (
    <div className=" w-[70%]">
      <div className=" py-2 h-[90%] flex flex-col items-start gap-y-10 overflow-y-scroll">
        {messages.length > 0 ? (
          messages.map((message) => {
            return (
              <Message
                key={message.key}
                sender={message.sender}
                content={message.content}
                date={transformDate(message.date)}
                hours={message.hours}
                isSender={socket.io.opts.query.username === message.sender}
              />
            );
          })
        ) : (
          <p className="self-center justify-self-center text-xl">
            Aucun messages
          </p>
        )}
      </div>
      <Input sendMessage={sendMessage} />
    </div>
  );
}
