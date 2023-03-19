import socket from "../socketio";
import Input from "./Input/Input";
import Message from "./Message/Message";

export default function MessagesList({ messages, room, setMessages }) {
  const sendMessage = (message) => {
    console.log(message);
    socket.send(room, {
      sender: socket.io.opts.query.username,
      content: message,
      date: Date.now(),
    });
    setMessages(messages.push(message));
  };
  return (
    <div className="w-[70%] sm:max-h-[10em] max-md:max-h-[10em] md:max-h-[90em] xl:max-h-[90em]">
      <div className="py-2 h-full flex flex-col items-start gap-y-10 overflow-y-scroll">
        {messages.length > 0 ? (
          messages.map((message) => {
            return (
              <Message
                key={message.id}
                sender={message.sender}
                content={message.content}
                date={message.date}
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
