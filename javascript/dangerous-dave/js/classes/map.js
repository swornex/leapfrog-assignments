import BlueBlock from "./block/blue-block.js";
import BlueDiamond from "./point/blue-diamond.js";
import RedSpiral from "./enemy/red-spiral.js";
import PinkSpiral from "./enemy/pink-spiral.js";
import Spider from "./enemy/spider.js";
import Dave from "./dave.js";
import Door from "./door.js";
import EmptyBlock from "./block/empty-block.js";
import Fire from "./danger/fire.js";
import OutBlock from "./block/out-block.js";
import PinkBlock from "./block/pink-block.js";
import AquaBlock from "./block/aqua-block.js";
import Star from "./block/star.js";

import Plant from "./danger/plants.js";
import RedBlock from "./block/red-block.js";
import RedDiamond from "./point/red-diamond.js";
import Trophy from "./trophy.js";
import Water from "./danger/water.js";
import Gun from "./gun.js";
import PinkPearl from "./point/pink-pearl.js";
import Crown from "./point/crown.js";
import Ring from "./point/ring.js";
import JetPack from "./jet-pack.js";
import { keys } from "../input.js";
import Play from "./play.js";
import RightPipe from "./pipe/right-pipe.js";
import UpPipe from "./pipe/up-pipe.js";

export default class Map {
  /**
   *
   * @param {Array} map
   * @param {Object} level
   */
  constructor(map, level = {}) {
    this.map = map;
    this.ctx = level.ctx;
    this.achievements = level.achievements;
    this.totalTrophies = level.totalTrophies;
    this.mapStates = level.mapStates;
    this.jetPack = level.jetPack;
    this.gun = level.gun;

    //for collision purpose
    this.items = {
      points: [],
      elements: [],
      trophies: [],
      emptyBlocks: [],
      doors: [],
      guns: [],
      jetPacks: [],
      stars: [],
      collisionBlocks: []
    };

    this.enemies = [];

    this.daves = [];

    this.init();
  }

  addCollisionBlock = (block) => {
    this.items.collisionBlocks.push(block);
  };

  addPoints = (point) => {
    this.items.points.push(point);
  };

  addElements = (element) => {
    this.items.elements.push(element);
  };

  addTrophy = (trophy) => {
    this.items.trophies.push(trophy);
  };

  addEmptyBlock = (emptyBlock) => {
    this.items.emptyBlocks.push(emptyBlock);
  };

  addDoor = (door) => {
    this.items.doors.push(door);
  };

  addEnemy = (enemy) => {
    this.enemies.push(enemy);
  };

  addGun = (gun) => {
    this.items.guns.push(gun);
  };

  addJetPack = (jetPack) => {
    this.items.jetPacks.push(jetPack);
  };

  addStar = (star) => {
    this.items.stars.push(star);
  };

  addDave = (dave) => {
    this.daves.push(dave);
  };

  /**
   * Initializes the level according to the tile map.
   */
  init() {
    this.map.forEach((row, yIndex) => {
      row.forEach((block, xIndex) => {
        const x = xIndex * 50;
        const y = yIndex * 50;
        const width = 50;
        const height = 50;
        switch (block) {
          case "EB":
            this.addEmptyBlock(new EmptyBlock(x, y, width, height));
            break;
          case "RB":
            this.addCollisionBlock(new RedBlock(x, y, width, height));
            break;
          case "OB":
            this.addCollisionBlock(new OutBlock(x, y, width, height));
            break;
          case "RP":
            this.addCollisionBlock(new RightPipe(x, y, width, height));
            break;
          case "UP":
            this.addCollisionBlock(new UpPipe(x, y, width, height));
            break;
          case "DO":
            this.addDoor(new Door(x, y, width, height));
            break;
          case "BD":
            this.addPoints(new BlueDiamond(x, y, width, height));
            break;
          case "RD":
            this.addPoints(new RedDiamond(x, y, width, height));
            break;
          case "TR":
            this.addTrophy(new Trophy(x, y, width, height));
            break;
          case "DA":
            for (let i = 0; i < Play.lives; i++) {
              this.addDave(new Dave(x, y, 38, 42, this));
            }
            break;
          case "BB":
            this.addCollisionBlock(new BlueBlock(x, y, width, height));
            break;
          case "PB":
            this.addCollisionBlock(new PinkBlock(x, y, width, height));
            break;
          case "FI":
            this.addElements(new Fire(x, y, width, height));
            break;
          case "WA":
            this.addElements(new Water(x, y, width, height));
            break;
          case "PL":
            this.addElements(new Plant(x, y, width, height));
            break;
          case "SP":
            this.addEnemy(new Spider(x, y, width, height));
            break;
          case "PS":
            this.addEnemy(new PinkSpiral(x, y, width, height));
            break;
          case "RS":
            this.addEnemy(new RedSpiral(x, y, width, height));
            break;
          case "GU":
            this.addGun(new Gun(x, y, width, height));
            break;
          case "PP":
            this.addPoints(new PinkPearl(x, y, width, height));
            break;
          case "CR":
            this.addPoints(new Crown(x, y, width, height));
            break;
          case "RI":
            this.addPoints(new Ring(x, y, width, height));
            break;
          case "JP":
            this.addJetPack(new JetPack(x, y, width, height));
            break;
          case "AB":
            this.addCollisionBlock(new AquaBlock(x, y, width, height));
            break;
          case "ST":
            this.addStar(new Star(x, y, width, height));
            break;
          default:
            this.addEmptyBlock(new EmptyBlock(x, y, width, height));
            break;
        }
      });
    });
  }

  /**
   * Draws the map.
   * @returns {void}
   */
  draw() {
    const dave = this.daves[Play.lives - 1];

    if (!dave) {
      return;
    }

    // Draw all items
    Object.values(this.items).forEach((item) => {
      item.forEach((block) => {
        block.draw(this.ctx);
      });
    });

    // Draw all enemies
    this.enemies.forEach((enemy) => {
      enemy.draw(this.ctx);
    });

    // Draw Dave
    dave?.draw(this.ctx);

    // Change current frame when Daves moves to the right side
    if (
      dave.x + dave.width > 905 &&
      this.mapStates.current < this.mapStates.total &&
      keys.ArrowRight
    ) {
      this.mapStates.current += 1;
      this.enemies.forEach((enemy) => {
        enemy.bullets = [];
      });
      this.gun.bullets = [];
    }

    // Change current frame when Daves moves to the left side

    if (
      dave.x < 95 &&
      this.mapStates.current > this.mapStates.initial &&
      keys.ArrowLeft
    ) {
      this.mapStates.current -= 1;
      this.enemies.forEach((enemy) => {
        enemy.bullets = [];
      });
      this.gun.bullets = [];
    }
  }

  getIsLevelCompleted() {
    return (
      this.achievements.trophiesCollected === this.totalTrophies &&
      this.achievements.hasReachedDoorAfterTrophy
    );
  }
}
