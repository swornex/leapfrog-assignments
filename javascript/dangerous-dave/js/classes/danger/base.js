export default class _BaseDanger {
  constructor(x, y, width, height, image, imageCoordinates) {
    if (new.target === _BaseDanger) {
      throw new TypeError("Cannot construct _BaseDanger instances directly");
    }

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.image = image;

    this.imageCoordinates = imageCoordinates;

    this.currentFrame = 0;
    this.frameCount = 0;

    this.animationSpeed = 20;
  }

  animate() {
    this.frameCount++;

    if (this.frameCount % this.animationSpeed === 0) {
      this.currentFrame = ++this.currentFrame % this.imageCoordinates.length;
    }
  }

  draw(ctx) {
    this.animate();

    const [srcX, srcY] = this.imageCoordinates[this.currentFrame];

    ctx.drawImage(
      this.image,
      srcX,
      srcY,
      64,
      64,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
