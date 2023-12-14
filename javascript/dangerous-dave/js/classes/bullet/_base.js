export default class _BaseBullet {
  constructor(x, y, img, srcX, srcY, width, height, speed) {
    this.x = x;
    this.y = y;
    this.image = img;
    this.srcX = srcX;
    this.srcY = srcY;
    this.width = width;
    this.height = height;

    this.speed = speed;
    this.markedForDeletion = false;
  }

  update() {
    const maxRange = this.speed < 0 ? 200 : 800;
    this.x += this.speed;

    const condition = this.speed < 0 ? this.x < maxRange : this.x > maxRange;
    if (condition) {
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
