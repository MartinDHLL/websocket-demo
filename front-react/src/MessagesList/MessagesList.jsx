import socket from "../socketio";
import Input from "./Input/Input";
import Message from "./Message/Message";

export default function MessagesList({ messages }) {
  return (
    <div className="max-md:max-h-[38em] sm:max-h-[45em] xl:max-h-[45em] lg:max-xl:max-h-[90em]">
      <div className="py-2 h-full flex flex-col items-start gap-y-10 overflow-y-scroll">
        {messages.length > 0 ? (
          messages.map((message) => {
            return (
              <Message
                sender={message.sender}
                content={message.content}
                date={message.date}
                isSender={socket.io.opts.query.username === message.author}
              />
            );
          })
        ) : (
          <p className="self-center justify-self-center text-xl">
            Aucun messages
          </p>
        )}
      </div>
      <Input />
    </div>
  );
}
