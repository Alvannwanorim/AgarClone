const init = () => {
  console.log("starting game...");
  draw();
};

let randomX = Math.floor(500 * Math.random() + 10);
let randomY = Math.floor(500 * Math.random() + 10);
context.beginPath();
context.fillStyle = "rgb(255,0,0)";
console.log(randomX, randomY);
context.arc(randomX, randomY, 10, 0, Math.PI * 2);

context.fill();
context.lineWidth = 3;
context.strokeStyle = "rgb(0,255,0)";
context.stroke();

// ===================
// =====DRAW==========
// ===================

const draw = () => {
  //
};

canvas.addEventListener("mousemove", (e) => {
  console.log(e);
});
