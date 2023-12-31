import { gameOver } from "../../sounds.js";
import Play from "../play.js";
import _BaseState from "./base.js";

export default class End extends _BaseState {
  /**
   * Constructs a new instance of the class.
   *
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
   * Draws the text on the gameover screen.
   */
  draw() {
    gameOver.play();

    this.drawBanner();

    this.drawBox();

    this.drawText();

    this.ctx.font = "50px Silkscreen";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";

    if (Play.lives - 1 < 0) {
      this.ctx.fillText("You Lost!", this.ctx.canvas.width / 2, 300);
    } else if (Play.currentLevel === 5) {
      this.ctx.fillText("You Won!", this.ctx.canvas.width / 2, 300);
    }

    this.ctx.fillText(`Score: ${Play.score}`, this.ctx.canvas.width / 2, 400);
  }
}
