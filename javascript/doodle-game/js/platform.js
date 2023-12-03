class Platform {
  constructor(x, y, width, height, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.ctx = ctx;
  }

  draw() {
    const img = new Image();
    img.src = "assets/images/platform.png";
    this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }
}

export default Platform;
