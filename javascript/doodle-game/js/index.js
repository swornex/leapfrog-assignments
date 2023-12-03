import Player from "./player.js";
import Platform from "./platform.js";
import MovingPlatform from "./moving-platform.js";
import {
  GAME_HEIGHT,
  GAME_WIDTH,
  MAXIMUM_JUMP_HEIGHT,
  PLATFORM_GAP,
  PLATFORM_HEIGHT,
  PLATFORM_WIDTH,
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
  STARTER_PLATFORM_Y,
  START_JUMP_HEIGHT,
  STATES
} from "./constants.js";
import { leftPressed, rightPressed } from "./input.js";
import { getStore, setStore } from "./util.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let currentState = STATES[0];

let score = 0;

let platforms = [];
let lastlyJumpedPlatform = null;

function generatePlatforms(totalPlatformsToCreate = 1) {
  const length = platforms.length + totalPlatformsToCreate;

  for (let i = platforms.length; i < length; i++) {
    const randomValue = Math.random();
    const platformY = (platforms[i - 1]?.y || GAME_HEIGHT) - PLATFORM_GAP;
    const platformX = Math.random() * (GAME_WIDTH - PLATFORM_WIDTH);

    let platform;

    if (randomValue <= 0.2) {
      const speedX = Math.random() * 2 + 1;
      platform = new MovingPlatform(
        platformX,
        platformY,
        PLATFORM_WIDTH,
        PLATFORM_HEIGHT,
        ctx,
        speedX
      );
    } else {
      platform = new Platform(
        platformX,
        platformY,
        PLATFORM_WIDTH,
        PLATFORM_HEIGHT,
        ctx
      );
    }

    platforms.push(platform);
  }
}

function updatePlatforms() {
  for (const platform of platforms) {
    platform.updatePosition?.(canvas);
    platform.draw();

    if (player.y < GAME_HEIGHT / 2) {
      platform.y += 5;
      score += 2;
    }

    if (platform.y + PLATFORM_HEIGHT > GAME_HEIGHT) {
      platforms.shift();
      generatePlatforms();
    }
  }
}

function isOnPlatform(person, platform) {
  return (
    person.x < platform.x + platform.width &&
    person.x + person.width > platform.x &&
    person.y + person.height === platform.y
  );
}

function restart() {
  score = 0;
  platforms = [];
  generatePlatforms(5);

  const playerX = platforms[0].x + (PLATFORM_WIDTH - PLAYER_WIDTH) / 2;
  const playerY = GAME_HEIGHT - PLATFORM_GAP - PLAYER_HEIGHT - 50;
  player.setPosition(playerX, playerY);
}

function handleCanvasClick(event) {
  const mouseX = event.clientX - canvas.getBoundingClientRect().left;
  const mouseY = event.clientY - canvas.getBoundingClientRect().top;

  if (isInsideEllipse(mouseX, mouseY, 100, 200, 70, 25)) {
    currentState = STATES[1];
    restart();
  } else if (isInsideEllipse(mouseX, mouseY, 200, 400, 70, 25)) {
    currentState = STATES[0];
    restart();
  }
}

function isInsideEllipse(x, y, centerX, centerY, radiusX, radiusY) {
  // Check if (x, y) is inside the ellipse
  const deltaX = x - centerX;
  const deltaY = y - centerY;
  return (
    (deltaX * deltaX) / (radiusX * radiusX) +
      (deltaY * deltaY) / (radiusY * radiusY) <=
    1
  );
}

canvas.addEventListener("click", handleCanvasClick);

const startDoodler = new Player(
  (GAME_WIDTH - PLAYER_WIDTH) / 2,
  300,
  PLAYER_WIDTH,
  PLAYER_HEIGHT,
  ctx
);
const startPlatform = new Platform(
  (GAME_WIDTH - PLATFORM_WIDTH) / 2,
  STARTER_PLATFORM_Y,
  PLATFORM_WIDTH,
  PLATFORM_HEIGHT,
  ctx
);

