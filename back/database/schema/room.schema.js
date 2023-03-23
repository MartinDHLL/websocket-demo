const { Schema } = require("mongoose");

const roomSchema = new Schema({
  key: { type: Schema.Types.Number, unique: true },
  name: { type: Schema.Types.String, unique: true },
  messages: [{ type: Schema.Types.ObjectId, ref: "Room" }],
});

module.exports = roomSchema;
