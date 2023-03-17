const server = require("http").createServer();

const socket = new (require("socket.io").Server)(server, {
  cors: { origin: "http://localhost:3000" },
});

socket.on("connection", (socket) => {
  console.log(
    `A new user has been connected : ${socket.handshake.query.username}`
  );
});

socket.listen(3001);
