import Level from "./level.js";
import LevelUp from "./level-up.js";
import {
  LEVEL1_MAP,
  LEVEL2_MAP,
  LEVEL3_MAP,
  LEVEL4_MAP,
  LEVEL5_MAP,
  TEST_MAP
} from "../constants/tile-map.js";
import { gameState } from "../game-state.js";
import { GAME_STATES } from "../constants/game.js";

export default class Play {
  static score = 0;
  static initialLevel = 1;
  static currentLevel = Play.initialLevel;
  static lives = 3;

  /**
   * Constructs a new instance of the class.
   * @param {CanvasRenderingContext2D} ctx
   */
  constructor(ctx) {
    this.ctx = ctx;

    // Manage map according to the level
    this.levels = {
      0: new Level(TEST_MAP, ctx), // for testing
      1: new Level(LEVEL1_MAP, ctx),
      2: new Level(LEVEL2_MAP, ctx),
      3: new Level(LEVEL3_MAP, ctx),
      4: new Level(LEVEL4_MAP, ctx),
      5: new Level(LEVEL5_MAP, ctx)
    };

    this.levelUp = new LevelUp(this.ctx);
  }

  /**
   * Draws the current level.
   *
   * @returns {void}
   */
  draw = () => {
    const currentLevel = this.levels[Play.currentLevel];

    if (!currentLevel || Play.lives - 1 < 0) {
      gameState.current = GAME_STATES.END;
      return;
    }

    const isLevelCompleted = currentLevel.getIsLevelCompleted();

    if (isLevelCompleted) {
      this.levelUp.draw();

      if (this.levelUp.getIsAnimationCompleted()) {
        this.levelUp = new LevelUp(this.ctx);
        Play.currentLevel++;
      }

      this.showLevelChange();
    } else {
      this.levels[Play.currentLevel].draw();
    }
    this.showScore();
    this.showTrophy();
    this.showLives();
  };

  /**
   * Shows the score on the screen.
   */
  showScore = () => {
    this.ctx.font = "30px Silkscreen";
    this.ctx.fillStyle = "white";

    // Vertical alignment
    this.ctx.textBaseline = "middle";

    // Horizontal alignment
    this.ctx.textAlign = "start";

    this.ctx.fillText(`Score: ${Play.score}`, 25, 25);
  };

  /**
   * Shows the trophies on the screen.
   */
  showTrophy = () => {
    this.ctx.font = "30px Silkscreen";
    this.ctx.fillStyle = "white";

    // Vertical alignment
    this.ctx.textBaseline = "middle";

    // Horizontal alignment
    this.ctx.textAlign = "center";

    const trophiesCollected =
      this.levels[Play.currentLevel]?.getTrophiesCollected();

    this.ctx.fillText(
      `Trophies: ${trophiesCollected}`,
      this.ctx.canvas.width / 2,
      25
    );
  };

  /**
   * Shows the lives on the screen.
   */
  showLives = () => {
    this.ctx.font = "30px Silkscreen";
    this.ctx.fillStyle = "white";

    // Vertical alignment
    this.ctx.textBaseline = "middle";

    // Horizontal alignment
    this.ctx.textAlign = "end";

    this.ctx.fillText(`Lives: ${Play.lives}`, this.ctx.canvas.width - 25, 25);
  };

  /**
   * Shows the level change text on the screen.
   */
  showLevelChange = () => {
    this.ctx.font = "30px Silkscreen";
    this.ctx.fillStyle = "white";

    // Vertical alignment
    this.ctx.textBaseline = "middle";

    // Horizontal alignment
    this.ctx.textAlign = "center";

    this.ctx.fillText(
      `Good work! Moving on to next level`,
      this.ctx.canvas.width / 2,
      50 * 4
    );
  };
}
