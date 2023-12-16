import Game from "./game.js";
import { jetPacks, players } from "./images.js";
import { keys } from "./input.js";
import Bullet from "./classes/bullet/bullet.js";
import { checkCollision } from "./utils.js";
import Map from "./map.js";

export default class Dave {
  /**
   * Represents a player character in the game.
   * @constructor
   * @param {number} x - The x-coordinate of the player's position.
   * @param {number} y - The y-coordinate of the player's position.
   * @param {number} width - The width of the player.
   * @param {number} height - The height of the player.
   * @param {Map} map - The map object containing items and achievements.
   * @param {boolean} [isForLevelUp=false] - Indicates if the player is for level up.
   */
  constructor(x, y, width, height, map = {}, isForLevelUp = false) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = width;
    this.height = height;
    this.items = map.items;
    this.enemies = map.enemies;
    this.jetPack = map.jetPack;
    this.gun = map.gun;
    this.isForLevelUp = isForLevelUp;
    this.totalTrophies = map.totalTrophies;

    this.achievements = map.achievements;

    this.previousDavePosition = {
      x: x,
      y: y
    };

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
      ],
      jetPackRight: [
        [64, 0],
        [64, 0],
        [64, 0],
        [64, 0]
      ],
      jetPackLeft: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    };

    this.currentMovement = "initial";
    this.currentFrame = 0;
    this.frameCount = 0;
    this.animationSpeed = 10;
    this.isGrounded = true;
  }

  show(ctx) {
    const movement = this.currentMovement;
    const [spriteX, spriteY] =
      this.spriteCoordinates[movement][this.currentFrame];

    ctx.strokeStyle = "red";
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

  /**
   * Makes the character walk until the end.
   */
  walkUntilEnd(ctx) {
    this.velocity.x = 5;
    this.isGrounded = true;
    this.currentMovement = "right";

    this.x += this.velocity.x;

    this.updateAnimation(this.spriteCoordinates.right);

    this.show(ctx);
  }

  move(drawCb, shootCb) {
    if (this.jetPack.isCarried && this.jetPack.isOn) {
      [
        ...this.items.redBlocks,
        ...this.items.pinkBlocks,
        ...this.items.blueBlocks
      ].forEach((block) => {
        if (checkCollision(this, block)) {
          // If collision detected, revert to the previous valid position
          this.x = this.previousDavePosition.x;
          this.y = this.previousDavePosition.y;

          // Prevent player movement in that direction
          keys.ArrowUp = false;
          keys.ArrowDown = false;
          keys.ArrowLeft = false;
          keys.ArrowRight = false;
        }
      });

      drawCb();

      if (keys.Control) {
        if (this.gun.isCarried) {
          this.shoot();
        }
      }

      this.gun.bullets.forEach((bullet) => {
        shootCb(bullet);
      });

      // Apply vertical movement
      this.previousDavePosition.y = this.y;
      if (keys.ArrowUp && this.y > 0) {
        this.velocity.y = -5; // Set this.velocity.y for upward movement
      } else if (keys.ArrowDown && this.y < 600 - this.height) {
        this.velocity.y = 5; // Set this.velocity.y for downward movement
      } else {
        this.velocity.y = 0; // No vertical movement
      }
      this.y += this.velocity.y;

      // Apply horizontal movement
      this.previousDavePosition.x = this.x;
      if (keys.ArrowLeft && this.x > 0) {
        this.velocity.x = -5; // Set this.velocity.x for leftward movement
        this.currentMovement = "jetPackLeft";
      } else if (keys.ArrowRight && this.x < canvas.width - this.width) {
        this.velocity.x = 5; // Set this.velocity.x for rightward movement
        this.currentMovement = "jetPackRight";
      } else {
        this.velocity.x = 0; // No horizontal movement
      }
      this.x += this.velocity.x;
    } else {
      let collidedTop = false;
      let collidedBottom = false;

      [
        ...this.items.redBlocks,
        ...this.items.pinkBlocks,
        ...this.items.blueBlocks
      ].forEach((block) => {
        if (checkCollision(this, block)) {
          if (
            this.y < block.y + block.height &&
            this.previousDavePosition.y >= block.y + block.height
          ) {
            this.y = block.y + block.height;
            collidedBottom = true;
            this.velocity.y = 0;
          } else if (
            this.y + this.height >= block.y &&
            this.previousDavePosition.y + this.height <= block.y
          ) {
            this.y = block.y - this.height;
            this.isGrounded = true;
            collidedTop = true;
          } else if (
            this.x < block.x + block.width &&
            this.previousDavePosition.x >= block.x + block.width
          ) {
            this.x = block.x + block.width;
            this.velocity.x = 0;
          } else if (
            this.x + this.width > block.x &&
            this.previousDavePosition.x + this.width <= block.x
          ) {
            this.x = block.x - this.width;
            this.velocity.x = 0;
          }
        }
      });

      if (!collidedTop && !collidedBottom) {
        // If the player is not colliding with top or bottom, it is not grounded
        this.isGrounded = false;
      }

      drawCb();

      if (keys.Control) {
        if (this.gun.isCarried) {
          this.shoot();
        }
      }

      this.gun.bullets.forEach((bullet) => {
        shootCb(bullet);
      });

      this.previousDavePosition.y = this.y;

      if (!this.isGrounded) {
        this.velocity.y += 0.3;
      }

      this.y += this.velocity.y;
      if (keys.ArrowUp && this.y > 0 && this.isGrounded) {
        this.velocity.y = -12; // Set this.velocity.y for upward movement
        this.isGrounded = false; // Set isGrounded to false when jumping
      }

      this.previousDavePosition.x = this.x;

      if (keys.ArrowLeft && this.x > 0) {
        this.velocity.x = -4; // Set this.velocity.x for leftward movement
        this.currentMovement = "left";
        this.updateAnimation(this.spriteCoordinates.left);
      } else if (keys.ArrowRight && this.x < 1000 - this.width) {
        this.velocity.x = 4; // Set this.velocity.x for rightward movement
        this.currentMovement = "right";
        this.updateAnimation(this.spriteCoordinates.right);
      } else {
        this.velocity.x = 0; // No horizontal movement
      }

      this.x += this.velocity.x;
    }
  }

  /**
   * Moves the character based on user input and handles collisions with items.
   */
  draw(ctx) {
    if (this.isForLevelUp) {
      this.walkUntilEnd(ctx);

      return;
    }

    this.image =
      this.jetPack.isCarried && this.jetPack.isOn ? jetPacks : players;

    this.move(
      () => this.show(ctx),
      (bullet) => bullet.draw(ctx)
    );

    if (keys.Alt) {
      if (this.jetPack.isCarried) {
        const currentTime = Date.now();
        if (currentTime - this.jetPack.lastToggled < this.jetPack.toggleDelay) {
          return;
        }

        this.jetPack.lastToggled = currentTime;

        this.jetPack.isOn = !this.jetPack.isOn;
      }
    }

    if (this.jetPack.isOn) {
      if (this.currentMovement === "right") {
        this.currentMovement = "jetPackRight";
      } else if (this.currentMovement === "left") {
        this.currentMovement = "jetPackLeft";
      }
    }

    if (this.jetPack.isOn && this.jetPack.fuel > 0) {
      this.jetPack.fuel -= 1;
    }

    if (this.jetPack.fuel <= 0) {
      this.jetPack.isCarried = false;

      if (this.currentMovement === "jetPackRight") {
        this.currentMovement = "right";
      } else if (this.currentMovement === "jetPackLeft") {
        this.currentMovement = "left";
      }
    }

    this.updateBullet();

    this.enemies?.forEach((enemy, index) => {
      const collided = enemy.checkCollision(this);

      if (collided) {
        enemy.decreaseHealth();

        if (enemy.getIsDead()) {
          this.enemies = this.enemies.splice(index, 1);
        }
      }
    });

    this.items?.blueDiamonds?.forEach((blueDiamond) => {
      const collided = blueDiamond.checkCollision(this);

      if (collided) {
        this.items.blueDiamonds = this.items.blueDiamonds.filter(
          (diamond) => diamond !== blueDiamond
        );

        Game.score += blueDiamond.score;
      }
    });

    this.items?.redDiamonds?.forEach((redDiamond) => {
      const collided = redDiamond.checkCollision(this);

      if (collided) {
        this.items.redDiamonds = this.items.redDiamonds.filter(
          (diamond) => diamond !== redDiamond
        );

        Game.score += redDiamond.score;
      }
    });

    this.items?.pinkPearls?.forEach((pinkPearl) => {
      const collided = pinkPearl.checkCollision(this);

      if (collided) {
        this.items.pinkPearls = this.items.pinkPearls.filter(
          (diamond) => diamond !== pinkPearl
        );

        Game.score += pinkPearl.score;
      }
    });

    this.items?.crowns?.forEach((crown) => {
      const collided = crown.checkCollision(this);

      if (collided) {
        this.items.crowns = this.items.crowns.filter(
          (diamond) => diamond !== crown
        );

        Game.score += crown.score;
      }
    });

    this.items?.rings?.forEach((ring) => {
      const collided = ring.checkCollision(this);

      if (collided) {
        this.items.rings = this.items.rings.filter(
          (diamond) => diamond !== ring
        );

        Game.score += ring.score;
      }
    });

    this.items?.trophies?.forEach((trophy) => {
      const collided = trophy.checkCollision(this);

      if (collided) {
        this.items.trophies = this.items.trophies.filter(
          (innerTrophy) => innerTrophy !== trophy
        );

        this.achievements.trophiesCollected++;
        Game.score += trophy.score;
      }
    });

    this.items?.doors?.forEach((door) => {
      const collided = door.checkCollision(this);

      if (collided) {
        if (this.achievements.trophiesCollected === this.totalTrophies) {
          this.achievements.hasReachedDoorAfterTrophy = true;
        }
      }
    });

    this.items?.guns?.forEach((gun) => {
      const collided = gun.checkCollision(this);

      if (collided) {
        this.items.guns = this.items.guns.filter(
          (innerGun) => innerGun !== gun
        );

        this.gun.isCarried = true;
      }
    });

    this.items?.jetPacks?.forEach((jetPack) => {
      const collided = jetPack.checkCollision(this);

      if (collided) {
        this.items.jetPacks = this.items.jetPacks.filter(
          (innerJetPack) => innerJetPack !== jetPack
        );

        this.jetPack.isCarried = true;
      }
    });
  }

  /**
   *  moves the bullet thrown by player to certain point of the canvas and gets deleted
   */

  updateBullet() {
    this.gun.bullets.forEach((bullet) => {
      bullet.update();
    });

    this.gun.bullets = this.gun.bullets.filter((bullet) => {
      return !bullet.markedForDeletion;
    });
  }

  /**
   * bullet gets thrown by player at certain period of time by delaying it
   * Draws bullet instance
   */
  shoot() {
    const currentTime = Date.now();
    if (currentTime - this.gun.lastShot < this.gun.shootDelay) {
      return;
    }

    this.gun.lastShot = currentTime;

    this.gun.bullets.push(
      new Bullet(
        ["right", "jetPackRight"].includes(this.currentMovement)
          ? this.x + this.width
          : this.x,
        this.y + this.height / 2,
        30,
        10,
        ["right", "jetPackRight"].includes(this.currentMovement) ? 3 : -3
      )
    );
  }

  /**
   * Checks for vertical collision with red blocks and updates the player's position accordingly.
   */
  checkVerticalCollision = () => {
    this.items?.redBlocks?.forEach((redBlock) => {
      const collided = redBlock.checkCollision(this);

      //VERTICAL
      if (collided) {
        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          this.y = redBlock.y + redBlock.height + 0.01;
          return;
        }

        if (this.velocity.y > 0) {
          this.velocity.y = 0;
          this.y = redBlock.y - this.height - 0.01;
          this.isGrounded = true;
          return;
        }
        this.isGrounded = false;
      }
    });
  };

  /**
   * Updates the animation frame of the sprite based on the given sprite coordinates.
   * @param {Array} spriteCoordinates - The array of sprite coordinates.
   */
  updateAnimation(spriteCoordinates) {
    this.frameCount++;

    if (this.frameCount % this.animationSpeed === 0) {
      this.currentFrame = (this.currentFrame + 1) % spriteCoordinates.length;
    }
  }
}
