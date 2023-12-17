export default class _BaseBlock {
  constructor(x, y, width, height, srcX, srcY, image) {
    if (new.target === _BaseBlock) {
      throw new TypeError("Cannot construct _BaseBlock instances directly");
    }

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.srcX = srcX;
    this.srcY = srcY;

    this.image = image;
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
