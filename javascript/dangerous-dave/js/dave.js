import Game from "./game.js";
import { jetPacks, players } from "./images.js";
import { keys } from "./input.js";
import Level from "./level.js";
import Bullet from "./classes/bullet/bullet.js";

export default class Dave {
  /**
   * Represents a player character in the game.
   * @constructor
   * @param {number} x - The x-coordinate of the player's position.
   * @param {number} y - The y-coordinate of the player's position.
   * @param {number} width - The width of the player.
   * @param {number} height - The height of the player.
   * @param {Level} level - The level object containing items and achievements.
   * @param {boolean} [isForLevelUp=false] - Indicates if the player is for level up.
   */
  constructor(x, y, width, height, level = {}, isForLevelUp = false) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = width;
    this.height = height;
    this.items = level.items;
    this.enemies = level.enemies;

    this.isForLevelUp = isForLevelUp;
    this.achievements = level.achievements;
    this.totalTrophies = this.items?.trophies?.length;
    this.bullets = [];
    this.lastShootTime = 0;
    this.shootDelay = 500;
    this.level = level;

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
    this.isGrounded = false;
    this.isGun = false;
    this.isJetPack = false;
    this.isJetPackOn = false;
    this.maxJet = 1000;
  }

  /**
   * Makes the character walk until the end.
   */
  walkUntilEnd() {
    this.velocity.x = 5;
    this.isGrounded = true;
    this.currentMovement = "right";
    this.x += this.velocity.x;
    this.updateAnimation(this.spriteCoordinates.right);
    this.update();
  }

  /**
   * Moves the character based on user input and handles collisions with items.
   */
  move() {
    this.image = this.isJetPack && this.isJetPackOn ? jetPacks : players;

    if (this.isForLevelUp) {
      this.walkUntilEnd();
      return;
    }

    this.x += this.velocity.x;
    this.velocity.x = 0;

    this.update();

    if (!keys.ArrowLeft && !keys.ArrowRight) {
      if (this.isJetPack && this.isJetPackOn) {
        this.currentMovement = "jetPackRight";
        this.updateAnimation(this.spriteCoordinates.jetPackRight);
      }
    }

    if (keys.ArrowLeft) {
      if (this.isJetPack && this.isJetPackOn) {
        this.currentMovement = "jetPackLeft";
        this.updateAnimation(this.spriteCoordinates.jetPackLeft);
      } else {
        this.currentMovement = "left";
        this.updateAnimation(this.spriteCoordinates.left);
      }
      this.velocity.x = -5;
    }

    if (keys.ArrowRight) {
      if (this.isJetPack && this.isJetPackOn) {
        this.currentMovement = "jetPackRight";
        this.updateAnimation(this.spriteCoordinates.jetPackRight);
      } else {
        this.currentMovement = "right";
        this.updateAnimation(this.spriteCoordinates.right);
      }
      this.velocity.x = 5;
    }

    if (keys.ArrowUp) {
      if (this.isJetPack && this.isJetPackOn) {
        this.velocity.y -= 1;
      }
      // if (this.isGrounded) {
      this.jump();
      // }
    }

    if (keys.ArrowDown) {
      if (this.isJetPack && this.isJetPackOn) {
        this.velocity.y += 3;
      }
    }

    if (keys.Control) {
      if (this.isGun) {
        this.shoot();
      }
    }

    if (keys.Alt) {
      if (this.isJetPack) {
        this.isJetPackOn = !this.isJetPackOn;
      }
    }

    if (this.isJetPackOn && this.maxJet > 0) {
      this.maxJet -= 1;
      console.log({ jetpack: this.isJetPack, maxJet: this.maxJet });
    }

    if (this.maxJet <= 0) {
      this.isJetPack = false;

      console.log({ jetpack: this.isJetPack, maxJet: this.maxJet });
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

        this.isGun = true;
      }
    });

    this.items?.jetPacks?.forEach((jetPack) => {
      const collided = jetPack.checkCollision(this);

      if (collided) {
        this.items.jetPacks = this.items.jetPacks.filter(
          (innerjetPack) => innerjetPack !== jetPack
        );

        this.isJetPack = true;
      }
    });
  }

  /**
   * Updates the position of the character.
   * Checks for horizontal collision, updates the vertical position,
   * applies gravity if not grounded, and checks for vertical collision.
   */
  update() {
    this.checkHorizontalCollision();

    this.y += this.velocity.y;

    if (this.isJetPack && this.isJetPackOn) {
      this.velocity.y = 0;
    } else {
      if (!this.isGrounded) {
        this.velocity.y += 0.6;
      }
    }

    this.checkVerticalCollision();
  }

  /**
   * Makes the character jump by setting the vertical velocity to a negative value.
   */
  jump() {
    this.isGrounded = false;
    this.velocity.y = -12;
  }

  /**
   *  moves the bullet thrown by player to certain point of the canvas and gets deleted
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
   * bullet gets thrown by player at certain period of time by delaying it
   * Draws bullet instance
   */
  shoot() {
    const currentTime = Date.now();
    if (currentTime - this.lastShootTime < this.shootDelay) {
      return;
    }

    this.lastShootTime = currentTime;

    this.bullets.push(
      new Bullet(this.x + this.width, this.y + this.height / 2, 30, 10)
    );
  }

  /**
   * Draws the player character on the canvas.
   *
   * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
   */
  draw(ctx) {
    this.move();

    const movement = this.currentMovement;
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
      45,
      45
    );

    this.bullets.forEach((bullet) => {
      bullet.draw(ctx);
    });
  }

  /**
   * Checks for horizontal collision with red blocks.
   */
  checkHorizontalCollision = () => {
    this.items?.redBlocks?.forEach((redBlock) => {
      const collided = redBlock.checkCollision(this);

      // //HORIZONTAL
      if (collided) {
        if (this.velocity.x < 0) {
          this.velocity.x = 0;

          this.x = redBlock.x + redBlock.width + 0.01;
          return;
        }

        if (this.velocity.x > 0) {
          this.velocity.x = 0;
          this.x = redBlock.x - this.width - 0.01;
          return;
        }
      }
    });
  };

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
      } else {
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
