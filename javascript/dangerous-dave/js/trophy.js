import { trophies } from "./images.js";

export default class Trophy {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.image = trophies;
    this.score = 2000;

    this.imageCoordinates = [
      [0, 0],
      [64, 0],
      [128, 0],
      [192, 0],
      [256, 0]
    ];

    this.currentFrame = 0;
    this.frameCount = 0;

    this.animationSpeed = 10;
  }

  animate() {
    this.frameCount++;

    if (this.frameCount % this.animationSpeed === 0) {
      this.currentFrame = ++this.currentFrame % this.imageCoordinates.length;
    }
  }

  draw(ctx) {
    this.animate();

    const [srcX, srcY] = this.imageCoordinates[this.currentFrame];

    ctx.drawImage(
      this.image,
      srcX,
      srcY,
      64,
      64,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  checkCollision(dave) {
    return (
      dave.x + dave.width + dave.velocity.x > this.x &&
      this.x + this.width > dave.x + dave.velocity.x &&
      dave.y + dave.height + dave.velocity.y > this.y &&
      this.y + this.height > dave.y + dave.velocity.y
    );
  }
}
