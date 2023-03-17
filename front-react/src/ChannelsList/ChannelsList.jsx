import AddButton from "./buttons/AddButton";
import Icon from "./buttons/Icon";
import Channel from "./Channel/Channel";

export default function ChannelsList() {
  return (
    <div className="">
      <div className="flex bg-black w-10">
        <Icon icon="home" />
        <Icon icon="user" />
        <Icon icon="group" />
        <AddButton />
      </div>
      <div className="flex flex-col justify-start items-start gap-y-4 p-5 bg-stone-800 min-h-full min-w-[20%]">
        <Channel name="Secret Projet" /*color=0*/ />
        <Channel name="LXP" /*color=1*/ />
        <Channel name="Perfect Future" />
      </div>
    </div>
  );
}
