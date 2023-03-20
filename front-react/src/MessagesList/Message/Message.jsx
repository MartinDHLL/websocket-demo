const Message = ({ sender, content, date, hours, isSender }) => (
  <div
    className={`flex flex-col gap-y-2 max-w-fit  p-2 + ${
      isSender
        ? "bg-green-100 self-end rounded-tl-lg rounded-bl-lg"
        : "bg-blue-100 self-start rounded-tr-lg rounded-br-lg"
    }`}
  >
    <div className="flex justify-between gap-x-10">
      <p>
        De : <span className="text-gray-800">{sender}</span>
      </p>
      <p>
        {date} à {hours}
      </p>
    </div>
    <div>
      <p>{content}</p>
    </div>
  </div>
);

export default Message;
