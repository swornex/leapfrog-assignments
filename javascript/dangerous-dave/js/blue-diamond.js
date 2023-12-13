import { items } from "./images.js";

export default class BlueDiamond {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.score = 100;
    this.image = items;
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

  checkCollision = (dave) => {
    return (
      dave.x + dave.width + dave.velocity.x > this.x &&
      this.x + this.width > dave.x + dave.velocity.x &&
      dave.y + dave.height + dave.velocity.y > this.y &&
      this.y + this.height > dave.y + dave.velocity.y
    );
  };
}
