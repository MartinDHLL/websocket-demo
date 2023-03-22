const { default: helmet } = require("helmet");
const db = require("./database/database");
const cors = require("cors");

const app = require("express")();

app.use(helmet());

app.use(cors({}));

app.use(require("express").json());

const server = require("http").createServer(app);

const socketMain = new (require("socket.io").Server)(server, {
  cors: { origin: "http://localhost:3000" },
});

socketMain.on("connection", (socket) => {
  console.log(
    `A new user has been connected : ${socket.handshake.query.username}`
  );

  socket.on("disconnect", (reason) => {
    console.log(
      `User ${socket.handshake.query.username} has been disconnected \n[${reason}]`
    );
  });

  socket.on("request join room", (room) => {
    // add a verification with database to check if room exist
    let canBeLeft = false;
    socket.rooms.forEach((room) =>
      canBeLeft ? socket.leave(room) : (canBeLeft = false)
    );
    socket.emit("join room");
    console.log("rooms cleaned");
  });

  socket.on("join room", (room) => {
    socket.join(room);
    console.log("room joined");
  });

  socket.on("message", (room, message) => {
    console.log(`from room : ${room}\nmessage : ${message.content}`);
    socket.to(room).emit("message", message);
  });
});

require("./routes/routes")(app);

server.listen(3001);
