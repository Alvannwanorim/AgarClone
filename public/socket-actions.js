const socket = io.connect("http://localhost:9000");

const init = async () => {
  const initOrbs = await socket.emitWithAck("init", { name: player.name });
  const orbs = initOrbs;
  console.log(initOrbs);
  draw();
};

socket.on("init", (initData) => {
  //   console.log(initData);
  orbs = initData.orbs;
});
