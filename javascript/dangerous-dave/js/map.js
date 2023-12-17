import BlueBlock from "./classes/block/blue-block.js";
import BlueDiamond from "./classes/point/blue-diamond.js";
import RedSpiral from "./classes/enemy/red-spiral.js";
import PinkSpiral from "./classes/enemy/pink-spiral.js";
import Spider from "./classes/enemy/spider.js";
import Dave from "./dave.js";
import Door from "./door.js";
import EmptyBlock from "./classes/block/empty-block.js";
import Fire from "./classes/danger/fire.js";
import OutBlock from "./classes/block/out-block.js";
import PinkBlock from "./classes/block/pink-block.js";
import AquaBlock from "./classes/block/aqua-block.js";
import Star from "./classes/block/star.js";
import Pipe from "./pipe.js";
import Plant from "./classes/danger/plants.js";
import RedBlock from "./classes/block/red-block.js";
import RedDiamond from "./classes/point/red-diamond.js";
import Trophy from "./classes/trophy.js";
import Water from "./classes/danger/water.js";
import Gun from "./gun.js";
import PinkPearl from "./classes/point/pink-pearl.js";
import Crown from "./classes/point/crown.js";
import Ring from "./classes/point/ring.js";
import JetPack from "./jet-pack.js";
import { keys } from "./input.js";
import Play from "./classes/play.js";

export default class Map {
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
      trophies: [],
      redDiamonds: [],
      blueDiamonds: [],
      emptyBlocks: [],
      pipes: [],
      doors: [],
      guns: [],
      pinkPearls: [],
      crowns: [],
      rings: [],
      jetPacks: [],
      stars: [],
      collisionBlocks: [],
      elements: []
    };

    this.enemies = [];

    this.daves = [];

    this.init();
  }

  addRedBlock = (redWall) => {
    this.items.collisionBlocks.push(redWall);
  };

  addTrophy = (trophy) => {
    this.items.trophies.push(trophy);
  };

  addRedDiamond = (redDiamond) => {
    this.items.redDiamonds.push(redDiamond);
  };

  addBlueDiamond = (blueDiamond) => {
    this.items.blueDiamonds.push(blueDiamond);
  };

  addEmptyBlock = (emptyBlock) => {
    this.items.emptyBlocks.push(emptyBlock);
  };

  addOutBlock = (outBlock) => {
    this.items.collisionBlocks.push(outBlock);
  };

  addPipe = (pipe) => {
    this.items.collisionBlocks.push(pipe);
  };

  addDoor = (door) => {
    this.items.doors.push(door);
  };

  addBlueBlock = (blueBlock) => {
    this.items.collisionBlocks.push(blueBlock);
  };

  addPinkBlock = (pinkBlock) => {
    this.items.collisionBlocks.push(pinkBlock);
  };

  addFire = (fire) => {
    this.items.elements.push(fire);
  };

  addWater = (water) => {
    this.items.elements.push(water);
  };

  addPlant = (plant) => {
    this.items.elements.push(plant);
  };

  addEnemy = (enemy) => {
    this.enemies.push(enemy);
  };

  addGun = (gun) => {
    this.items.guns.push(gun);
  };

  addPinkPearl = (pinkPearl) => {
    this.items.pinkPearls.push(pinkPearl);
  };

  addCrown = (crown) => {
    this.items.crowns.push(crown);
  };

  addRing = (ring) => {
    this.items.rings.push(ring);
  };

  addJetPack = (jetPack) => {
    this.items.jetPacks.push(jetPack);
  };

  addAquaBlock = (aquaBlock) => {
    this.items.collisionBlocks.push(aquaBlock);
  };

  addStar = (star) => {
    this.items.stars.push(star);
  };

  addDave = (dave) => {
    this.daves.push(dave);
  };

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
            this.addRedBlock(new RedBlock(x, y, width, height));
            break;
          case "OB":
            this.addOutBlock(new OutBlock(x, y, width, height));
            break;
          case "PI":
            this.addPipe(new Pipe(x, y, width, height));
            break;
          case "DO":
            this.addDoor(new Door(x, y, width, height));
            break;
          case "BD":
            this.addBlueDiamond(new BlueDiamond(x, y, width, height));
            break;
          case "RD":
            this.addRedDiamond(new RedDiamond(x, y, width, height));
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
            this.addBlueBlock(new BlueBlock(x, y, width, height));
            break;
          case "PB":
            this.addPinkBlock(new PinkBlock(x, y, width, height));
            break;
          case "FI":
            this.addFire(new Fire(x, y, width, height));
            break;
          case "WA":
            this.addWater(new Water(x, y, width, height));
            break;
          case "PL":
            this.addPlant(new Plant(x, y, width, height));
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
            this.addPinkPearl(new PinkPearl(x, y, width, height));
            break;
          case "CR":
            this.addCrown(new Crown(x, y, width, height));
            break;
          case "RI":
            this.addRing(new Ring(x, y, width, height));
            break;
          case "JP":
            this.addJetPack(new JetPack(x, y, width, height));
            break;
          case "AB":
            this.addAquaBlock(new AquaBlock(x, y, width, height));
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

    if (
      dave.x + dave.width > 905 &&
      this.mapStates.current < this.mapStates.total &&
      keys.ArrowRight
    ) {
      this.mapStates.current += 1;
    }

    if (
      dave.x < 95 &&
      this.mapStates.current > this.mapStates.initial &&
      keys.ArrowLeft
    ) {
      this.mapStates.current -= 1;
    }
  }

  getIsLevelCompleted() {
    return (
      this.achievements.trophiesCollected === this.totalTrophies &&
      this.achievements.hasReachedDoorAfterTrophy
    );
  }
}
