import { gameOver } from "../../sounds.js";
import Play from "../play.js";
import _BaseState from "./base.js";

export default class Help extends _BaseState {
  /**
   * Constructs a new instance of the class.
   * @param {CanvasRenderingContext2D} ctx
   */
  constructor(ctx) {
    super(ctx, 50, "Press Enter to Return to Start");

    this.ctx = ctx;

    this.boxWidth = 800;
    this.boxHeight = 300;
  }

  /**
   * Draws a box on the canvas.
   */
  drawBox() {
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(
      this.ctx.canvas.width / 2 - this.boxWidth / 2,
      200,
      this.boxWidth,
      this.boxHeight
    );

    this.ctx.strokeStyle = "black";
    this.ctx.strokeRect(
      this.ctx.canvas.width / 2 - (this.boxWidth - 100) / 2,
      250,
      this.boxWidth - 100,
      this.boxHeight - 100
    );
  }

  /**
   * Draws the text on the help screen.
   */
  draw() {
    this.drawBanner();

    this.drawBox();

    this.drawText();

    this.ctx.font = "18px Silkscreen";
    this.ctx.fillStyle = "Black";
    this.ctx.textAlign = "center";

    this.ctx.fillText(
      `LeftArrow: Left  |  RightArrow: Right`,
      this.ctx.canvas.width / 2,
      300
    );
    this.ctx.fillText(
      `UpArrow: Jump  |  DownArrow: Down (only for Jetpack)`,
      this.ctx.canvas.width / 2,
      350
    );
    this.ctx.fillText(
      `Control: Shoot  |  Space: Jetpack`,
      this.ctx.canvas.width / 2,
      400
    );
  }
}
