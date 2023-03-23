const { Schema } = require("mongoose");

const roomSchema = new Schema({
  name: { type: Schema.Types.String, unique: true },
  messages: [{ type: Schema.Types.ObjectId, ref: "Room" }],
});

module.exports = roomSchema;
