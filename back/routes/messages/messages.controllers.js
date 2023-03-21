exports.getAllFromRoom = (req, res) => {
  const room = req.params.room;
  const messages = [
    { sender: "test", content: "test", date: "01/01/2022", hours: "10 H 21" },
  ];
  return res.send(messages);
};

exports.make = (req, res) => {
  const { sender, content, date, hours } = req.body;
};
