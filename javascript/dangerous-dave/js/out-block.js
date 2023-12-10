import { walls } from "./images.js";

export default class OutBlock {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.image = walls;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      192,
      0,
      64,
      64,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
