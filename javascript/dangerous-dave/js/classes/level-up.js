import BlueBlock from "./block/blue-block.js";
import EmptyBlock from "./block/empty-block.js";
import Door from "./door.js";
import Dave from "./dave.js";
import { LEVEL_CHANGE_MAP } from "../constants/tile-map.js";

class LevelUp {
  /**
   * Constructs a new instance of the class.
   * @param {CanvasRenderingContext2D} ctx
   */
  constructor(ctx) {
    this.ctx = ctx;

    this.items = {
      blueBlocks: [],
      emptyBlocks: [],
      doors: []
    };

    this.dave = null;
    this.init();
  }

  /**
   * Initializes the level according to the tile map.
   */
  init = () => {
    LEVEL_CHANGE_MAP.forEach((row, yIndex) => {
      row.forEach((column, xIndex) => {
        const x = xIndex * 50;
        const y = yIndex * 50;
        const width = 50;
        const height = 50;

        if (column === "BB") {
          this.items.blueBlocks.push(new BlueBlock(x, y, width, height));
        } else if (column === "EB") {
          this.items.emptyBlocks.push(new EmptyBlock(x, y, width, height));
        } else if (column === "DO") {
          this.items.doors.push(new Door(x, y, width, height));
        } else if (column === "DA") {
          this.dave = new Dave(x, y, 50, 50, undefined, true);
        }
      });
    });
  };

  /**
   * Draws the level.
   */
  draw = () => {
    Object.values(this.items).forEach((item) => {
      item.forEach((block) => {
        block.draw(this.ctx);
      });
    });

    this.dave.draw(this.ctx);
  };

  /**
   * Checks if the animation is completed.
   * @returns {boolean}
   */
  getIsAnimationCompleted = () => {
    return this.dave.x >= this.ctx.canvas.width;
  };
}

export default LevelUp;
