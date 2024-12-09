const app = require("../server").app;
const io = require("../server").io;

const { Socket } = require("socket.io");
const Orb = require("./classes/Orb");

//  make an orb array that we will host on 500/500 screen: NONE PLAYER orbs;
// every time one is absorbed, the server will make a new one

const orbs = [];

initGame();
// console.log(orbs);
io.on("connect", (socket) => {
  socket.emit("init", {
    orbs,
  });
});
function initGame() {
  for (let i = 0; i < 500; i++) {
    orbs.push(new Orb());
  }
}
