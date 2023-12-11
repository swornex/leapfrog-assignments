import OutBlock from "./out-block.js";
import EmptyBlock from "./empty-block.js";
import { LEVEL1_MAP } from "./levels.js";
import RedBlock from "./red-block.js";
import Trophy from "./trophy.js";
import Pipe from "./pipe.js";
import BlueDiamond from "./blue-diamond.js";
import RedDiamond from "./red-diamond.js";
import Door from "./door.js";
import Dave from "./dave.js";

export default class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.achievements = {
      trophies: 0,
      score: 0
    };

    //for collision purpose
    this.items = {
      redBlocks: [],
      trophies: [],
      redDiamonds: [],
      blueDiamonds: [],
      emptyBlocks: [],
      outBlocks: [],
      pipes: [],
      doors: []
    };

    this.dave = null;

    this.init();
  }

  addRedBlock = (redWall) => {
    this.items.redBlocks.push(redWall);
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
            this.dave = new Dave(x, y, 40, 40, this.items, this.achievements);
            break;
          default:
            this.addEmptyBlock(new EmptyBlock(x, y, width, height));
            break;
        }
      });
    });
  };

  draw = () => {
    Object.values(this.items).forEach((item) => {
      item.forEach((block) => {
        block.draw(this.ctx);
      });
    });
    this.dave.draw(this.ctx);
    this.showScore();
    this.showPassDoor();
  };

  showScore = () => {
    // console.log(this.achievements.score);

    this.ctx.font = "30px Silkscreen";
    this.ctx.fillStyle = "white";

    // Vertical alignment
    this.ctx.textBaseline = "middle";

    this.ctx.fillText(`Score: ${this.achievements.score}`, 10, 25);
  };

  showPassDoor = () => {
    this.ctx.font = "30px Silkscreen";
    this.ctx.fillStyle = "white";

    // Vertical alignment
    this.ctx.textBaseline = "middle";

    // Horizontal alignment
    // this.ctx.textAlign = "center";

    this.ctx.fillText(
      `You pass the door`,
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height - 50 / 2
    );
  };
}
