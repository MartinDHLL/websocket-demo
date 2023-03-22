module.exports = (mongoose) => {
  return {
    Message: mongoose.model("Message", require("./schema/message.schema")),
    Room: mongoose.model("Room", require("./schema/room.schema")),
  };
};
