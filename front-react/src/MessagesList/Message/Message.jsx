const Message = ({ author, content, date }) => (
  <div className="flex flex-col gap-y-2 max-w-fit bg-stone-200 p-3 rounded-tr-lg rounded-br-lg self">
    <div className="flex justify-between gap-x-10">
      <p>
        De : <span className="text-gray-800">{author}</span>
      </p>
      <p>{date}</p>
    </div>
    <div>
      <p>{content}</p>
    </div>
  </div>
);

export default Message;
