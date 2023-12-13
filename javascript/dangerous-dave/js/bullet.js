class Bullet {
  constructor(x, y, game) {
    this.x = x;
    this.y = y;
    this.speed = 3;
    this.game = game;

    this.width = 30;
    this.height = 10;
    this.markedForDeletion = false;
    this.image = new Image();
    this.image.src = "assets/images/bullets.png";
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
      32,
      0,
      60,
      16,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

export default Bullet;
