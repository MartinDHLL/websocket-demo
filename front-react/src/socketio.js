import { io } from "socket.io-client";

const socket = io("http://localhost:3001", {
  autoConnect: false,
  query: { username: "test" },
});

export default socket;
