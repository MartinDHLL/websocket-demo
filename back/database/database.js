require("dotenv").config();
const { default: mongoose } = require("mongoose");

const db = {
  db: mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}/?retryWrites=true&w=majority`
    )
    .catch((e) => console.error(e))
    .then(console.log("connection to db sucessfull")),
  models: require("./models")(mongoose),
};

module.exports = db;
