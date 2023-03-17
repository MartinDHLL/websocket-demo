const Input = () => (
  <div className="flex justify-between gap-5 bg-blue-900 p-2 pr-5 pl-5 rounded-xl text-white">
    <img className="h-10" src="message-solid.svg" alt="message icon" />
    <input type={"text"} className="text-black p-2"></input>
    <button>Envoyer</button>
  </div>
);

export default Input;
