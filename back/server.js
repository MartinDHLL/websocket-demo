const server = require("http").createServer();

const socket = new (require("socket.io").Server)(server, {
  cors: { origin: "http://localhost:3000" },
});

socket.on("connection", (socket) => {
  socket.on("usernameOnConnection", (username) => {
    console.log(`A new user has been connect as ${username}`);
    socket.emit(
      "usernameOnConnection",
      `connection approuved by server with username ${username}`
    );
  });
});

socket.listen(3001);
