import Dave from "./dave.js";
import { pinkBlock } from "./images.js";

export default class PinkBlock {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.image = pinkBlock;
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
}
