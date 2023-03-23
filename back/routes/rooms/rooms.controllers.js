const Room = require("../../database/database").models.Room;

exports.getAll = async (req, res) => {
  const rooms = await Room.find();
  res.status(200).send(rooms);
};
