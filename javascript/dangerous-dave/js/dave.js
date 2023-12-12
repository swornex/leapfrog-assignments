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
      if (this.isGrounded) this.jump();
    }

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
  }

  update() {
    this.checkHorizontalCollision();
    this.y += this.velocity.y;
    if (!this.isGrounded) {
      this.velocity.y += 0.6;
      console.log("gravity");
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
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  checkHorizontalCollision() {
    // this.tileItems?.redBlocks?.forEach((redBlock) => {

    for (const redBlock of this.tileItems?.redBlocks) {
      const collided = redBlock.checkCollision(this);
      // const horizontalCollision = redBlock.horizontalCollision(this);
      // const verticalCollision = redBlock.verticalCollision(this);

      // if (horizontalCollision) {

      // //HORIZONTAL

      if (collided) {
        // console.log("[REDBLOCK]", this.x, redBlock.x);
        if (this.velocity.x > 0) {
          this.velocity.x = 0;
          this.x = redBlock.x - this.width - 0.01;
          break;
        }

        if (this.velocity.x < 0) {
          this.velocity.x = 0;

          this.x = redBlock.x + redBlock.width + 0.01;
          break;
        }
      }

      // if (collided) {
      //   this.velocity.x = 0;
      //   this.velocity.y = 0;
      //   // this.isGrounded = true;
      // }
    }
  }

  checkVerticalCollision() {
    // this.tileItems?.redBlocks?.forEach((redBlock) => {
    // const equalOrLowerRedBlock = this.tileItems?.redBlocks?.filter(
    //   (redBlock) => redBlock.y >= this.y * 0.75
    // );
    // console.log(equalOrLowerRedBlock, this.y * 0.75);

    for (const redBlock of this.tileItems?.redBlocks) {
      const collided = redBlock.checkCollision(this);

      //VERTICAL

      if (collided) {
        if (this.velocity.y > 0) {
          // console.log("y>0");
          this.velocity.y = 0;
          // if (redBlock.y > this.y) {
          this.y = redBlock.y - this.height - 0.01;
          this.isGrounded = true;
          break;
          // }
        }

        if (this.velocity.y < 0) {
          // console.log("y<0");

          this.velocity.y = 0;
          this.y = redBlock.y + redBlock.height + 0.01;
          break;
        }
      } else {
        this.isGrounded = false;
      }
    }
  }
}
