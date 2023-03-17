const Channel = ({ name }) => (
  <div className="break-all overflow-hidden bg-white max-h-[5%] rounded-[10px] hover:cursor-pointer hover:bg-yellow-200 hover:text-orange-700">
    <div className="pr-2 pl-2 text-[12pt] ">
      <p>{name}</p>
    </div>
  </div>
);

export default Channel;
