import Dave from "./dave.js";
import { fire } from "./images.js";

export default class Fire {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.image = fire;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      128,
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
