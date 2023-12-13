import { doors } from "./images.js";

export default class Door {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.image = doors;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      0,
      0,
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
      dave.x + dave.width >= this.x &&
      this.x + this.width >= dave.x &&
      dave.y + dave.height >= this.y &&
      this.y + this.height >= dave.y
    );
  }
}