function start() {
  ctx.font = "bold 40px Arial";
  ctx.fillStyle = "#ad0000";
  ctx.fillText("doodle jump", 40, 150);

  drawEllipse(100, 200, 70, 25, "#f5e8d4", "#000");
  ctx.font = "20px Arial";
  ctx.fillStyle = "#000000";
  ctx.fillText("play", 80, 210);

  if (
    !startDoodler.grounded &&
    startDoodler.y + startDoodler.height < GAME_HEIGHT
  ) {
    startDoodler.fall();
  }

  if (isOnPlatform(startDoodler, startPlatform)) {
    startDoodler.grounded = true;
    lastlyJumpedPlatform = startPlatform;
  }

  if (startDoodler.grounded) {
    startDoodler.jump();
  }

  if (
    lastlyJumpedPlatform &&
    startDoodler.y + startDoodler.height <
      lastlyJumpedPlatform.y - START_JUMP_HEIGHT
  ) {
    startDoodler.grounded = false;
  }

  startDoodler.draw();
  startPlatform.draw();
}

document.addEventListener("DOMContentLoaded", start);

document.addEventListener("DOMContentLoaded", end);

function play() {
  if (rightPressed) {
    player.moveRight(canvas);
  } else if (leftPressed) {
    player.moveLeft(canvas);
  }

  if (!player.grounded && player.y + player.height < GAME_HEIGHT) {
    player.fall();
  }

  if (player.grounded) {
    player.jump();
  }

  for (const platform of platforms) {
    if (isOnPlatform(player, platform)) {
      player.grounded = true;
      lastlyJumpedPlatform = platform;
      break;
    }
  }

  if (
    lastlyJumpedPlatform &&
    player.y + player.height < lastlyJumpedPlatform.y - MAXIMUM_JUMP_HEIGHT
  ) {
    player.grounded = false;
  }

  if (player.y + player.height >= GAME_HEIGHT) {
    player.die();
    const highScore = getStore("HIGHSCORE") ?? 0;
    if (highScore < score) {
      setStore("HIGHSCORE", score);
    }
    currentState = STATES[2];
  }

  ctx.font = "15px Arial";
  ctx.fillText(`Score: ${score}`, 5, 20);

  ctx.font = "15px Arial";
  ctx.fillText(`High Score: ${getStore("HIGHSCORE") ?? 0}`, 5, 40);

  player.draw(ctx);
  updatePlatforms();
}

function end() {
  ctx.font = "bold 40px Arial";
  ctx.fillStyle = "#ad0000";
  ctx.fillText("game over !", 50, 150);

  ctx.font = "20px Arial";
  ctx.fillStyle = "#000";
  ctx.fillText(`Your Score: ${score}`, 40, 280);

  ctx.font = "20px Arial";
  ctx.fillStyle = "#000";
  ctx.fillText(`Your High Score: ${getStore("HIGHSCORE") ?? 0}`, 40, 330);

  drawEllipse(100, 200, 70, 25, "#f5e8d4", "#000");
  ctx.font = "20px Arial";
  ctx.fillStyle = "#000000";
  ctx.fillText("restart", 70, 210);

  drawEllipse(200, 400, 70, 25, "#f5e8d4", "#000");
  ctx.font = "20px Arial";
  ctx.fillStyle = "#000000";
  ctx.fillText("menu", 175, 405);
}

function drawEllipse(
  centerX,
  centerY,
  radiusX,
  radiusY,
  fillStyle,
  strokeStyle
) {
  ctx.beginPath();
  ctx.fillStyle = fillStyle;
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = 2;
  ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

const player = new Player(
  undefined,
  undefined,
  PLAYER_WIDTH,
  PLAYER_HEIGHT,
  ctx
);

function animate() {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  switch (currentState) {
    case STATES[0]:
      start();
      break;
    case STATES[1]:
      play();
      break;
    case STATES[2]:
      end();
      break;
    default:
      break;
  }

  requestAnimationFrame(animate);
}

animate();
