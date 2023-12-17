import { gameOver, success } from "../../sounds.js";
import _BaseState from "./base.js";

export default class Start extends _BaseState {
  /**
   * Constructs a new instance of the class.
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  constructor(ctx) {
    super(ctx, 20, "Press Enter to Start");
  }

  /**
   * Draws the tiles on the canvas.
   */
  drawTiles() {
    this.blocks.forEach((block) => {
      block.draw(this.ctx);
    });
  }

  /**
   * Draws the start screen.
   */
  draw() {
    gameOver.pause();
    gameOver.currentTime = 0;

    success?.play();

    this.drawTiles();

    this.drawBanner();

    this.drawText();
  }
}
