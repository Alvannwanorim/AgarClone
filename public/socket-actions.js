const socket = io.connect("http://localhost:9000");
const init = async () => {
  const initOrbs = await socket.emitWithAck("init", { name: player.name });

  setInterval(() => {
    socket.emit("tock", {
      xVictor: player.xVictor ? player.xVictor : 0.1,
      yVictor: player.yVictor ? player.yVictor : 0.1,
    });
  }, 33);
  orbs = initOrbs;
  // console.log(initOrbs);
  draw();
};

socket.on("tick", (playersData) => {
  // console.log("Tick event data", players);
  players = playersData;
});
