import Player from "./player.js";
import { keys } from "./input.js";
import LEVEL1_MAP from "./levels/levelOne.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const player = new Player(0, 0, 50, 100);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  LEVEL1_MAP.forEach((column, y) => {
    column.forEach((row, x) => {
      const imageProps = getImageProps(row);

      ctx.drawImage(...imageProps, x * 50, y * 50, 50, 50);
    });
  });

  player.draw(ctx);
  player.move();

  player.positionX += player.velocity.x;
  player.velocity.x = 0;

  if (keys.ArrowLeft) {
    player.velocity.x = -5;
  }
  if (keys.ArrowRight) {
    player.velocity.x = 5;
  }
  if (keys.ArrowUp) {
    player.jump();
  }

  requestAnimationFrame(animate);
}

function getImagePath(name) {
  return `../assets/images/${name}.png`;
}

function getImageProps(index) {
  const images = {
    0: {
      src: getImagePath("bigBlockSprite"),
      imageX: 0,
      imageY: 0,
      imageWidth: 64,
      imageHeight: 64
    },
    1: {
      src: getImagePath("bigBlockSprite"),
      imageX: 64,
      imageY: 0,
      imageWidth: 64,
      imageHeight: 64
    },
    2: {
      src: getImagePath("bigBlockSprite"),
      imageX: 192,
      imageY: 0,
      imageWidth: 64,
      imageHeight: 64
    },
    3: {
      src: getImagePath("bigBlockSprite"),
      imageX: 0,
      imageY: 0,
      imageWidth: 64,
      imageHeight: 64
    },
    4: {
      src: getImagePath("doors"),
      imageX: 64,
      imageY: 0,
      imageWidth: 64,
      imageHeight: 64
    },
    5: {
      src: getImagePath("doors"),
      imageX: 0,
      imageY: 0,
      imageWidth: 64,
      imageHeight: 64
    },
    6: {
      src: getImagePath("itemsSprite"),
      imageX: 0,
      imageY: 0,
      imageWidth: 64,
      imageHeight: 64
    },
    7: {
      src: getImagePath("itemsSprite"),
      imageX: 64,
      imageY: 0,
      imageWidth: 64,
      imageHeight: 64
    },
    8: {
      src: getImagePath("trophySprite"),
      imageX: 192,
      imageY: 0,
      imageWidth: 64,
      imageHeight: 64
    }
  };

  const imageProp = images[index] ?? images[0];

  const img = new Image();
  img.src = imageProp.src;

  return [
    img,
    imageProp.imageX,
    imageProp.imageY,
    imageProp.imageWidth,
    imageProp.imageHeight
  ];
}

animate();
