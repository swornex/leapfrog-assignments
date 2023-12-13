import Bullet from "./bullet.js";
import Game from "./game.js";
import { players } from "./images.js";
import { keys } from "./input.js";

export default class Dave {
  /**
   * Constructor function for creating a new instance of the class.
   *
   * @param {number} x - the x coordinate of the instance
   * @param {number} y - the y coordinate of the instance
   * @param {number} width - the width of the instance
   * @param {number} height - the height of the instance
   * @param {Game} game - the game object
   */
  constructor(x, y, width, height, game) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = width;
    this.height = height;
    this.game = game;
    this.tileItems = game.items;

    this.bullets = [];
    this.lastShootTime = 0;
    this.shootDelay = 500;
    this.achievements = game.achievements;
    this.levelStatus = game.levelStatus;
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
    if (!keys.ArrowRight && !keys.ArrowLeft && this.achievements) {
      this.currentFrame = 0;
      return "initial";
    } else {
      return this.currentMovement;
    }
  }

  move() {
    if (!this.achievements) {
      //   this.velocity.x = 5;
      //   this.x += this.velocity.x;
      //   return;

      this.velocity.y = 0;
    }

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

    if (keys.ArrowRight || !this.achievements) {
      this.velocity.x = 5;
      this.currentMovement = "right";

      if (++this.frameCount % this.animationSpeed === 0) {
        this.currentFrame =
          (this.currentFrame + 1) % this.spriteCoordinates.right.length;
      }
    }

    if (keys.ArrowUp) {
      // if (this.isGrounded)
      this.jump();
    }

    if (keys.Control) {
      console.log("control");
      this.shoot();
    }

    this.updateBullet();

    // this.tileItems?.redBlocks?.forEach((redBlock) => {
    //   const collided = redBlock.checkCollision(this);
    //   // const horizontalCollision = redBlock.horizontalCollision(this);
    //   // const verticalCollision = redBlock.verticalCollision(this);

    //   // if (horizontalCollision) {
    //   console.log("horizontal");
    //   // this.velocity.x = 0;
    //   // this.x = redBlock.x - this.width;
    //   // }

    //   // if (verticalCollision) {
    //   //   console.log("vertical");
    //   // }
    //   // this.velocity.y = 0;
    //   //   this.y = redBlock.y - this.height;
    //   //   this.isGrounded = true;
    //   // }

    //   //VERTICAL

    //   if (collided) {
    //     if (this.velocity.y > 0) {
    //       this.velocity.y = 0;
    //       this.y = redBlock.y - this.height - 0.02;
    //       this.isGrounded = true;
    //     }

    //     if (this.velocity.y < 0) {
    //       this.velocity.y = 0;
    //       this.y = redBlock.y + redBlock.height + 0.02;
    //     }
    //   }

    //   // //HORIZONTAL

    //   if (collided) {
    //     // console.log("[REDBLOCK]", this.x, redBlock.x);
    //     if (this.velocity.x > 0) {
    //       this.velocity.x = 0;
    //       this.x = redBlock.x - this.width - 0.02;
    //     }

    //     if (this.velocity.x < 0) {
    //       this.velocity.x = 0;

    //       this.x = redBlock.x + redBlock.width + 0.02;
    //     }
    //   }

    //   // if (collided) {
    //   //   this.velocity.x = 0;
    //   //   this.velocity.y = 0;
    //   //   // this.isGrounded = true;
    //   // }
    // });

    this.tileItems?.blueDiamonds?.forEach((blueDiamond) => {
      const collided = blueDiamond.checkCollision(this);

      if (collided) {
        this.tileItems.blueDiamonds = this.tileItems.blueDiamonds.filter(
          (diamond) => diamond !== blueDiamond
        );

        if (this.achievements) {
          this.achievements.score += blueDiamond.score;
        }
      }
    });

    this.tileItems?.redDiamonds?.forEach((redDiamond) => {
      const collided = redDiamond.checkCollision(this);

      if (collided) {
        this.tileItems.redDiamonds = this.tileItems.redDiamonds.filter(
          (diamond) => diamond !== redDiamond
        );

        if (this.achievements) {
          this.achievements.score += redDiamond.score;
        }
      }
    });

    this.tileItems?.trophies?.forEach((trophy) => {
      const collided = trophy.checkCollision(this);

      if (collided) {
        this.tileItems.trophies = this.tileItems.trophies.filter(
          (trophy) => trophy !== trophy
        );

        if (this.achievements) {
          this.achievements.trophies++;
        }
      }
    });

    this.tileItems?.doors?.forEach((door) => {
      const collided = door.checkCollision(this);

      if (collided) {
        if (this.achievements.trophies && this.achievements.trophies === 1) {
          this.levelStatus.completed++;
          // console.log("COMPLETE", this.levelStatus.completed);
        }
      }
    });
  }

  /**
   * moves the bullet thrown by player to certain point of the canvas and gets deleted
   *
   */
  updateBullet() {
    this.bullets.forEach((bullet) => {
      bullet.update();
    });

    this.bullets = this.bullets.filter((bullet) => {
      return !bullet.markedForDeletion;
    });
  }

  /**
   * Draws the bullet
   *
   */
  shoot() {
    const currentTime = Date.now();
    if (currentTime - this.lastShootTime < this.shootDelay) {
      return;
    }

    this.lastShootTime = currentTime;

    this.bullets.push(
      new Bullet(this.x + this.width, this.y + this.height / 2, this.game)
    );
  }

  update() {
    this.checkHorizontalCollision();
    this.y += this.velocity.y;
    if (!this.isGrounded) {
      this.velocity.y += 0.6;
    }
    this.checkVerticalCollision();
  }

  jump() {
    this.isGrounded = false;
    this.velocity.y = -12;
  }

  draw(ctx) {
    this.move();

    const movement = this.calculateMovementState();
    const [spriteX, spriteY] =
      this.spriteCoordinates[movement][this.currentFrame];

    ctx.strokeStyle = "white";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      spriteX,
      spriteY,
      64,
      64,
      this.x - 10,
      this.y,
      // this.width,
      // this.height,
      45,
      45
    );

    this.bullets.forEach((bullet) => {
      bullet.draw(ctx);
    });
  }

  checkHorizontalCollision = () => {
    this.tileItems?.redBlocks?.forEach((redBlock) => {
      const collided = redBlock.checkCollision(this);

      // //HORIZONTAL

      if (collided) {
        // console.log("[REDBLOCK]", this.x, redBlock.x);
        if (this.velocity.x > 0) {
          this.velocity.x = 0;
          this.x = redBlock.x - this.width - 0.01;
          return;
        }

        if (this.velocity.x < 0) {
          this.velocity.x = 0;

          this.x = redBlock.x + redBlock.width + 0.01;
          return;
        }
      }
    });
  };

  checkVerticalCollision = () => {
    this.tileItems?.redBlocks?.forEach((redBlock) => {
      // const equalOrLowerRedBlock = this.tileItems?.redBlocks?.filter(
      //   (redBlock) => redBlock.y >= this.y * 0.75
      // );
      // console.log(equalOrLowerRedBlock, this.y * 0.75);

      // for (const redBlock of this.tileItems?.redBlocks) {
      const collided = redBlock.checkCollision(this);

      //VERTICAL

      if (collided) {
        if (this.velocity.y > 0) {
          // console.log("y>0");
          this.velocity.y = 0;
          // if (redBlock.y > this.y) {
          this.y = redBlock.y - this.height - 0.01;
          this.isGrounded = true;
          return;
          // }
        }

        if (this.velocity.y < 0) {
          // console.log("y<0");

          this.velocity.y = 0;
          this.y = redBlock.y + redBlock.height + 0.01;
          return;
        }
      } else {
        this.isGrounded = false;
      }
    });
  };
}
