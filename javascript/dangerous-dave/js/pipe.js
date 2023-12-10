import { doors } from "./images.js";

export default class Pipe {
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
