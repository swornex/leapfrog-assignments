import Dave from "./dave.js";
import { walls } from "./images.js";

export default class RedBlock {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.image = walls;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      64,
      0,
      64,
      64,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  /**
   * Checks for collision between the red block and Dave.
   * If a collision occurs, sets Dave's velocity to zero.
   *
   * @param {Dave} dave - The object representing Dave.
   */
  checkCollision = (dave) => {
    return (
      dave.x + dave.width >= this.x &&
      this.x + this.width >= dave.x &&
      dave.y + dave.height >= this.y &&
      this.y + this.height >= dave.y
    );
    // {
    //   dave.velocity.y = 0;
    //   dave.isGrounded = true;
    // }
    // ) {
    //   // dave.velocity.x = 0;
    //   dave.velocity.y = 0;
    //   dave.isGrounded = true;
    //   // return true
    // }
  };
}
