const routes = (app) => {
  app.use("/messages", require("./messages/messages.routes"));
  app.use("/rooms", require("./rooms/rooms.routes"));
};

module.exports = routes;
