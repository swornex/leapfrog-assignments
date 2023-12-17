import { doors } from "../../images.js";

export default class _BasePipe {
  constructor(x, y, width, height, srcX, srcY) {
    if (new.target === _BasePipe) {
      throw new TypeError("Cannot construct _BasePipe instances directly");
    }

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.srcX = srcX;
    this.srcY = srcY;

    this.image = doors;
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
}
