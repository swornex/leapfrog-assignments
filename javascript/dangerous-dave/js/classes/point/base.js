import { items } from "../../images.js";

export default class _BasePoint {
  constructor(x, y, width, height, score, srcX, srcY) {
    if (new.target === _BasePoint) {
      throw new TypeError("Cannot construct _BasePoint instances directly");
    }

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.score = score;
    this.srcX = srcX;
    this.srcY = srcY;

    this.image = items;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.srcX,
      this.srcY,
      64,
      64,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  checkCollision = (dave) => {
    return (
      dave.x + dave.width + dave.velocity.x > this.x &&
      this.x + this.width > dave.x + dave.velocity.x &&
      dave.y + dave.height + dave.velocity.y > this.y &&
      this.y + this.height > dave.y + dave.velocity.y
    );
  };
}
