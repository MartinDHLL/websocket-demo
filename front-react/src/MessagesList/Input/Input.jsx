const Input = () => (
  <div className="w-full flex justify-between gap-5 bg-slate-200 p-2 pr-5 pl-5 rounded-xl text-black shadow-lg">
    <img className="h-10" src="message-solid.svg" alt="message icon" />
    <input type={"text"} className="p-2 w-full"></input>
    <button>Envoyer</button>
  </div>
);

export default Input;
