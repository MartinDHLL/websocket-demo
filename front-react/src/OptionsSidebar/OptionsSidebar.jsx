export default function OptionsSidebar({ username }) {
  return (
    <div className="flex flex-col justify-start items-end p-5 bg-black min-h-full w-[20%] text-white">
      <p>Utilisateur : {username}</p>
    </div>
  );
}
