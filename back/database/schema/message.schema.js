const { Schema } = require("mongoose");

const messageSchema = new Schema({
  sender: { type: Schema.Types.String },
  content: { type: Schema.Types.String },
  date: { type: Schema.Types.String },
  hours: { type: Schema.Types.String },
  room: { type: Schema.Types.ObjectId, ref: "Message" },
});

module.exports = messageSchema;
