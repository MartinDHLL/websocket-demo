import { useEffect, useState } from "react";

export default function OptionsSidebar({ username }) {
  const [barClass, setBarClass] = useState("");
  const [isBarOpen, setBarState] = useState(false);

  useEffect(() => {
    setBarClass(
      `flex flex-col justify-start items-center p-5 bg-black min-h-full text-white rounded-tl-[20px] rounded-bl-[20px] ${
        isBarOpen ? "w-[20%]" : "w-[0] hover:bg-yellow-100 hover:cursor-pointer"
      }`
    );
  }, [isBarOpen]);

  return (
    <div onClick={() => setBarState(true)} className={barClass}>
      {!isBarOpen ? (
        <div className="flex flex-col justify-center h-full">
          <hr className="border-2 h-[30%] rounded-full" />
        </div>
      ) : null}
      {isBarOpen ? <p>Utilisateur : {username}</p> : null}
    </div>
  );
}
