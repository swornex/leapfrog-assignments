export default class _BaseBullet {
  constructor(x, y, img, srcX, srcY, width, height) {
    this.x = x;
    this.y = y;
    this.image = img;
    this.srcX = srcX;
    this.srcY = srcY;
    this.width = width;
    this.height = height;

    this.speed = 3;
    this.markedForDeletion = false;
  }

  update() {
    this.x += this.speed;
    if (this.x > 800) {
      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.srcX,
      this.srcY,
      60,
      16,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
