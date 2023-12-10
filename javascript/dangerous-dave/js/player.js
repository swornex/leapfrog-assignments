class Player {
  constructor(positionX, positionY, width, height) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.velocity = {
      x: 0,
      y: 1
    };

    this.isGrounded = false;
  }
  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
  }

  move() {
    this.positionY += this.velocity.y;
    if (this.height + this.positionY + this.velocity.y < canvas.height) {
      this.velocity.y += 0.6;
    } else {
      this.velocity.y = 0;
      this.isGrounded = true;
    }
  }

  jump() {
    if (this.isGrounded) {
      this.velocity.y = -15;
      this.isGrounded = false;
    }
  }
}

export default Player;
