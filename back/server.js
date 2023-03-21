const { default: helmet } = require("helmet");
const db = require("./database/database");

const app = require("express")();

app.use(helmet());

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
  socket.on("join room", (room) => {
    let canBeLeft = false;
    socket.rooms.forEach((room) =>
      canBeLeft ? socket.leave(room) : (canBeLeft = false)
    );
    socket.join(room);
  });
  socket.on("message", (room, message) => {
    console.log(`from room : ${room}\nmessage : ${message.content}`);
    socket.to(room).emit("message", message);
  });
});

require("./routes/routes")(app);

server.listen(3001);
