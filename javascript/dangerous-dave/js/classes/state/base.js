import { START_MAP } from "../../constants/tile-map.js";
import { banners } from "../../images.js";
import EmptyBlock from "../block/empty-block.js";
import OutBlock from "../block/out-block.js";
import Fire from "../danger/fire.js";
import Crown from "../point/crown.js";

export default class _BaseState {
  /**
   * Initializes a new instance of the _BaseState class.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} bannerY
   * @param {String} text
   */
  constructor(ctx, bannerY, text) {
    if (new.target === _BaseState) {
      throw new TypeError("Cannot construct _BaseState instances directly");
    }

    this.ctx = ctx;
    this.bannerY = bannerY;
    this.text = text;

    this.image = banners;

    this.blocks = [];

    this.imageCoordinates = [
      [0, 0],
      [112, 0],
      [224, 0],
      [336, 0]
    ];

    this.frameCount = 0;
    this.currentFrame = 0;
    this.frameSpeed = 10;
    this.height = 120;
    this.width = 280;

    this.init();
  }

  init = () => {
    START_MAP.forEach((row, yIndex) => {
      row.forEach((column, xIndex) => {
        const x = xIndex * 50;
        const y = yIndex * 50;
        const width = 50;
        const height = 50;

        if (column === "OB") {
          this.blocks.push(new OutBlock(x, y, width, height));
        } else if (column === "EB") {
          this.blocks.push(new EmptyBlock(x, y, width, height));
        } else if (column === "CR") {
          this.blocks.push(new Crown(x, y, width, height));
        } else if (column === "FI") {
          this.blocks.push(new Fire(x, y, width, height));
        }
      });
    });
  };

  /**
   * Animates the element.
   */
  animate() {
    this.frameCount++;

    if (this.frameCount % this.frameSpeed === 0) {
      this.currentFrame = ++this.currentFrame % this.imageCoordinates.length;
    }
  }

  /**
   * Draws a banner on the canvas.
   */
  drawBanner() {
    this.animate();

    const [srcX, srcY] = this.imageCoordinates[this.currentFrame];

    this.ctx.drawImage(
      this.image,
      srcX,
      srcY,
      112,
      47,
      this.ctx.canvas.width / 2 - this.width / 2,
      this.bannerY,
      this.width,
      this.height
    );
  }

  /**
   * Draws the text on the canvas.
   */
  drawText() {
    this.ctx.font = "30px Silkscreen";
    this.ctx.fillStyle = "white";

    // Vertical alignment
    this.ctx.textBaseline = "middle";

    // Horizontal alignment
    this.ctx.textAlign = "center";

    this.ctx.fillText(
      this.text,
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height - 50
    );
  }
}
