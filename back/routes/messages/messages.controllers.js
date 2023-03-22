const Message = require("../../database/database").models.Message;
const Room = require("../../database/database").models.Room;

exports.getAllFromRoom = async (req, res) => {
  const room = req.params.room;
  console.log(room);
  const messages = await Message.find({
    // "room.name": room,
  }).populate("room");
  if (messages) {
    console.log(messages);
    return res.send(messages);
  } else {
    return res.send("erreur");
  }
};
exports.make = async (req, res) => {
  const { sender, content, date, hours, room } = req.body;
  const message = new Message({
    sender,
    content,
    date,
    hours,
    room: await Room.findOne({ name: room }),
  });
  messageSave = await message.save();
  if (messageSave) {
    return res.status(201).send("la ressource a bien ete cree");
  } else {
    return res.send("erreur");
  }
};
