import AddButton from "./buttons/AddButton";
import Icon from "./buttons/Icon";
import Channel from "./Channel/Channel";

export default function ChannelsList({ room, changeRoom }) {
  return (
    <div className="w-fit flex flex-col justify-start items-start gap-y-4 bg-stone-800 min-h-full overflow-hidden text-center">
      <div className="w-full flex justify-between ">
        <Icon icon="home" />
        <Icon icon="user" />
        <Icon icon="group" />
        <AddButton />
      </div>
      <div className="flex flex-col justify-start h-full gap-y-5 w-full text-left p-3">
        <Channel
          name="Secret Project"
          room={room}
          changeRoom={changeRoom} /*color=0*/
        />
        <Channel name="LXP" room={room} changeRoom={changeRoom} /*color=1*/ />
        <Channel name="Perfect Future" room={room} changeRoom={changeRoom} />
      </div>
    </div>
  );
}
