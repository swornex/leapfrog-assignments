import { items } from "./images.js";

export default class RedDiamond {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.image = items;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      64,
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
