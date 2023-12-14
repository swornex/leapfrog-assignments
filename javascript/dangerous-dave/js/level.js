import BlueBlock from "./blue-block.js";
import BlueDiamond from "./blue-diamond.js";
import Crown from "./crown.js";
import Dave from "./dave.js";
import Door from "./door.js";
import EmptyBlock from "./empty-block.js";
import Fire from "./fire.js";
import Gun from "./gun.js";
import OutBlock from "./out-block.js";
import PinkBlock from "./pink-block.js";
import PinkPearl from "./pink-pearl.js";
import Pipe from "./pipe.js";
import Plant from "./plants.js";
import RedBlock from "./red-block.js";
import RedDiamond from "./red-diamond.js";
import Ring from "./ring.js";
import Trophy from "./trophy.js";
import Water from "./water.js";

export default class Level {
  constructor(map, ctx) {
    this.map = map;
    this.ctx = ctx;

    //for collision purpose
    this.items = {
      redBlocks: [],
      trophies: [],
      redDiamonds: [],
      blueDiamonds: [],
      emptyBlocks: [],
      outBlocks: [],
      pipes: [],
      doors: [],
      blueBlocks: [],
      pinkBlocks: [],
      fires: [],
      waters: [],
      plants: [],
      guns: [],
      pinkPearls: [],
      crowns: [],
      rings: [],
      collisionBlocks: []
    };

    this.achievements = {
      trophiesCollected: 0,
      hasReachedDoorAfterTrophy: false
    };

    this.dave = null;

    this.init();

    this.totalTrophies = this.items.trophies.length;
  }

  addRedBlock = (redWall) => {
    this.items.redBlocks.push(redWall);
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
    this.items.outBlocks.push(outBlock);
  };

  addPipe = (pipe) => {
    this.items.pipes.push(pipe);
  };

  addDoor = (door) => {
    this.items.doors.push(door);
  };

  addBlueBlock = (blueBlock) => {
    this.items.blueBlocks.push(blueBlock);
    this.items.collisionBlocks.push(blueBlock);
  };

  addPinkBlock = (pinkBlock) => {
    this.items.pinkBlocks.push(pinkBlock);
    this.items.collisionBlocks.push(pinkBlock);
  };

  addFire = (fire) => {
    this.items.fires.push(fire);
  };

  addWater = (water) => {
    this.items.waters.push(water);
  };

  addPlant = (plant) => {
    this.items.plants.push(plant);
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
            this.dave = new Dave(x, y, 25, 45, this);
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

          default:
            this.addEmptyBlock(new EmptyBlock(x, y, width, height));
            break;
        }
      });
    });
  }

  draw() {
    Object.values(this.items).forEach((item) => {
      item.forEach((block) => {
        block.draw(this.ctx);
      });
    });

    this.dave.draw(this.ctx);
  }

  getIsLevelCompleted() {
    return (
      this.achievements.trophiesCollected === this.totalTrophies &&
      this.achievements.hasReachedDoorAfterTrophy
    );
  }

  getTrophiesCollected() {
    return this.achievements.trophiesCollected;
  }
}
