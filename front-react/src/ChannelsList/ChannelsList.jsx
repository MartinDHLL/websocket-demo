import { useEffect, useState } from "react";
import { getRooms } from "../services/room.service";
import Icon from "./buttons/Icon";
import Channel from "./Channel/Channel";

export default function ChannelsList({ room, changeRoom }) {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    function getChannels() {
      getRooms().then((channels) => {
        setChannels(channels);
      });
    }
    getChannels();
  }, []);

  return (
    <div className="w-fit flex flex-col justify-start items-start gap-y-4 bg-stone-800 min-h-full overflow-hidden text-center">
      <div className="w-full flex justify-between ">
        <Icon icon="home" path="" />
        <Icon icon="chat" path="" active={true} />
        <Icon icon="kanban" path="kanban" />
      </div>
      <div className="flex flex-col justify-start h-full gap-y-5 w-full text-left p-3">
        {channels.map((channel) => (
          <Channel
            key={channel.key}
            name={channel.name}
            room={room}
            changeRoom={changeRoom}
          />
        ))}
      </div>
    </div>
  );
}
