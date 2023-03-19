const { disconnect } = require("process");

const server = require("http").createServer();

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
});

socketMain.listen(3001);
