import { GRAVITY, SPEED } from "./constants.js";

class Player {
  constructor(x, y, width, height, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;

    this.grounded = false;
    this.dead = false;

    this.rightImg = "assets/images/right-faced.png";
    this.leftImg = "assets/images/left-faced.png";
    this.img = new Image();
    this.img.src = this.leftImg;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  moveLeft(canvas) {
    // Check if moving left will keep the player within the canvas boundaries
    if (this.x > 0) {
      this.img.src = this.leftImg;
      this.x -= SPEED;
    }
  }

  moveRight(canvas) {
    // Check if moving right will keep the player within the canvas boundaries
    if (this.x + this.width < canvas.width) {
      this.img.src = this.rightImg;
      this.x += SPEED;
    }
  }

  jump() {
    // Check if the player is on the ground
    this.y -= SPEED;
  }

  fall() {
    // Check if the player is on the ground
    this.y += GRAVITY;
  }

  die() {
    this.dead = true;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
}

export default Player;
