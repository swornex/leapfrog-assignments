import { dangers } from "../../images.js";
import FireBullet from "../bullet/fireBullet.js";

export default class _BaseEnemy {
  /**
   * Creates a new instance of the BaseEnemy class.
   * @param {Object} options - The options for configuring the enemy.
   * @param {number} options.x - The x-coordinate of the enemy.
   * @param {number} options.y - The y-coordinate of the enemy.
   * @param {number} options.width - The width of the enemy.
   * @param {number} options.height - The height of the enemy.
   * @param {number} options.radius - The radius of the circular path.
   * @param {number} options.speed - The speed of movement along the circular path.
   * @param {number} options.health - The health of the enemy.
   * @param {number} options.srcX - The x-coordinate of the source image.
   * @param {number} options.srcY - The y-coordinate of the source image.
   */
  constructor({
    x,
    y,
    width,
    height,
    radius,
    speed,
    health,
    srcX,
    srcY,
    shootAngle
  }) {
    if (new.target === _BaseEnemy) {
      throw new TypeError("Cannot construct _BaseEnemy instances directly");
    }

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.initialX = x;
    this.initialY = y;
    this.radius = radius; // Radius of the circular path
    this.angle = 0; // Current angle (in radians)
    this.speed = speed; // Speed of movement along the circular path
    this.health = health;
    this.srcX = srcX;
    this.srcY = srcY;
    this.shootAngle = shootAngle;

    this.image = dangers;
    this.bullets = [];
    this.lastShootTime = 0;
    this.shootDelay = 1000;
  }

  updateBullet() {
    this.bullets.forEach((bullet) => {
      bullet.update();
    });

    this.bullets = this.bullets.filter((bullet) => {
      return !bullet.markedForDeletion;
    });
  }

  shoot() {
    const currentTime = Date.now();
    if (currentTime - this.lastShootTime < this.shootDelay) {
      return;
    }
    console.log(Math.ceil(this.angle));

    if (Math.ceil(this.angle) % this.shootAngle === 0) {
      this.lastShootTime = currentTime;

      this.bullets.push(
        new FireBullet(this.x, this.y + this.height / 2, 30, 10)
      );
    }
  }

  /**
   * Decreases the health of the enemy by 1.
   */
  decreaseHealth() {
    this.health--;
  }

  /**
   * Checks if the enemy is dead.
   * @returns {boolean} True if the enemy is dead, false otherwise.
   */
  getIsDead() {
    return this.health <= 0;
  }

  /**
   * Updates the position of the enemy based on its initial position, radius, and angle.
   */
  updatePosition() {
    this.x = this.initialX + this.radius * Math.cos(this.angle);
    this.y = this.initialY + this.radius * Math.sin(this.angle);
  }

  /**
   * Moves the enemy along the circular path in an anti-clockwise direction.
   * @param {number} deltaTime - The time passed since the last frame.
   */
  move(deltaTime) {
    // Update the angle based on the time passed and speed in an anti-clockwise direction
    this.angle -= this.speed * deltaTime;

    // Update the position based on the new angle
    this.updatePosition();
    this.updateBullet();
    this.shoot();
  }

  draw(ctx) {
    this.move(0.01); // Adjust speed of rotation by modifying this value

    ctx.drawImage(
      this.image,
      this.srcX,
      this.srcY,
      96,
      64,
      this.x,
      this.y,
      75,
      this.height
    );

    this.bullets.forEach((bullet) => {
      bullet.draw(ctx);
    });
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
