const routes = (app) => {
  app.use("/messages", require("./messages/messages.route"));
};

module.exports = routes;
