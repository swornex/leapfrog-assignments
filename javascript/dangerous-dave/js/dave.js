import { players } from "./images.js";
import { keys } from "./input.js";

export default class Dave {
  constructor(x, y, width, height, tileItems, achievements) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = width;
    this.height = height;
    this.tileItems = tileItems;

    this.achievements = achievements;
    this.image = players;

    this.spriteCoordinates = {
      initial: [[0, 0]],
      right: [
        [64, 0],
        [138, 0],
        [192, 0],
        [256, 0]
      ],
      left: [
        [320, 0],
        [384, 0],
        [448, 0],
        [512, 0]
      ]
    };

    this.currentMovement = "initial";
    this.currentFrame = 0;
    this.frameCount = 0;
    this.animationSpeed = 10;
    this.isGrounded = false;
  }

  // Calculate the current movement state
  calculateMovementState() {
    if (!keys.ArrowRight && !keys.ArrowLeft) {
      this.currentFrame = 0;
      return "initial";
    } else {
      return this.currentMovement;
    }
  }

  move() {
    this.x += this.velocity.x;
    this.velocity.x = 0;

    this.update();

    if (keys.ArrowLeft) {
      this.velocity.x = -5;
      this.currentMovement = "left";

      if (++this.frameCount % this.animationSpeed === 0) {
        this.currentFrame =
          (this.currentFrame + 1) % this.spriteCoordinates.left.length;
      }
    }
    if (keys.ArrowRight) {
      this.velocity.x = 5;
      this.currentMovement = "right";

      if (++this.frameCount % this.animationSpeed === 0) {
        this.currentFrame =
          (this.currentFrame + 1) % this.spriteCoordinates.right.length;
      }
    }

    if (keys.ArrowUp) {
      this.jump();
    } else {
      this.velocity.y += 0.6;
    }

    if (keys.ArrowDown) {
      this.velocity.y += 5;
    }

    this.tileItems.redBlocks.forEach((redBlock) => {
      const collided = redBlock.checkCollision(this);

      // if (collided) {
      //   this.velocity.x = 0;
      //   this.velocity.y = 0;
      //   // this.isGrounded = true;
      // }
    });

    this.tileItems.blueDiamonds.forEach((blueDiamond) => {
      const collided = blueDiamond.checkCollision(this);

      if (collided) {
        this.tileItems.blueDiamonds = this.tileItems.blueDiamonds.filter(
          (diamond) => diamond !== blueDiamond
        );

        this.achievements.score += blueDiamond.score;
      }
    });
  }

  update() {
    this.y += this.velocity.y;

    if (
      this.height + this.y + this.velocity.y < this.tileItems.redBlocks[0].y &&
      !this.isGrounded
    ) {
      this.velocity.y += 0.6;
    } else {
      this.velocity.y = 0;
      this.isGrounded = true;
    }
  }

  jump() {
    if (this.isGrounded) {
      this.velocity.y = -10;
      this.isGrounded = false;
    }
  }

  draw(ctx) {
    this.move();

    const movement = this.calculateMovementState();
    const [spriteX, spriteY] =
      this.spriteCoordinates[movement][this.currentFrame];

    ctx.drawImage(
      this.image,
      spriteX,
      spriteY,
      64,
      64,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
