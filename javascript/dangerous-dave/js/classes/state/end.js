import BlueBlock from "../block/blue-block.js";
import EmptyBlock from "../block/empty-block.js";
import Fire from "../danger/fire.js";
import { banners } from "../../images.js";
import OutBlock from "../block/out-block.js";
import { START_MAP } from "../../constants/tile-map.js";
import Crown from "../point/crown.js";

export default class End {
  constructor(ctx) {
    this.ctx = ctx;
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

  animate() {
    this.frameCount++;

    if (this.frameCount % this.frameSpeed === 0) {
      this.currentFrame = ++this.currentFrame % this.imageCoordinates.length;
    }
  }

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
      20,
      this.width,
      this.height
    );
  }

  drawTiles() {
    this.blocks.forEach((block) => {
      block.draw(this.ctx);
    });
  }

  drawText() {
    this.ctx.font = "30px Silkscreen";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      "Press Enter to Start",
      this.ctx.canvas.width / 2 - 200,
      this.ctx.canvas.height - 50
    );
  }

  draw() {
    this.drawTiles();

    this.drawBanner();

    this.drawText();
  }
}
