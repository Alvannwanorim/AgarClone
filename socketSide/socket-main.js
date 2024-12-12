const app = require("../server").app;
const io = require("../server").io;

const { Socket } = require("socket.io");
const Orb = require("./classes/Orb");
const Player = require("./classes/Player");
const PlayerData = require("./classes/PlayerData");
const PlayerConfig = require("./classes/PlayerConfig");

//  make an orb array that we will host on 500/500 screen: NONE PLAYER orbs;
// every time one is absorbed, the server will make a new one

const orbs = [];
const settings = {
  defaultNumberOfOrb: 500, // number of orbs on the screen
  defaultSpeed: 6, // player speed
  defaultSize: 6, // player size
  defaultZoom: 1.5, // as the player gets bigger, zoom need to go out
  worldWidth: 500,
  worldHeight: 500,
  defaultGenericOrbSize: 5, // smaller than player orbs
};
const players = [];
initGame();

// tick-tock; issue an event to every connected socket, that is playing the game, 30 times per second

setInterval(() => {
  io.to("game");
}, 33); // 1000/30 => 33.33 . there are 33, 30s in 1000 milliseconds, 1/30th of a second , or 1 of 30 fps
// console.log(orbs);
io.on("connect", (socket) => {
  socket.on("init", (playerObj, callback) => {
    // join game room
    socket.join("game");
    // a player has connected
    // event that runs on join that does init game stuff
    // make a player config object- the data specific to this player that only the player need to know
    // make a playerData object - the data specific to this player that everyone needs to know
    // a master player object to house both

    const playerName = playerObj.name;
    const playerConfig = new PlayerConfig(settings);
    const playerData = new PlayerData(playerName, settings);
    const player = new Player(socket.id, playerConfig, playerData);
    players.push(player);
    callback(orbs);
  });
});
function initGame() {
  for (let i = 0; i < settings.defaultNumberOfOrb; i++) {
    orbs.push(new Orb(settings));
  }
}
