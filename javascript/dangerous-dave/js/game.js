import OutBlock from "./out-block.js";
import EmptyBlock from "./empty-block.js";
import { LEVEL1_MAP, LEVEL2_MAP1, LEVEL2_MAP2, LEVEL2_MAP3 } from "./levels.js";
import RedBlock from "./red-block.js";
import Trophy from "./trophy.js";
import Pipe from "./pipe.js";
import BlueDiamond from "./blue-diamond.js";
import RedDiamond from "./red-diamond.js";
import Door from "./door.js";
import Dave from "./dave.js";
import BlueBlock from "./blue-block.js";
import PinkBlock from "./pink-block.js";
import LevelUp from "./level-up.js";
import Fire from "./fire.js";
import Water from "./water.js";
import Plant from "./plants.js";

export default class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.achievements = {
      trophies: 0,
      score: 0
    };

    this.levelStatus = {
      current: 1,
      completed: 0
    };
    // this.levelComplete = true;
    this.levelUp = new LevelUp(this.ctx);

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
      collisionBlocks: []
    };

    this.dave = null;

    this.init();
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
    this.items.collisionBlocks.push(fire);
  };

  addWater = (water) => {
    this.items.waters.push(water);
    this.items.collisionBlocks.push(water);
  };

  addPlant = (plant) => {
    this.items.plants.push(plant);
    this.items.collisionBlocks.push(plant);
  };

  init = () => {
    LEVEL1_MAP.forEach((row, yIndex) => {
      row.forEach((block, xIndex) => {
        const x = xIndex * 50;
        const y = yIndex * 50;
        const width = 50;
        const height = 50;

        switch (block) {
          case 0:
            this.addEmptyBlock(new EmptyBlock(x, y, width, height));
            break;
          case 1:
            this.addRedBlock(new RedBlock(x, y, width, height));
            break;
          case 2:
            this.addOutBlock(new OutBlock(x, y, width, height));
            break;
          case 3:
            this.addPipe(new Pipe(x, y, width, height));
            break;
          case 4:
            this.addDoor(new Door(x, y, width, height));
            break;
          case 5:
            this.addBlueDiamond(new BlueDiamond(x, y, width, height));
            break;
          case 6:
            this.addRedDiamond(new RedDiamond(x, y, width, height));
            break;
          case 7:
            this.addTrophy(new Trophy(x, y, width, height));
            break;
          case 8:
            this.dave = new Dave(x, y, 25, 45, this);
            break;
          case 9:
            this.addBlueBlock(new BlueBlock(x, y, width, height));
            break;
          case 10:
            this.addPinkBlock(new PinkBlock(x, y, width, height));
            break;
          case 11:
            this.addFire(new Fire(x, y, width, height));
            break;
          case 12:
            this.addWater(new Water(x, y, width, height));
            break;
          case 13:
            this.addPlant(new Plant(x, y, width, height));
            break;
          default:
            this.addEmptyBlock(new EmptyBlock(x, y, width, height));
            break;
        }
      });
    });
  };

  draw = () => {
    // console.log(this.levelStatus.current, this.levelStatus.completed);
    if (this.levelStatus.current === this.levelStatus.completed) {
      this.levelUp.draw();
      if (this.levelUp.getAnimationStatus()) {
        this.levelUp = new LevelUp(this.ctx);
        this.levelStatus.current++;
        this.dave.x = 0;
        this.dave.y = 0;
      }
      this.showLevelChange();
      return;
    }

    Object.values(this.items).forEach((item) => {
      item.forEach((block) => {
        block.draw(this.ctx);
      });
    });
    this.dave.draw(this.ctx);
    this.showScore();
    this.showTrophy();
    this.showPassDoor();
  };

  // completeLevel = () => {
  //   if (this.levelStatus.current === this.levelStatus.completed) {
  //     this.levelUp.draw();
  //     if (this.levelUp.getAnimationStatus()) {
  //       this.levelUp = new LevelUp(this.ctx);
  //       this.levelStatus.current++;
  //     }

  //     this.showLevelChange();
  //   }
  // };

  showScore = () => {
    this.ctx.font = "30px Silkscreen";
    this.ctx.fillStyle = "white";

    // Vertical alignment
    this.ctx.textBaseline = "middle";

    this.ctx.fillText(`Score: ${this.achievements.score}`, 100, 25);
  };

  showTrophy = () => {
    this.ctx.font = "30px Silkscreen";
    this.ctx.fillStyle = "white";

    // Vertical alignment
    this.ctx.textBaseline = "middle";

    this.ctx.fillText(`Trophies: ${this.achievements.trophies}`, 400, 25);
  };

  showLevelChange = () => {
    this.ctx.font = "30px Silkscreen";
    this.ctx.fillStyle = "white";

    // Vertical alignment
    this.ctx.textBaseline = "middle";

    this.ctx.fillText(
      `Good work! Moving on to next level`,
      this.ctx.canvas.width / 2,
      50 * 4
    );
  };

  showPassDoor = () => {
    this.ctx.font = "30px Silkscreen";
    this.ctx.fillStyle = "white";

    // Vertical alignment
    this.ctx.textBaseline = "middle";

    // Horizontal alignment
    this.ctx.textAlign = "center";

    this.ctx.fillText(
      `Get trophy to unlock the door`,
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height - 50 / 2
    );
  };
}
