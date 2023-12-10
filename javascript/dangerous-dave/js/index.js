import Game from "./game.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const game = new Game(ctx);

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  game.draw();

  requestAnimationFrame(animate);
};

animate();
