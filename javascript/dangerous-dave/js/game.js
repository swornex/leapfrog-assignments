import Level from "./level.js";
import LevelUp from "./level-up.js";
import {
  LEVEL1_MAP,
  LEVEL2_MAP1,
  LEVEL2_MAP2,
  LEVEL2_MAP3,
  TEST_MAP
} from "./tile-map.js";

export default class Game {
  static score = 0;
  static currentLevel = 0;

  constructor(ctx) {
    this.ctx = ctx;

    this.levels = {
      0: new Level(TEST_MAP, ctx),
      1: new Level(LEVEL1_MAP, ctx),
      2: new Level(LEVEL2_MAP3, ctx)
    };

    this.levelUp = new LevelUp(this.ctx);
  }

  draw = () => {
    const isLevelCompleted =
      this.levels[Game.currentLevel].getIsLevelCompleted();

    if (isLevelCompleted) {
      this.levelUp.draw();

      if (this.levelUp.getIsAnimationCompleted()) {
        this.levelUp = new LevelUp(this.ctx);
        Game.currentLevel++;
      }

      this.showLevelChange();
    } else {
      this.levels[Game.currentLevel].draw();
    }
    this.showScore();
    this.showTrophy();
  };

  showScore = () => {
    this.ctx.font = "30px Silkscreen";
    this.ctx.fillStyle = "white";

    // Vertical alignment
    this.ctx.textBaseline = "middle";

    this.ctx.fillText(`Score: ${Game.score}`, 150, 25);
  };

  showTrophy = () => {
    this.ctx.font = "30px Silkscreen";
    this.ctx.fillStyle = "white";

    // Vertical alignment
    this.ctx.textBaseline = "middle";

    const trophiesCollected =
      this.levels[Game.currentLevel].getTrophiesCollected();

    this.ctx.fillText(`Trophies: ${trophiesCollected}`, 400, 25);
  };

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
