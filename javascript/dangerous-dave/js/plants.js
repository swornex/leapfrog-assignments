import Dave from "./dave.js";
import { plants } from "./images.js";

export default class Plant {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.image = plants;

    this.imageCoordinates = [
      [0, 0],
      [64, 0],
      [128, 0],
      [192, 0]
    ];

    this.currentFrame = 0;
    this.frameCount = 0;

    this.animationSpeed = 20;
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
}
