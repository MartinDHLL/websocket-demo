const { Schema } = require("mongoose");

const roomSchema = new Schema({
  name: { type: Schema.Types.String },
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});

module.exports = roomSchema;
