const Message = require("../../database/database").models.Message;
const Room = require("../../database/database").models.Room;

exports.getAllFromRoom = async (req, res) => {
  const room = req.params.room;
  console.log(room);
  const messages = await Message.find({
    room: await Room.findOne({ name: room }),
  });
  if (messages != null) {
    console.log(messages);
    return res.status(200).send(messages);
  } else {
    return res.status(404).send("not found");
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
  if (message?.room != null) {
    message.save();
    return res.status(201).send("la ressource a bien ete cree");
  } else {
    return res.status(400).send("erreur");
  }
};
