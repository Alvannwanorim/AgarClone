console.log("sanity check!!");
let wHeight = window.innerHeight;
let wWidth = window.innerWidth;

const canvas = document.querySelector("#the-canvas");
const context = canvas.getContext("2d");
canvas.height = wHeight;
canvas.width = wWidth;

const player = {};
const loginModal = new bootstrap.Modal(document.querySelector("#loginModal"));
const spawnMOdal = new bootstrap.Modal(document.querySelector("#spawnModal"));
window.addEventListener("load", () => {
  loginModal.show();
});

document.querySelector(".name-form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submitted!!!");
  player.name = document.querySelector("#name-input").value;
  document.querySelector(".player-name").innerHTML = player.name;
  loginModal.hide();
  spawnMOdal.show();
  console.log(player);
});

document.querySelector(".start-game").addEventListener("click", (e) => {
  spawnMOdal.hide();
  Array.from(document.querySelectorAll(".hiddenOnStart")).forEach((el) => {
    el.removeAttribute("hidden");
  });
  init();
});
