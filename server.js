const express = require("express");
const { Server } = require("socket.io");

const app = express();
app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(9000, () => {
  console.log("Server is running on http://localhost:9000");
});

const io = new Server(expressServer, {
  cors: {
    origin: ["http://127.0.0.1:9000", "http://localhost:9000"],
    methods: ["GET", "POST"], // Allowed methods
  },
});

io.on("connection", (socket) => {
  console.log(`${socket.id} has connected`);
});

module.exports = {
  app,
  io,
};
