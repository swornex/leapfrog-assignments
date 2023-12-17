import Map from "./map.js";

export default class Level {
  /**
   * Constructs a new instance of the class.
   * @param {Map} map
   * @param {CanvasRenderingContext2D} ctx
   */
  constructor(map, ctx) {
    this.map = map;
    this.ctx = ctx;

    this.mapStates = {
      initial: 0,
      current: 0,
      total: this.map.length - 1
    };

    this.jetPack = {
      initialFuel: 1000,
      fuel: 1000,
      isOn: false,
      isCarried: false,
      toggleDelay: 500,
      lastToggled: 0
    };

    this.gun = {
      isCarried: false,
      shootDelay: 500,
      lastShot: 0,
      bullets: []
    };

    this.maps = [];
    this.totalTrophies = 1;

    this.achievements = {
      trophiesCollected: 0,
      hasReachedDoorAfterTrophy: false
    };

    this.init();
  }

  drawJetPackInfo() {
    if (!this.jetPack.isCarried) {
      return;
    }

    this.ctx.font = "30px Silkscreen";
    this.ctx.fillStyle = "white";

    // Vertical alignment
    this.ctx.textBaseline = "center";

    // Horizontal alignment
    this.ctx.textAlign = "start";

    this.ctx.fillText(
      `Jetpack - Fuel: ${this.jetPack.fuel}`,
      25,
      this.ctx.canvas.height - 50 / 2
    );
  }

  drawGun() {
    if (!this.gun.isCarried) {
      return;
    }

    this.ctx.font = "30px Silkscreen";
    this.ctx.fillStyle = "white";

    // Vertical alignment
    this.ctx.textBaseline = "center";

    // Horizontal alignment
    this.ctx.textAlign = "end";

    this.ctx.fillText(
      "Gun",
      this.ctx.canvas.width - 25,
      this.ctx.canvas.height - 50 / 2
    );
  }

  /**
   * Initializes the maps according to the level
   */
  init() {
    this.map.forEach((map) => {
      this.maps.push(new Map(map, this));
    });
  }

  /**
   * Draws the level according to the current map state
   */
  draw() {
    this.maps[this.mapStates.current].draw();

    this.drawJetPackInfo();

    this.drawGun();
  }

  getIsLevelCompleted() {
    return this.maps[this.mapStates.current].getIsLevelCompleted();
  }

  getTrophiesCollected() {
    return this.achievements.trophiesCollected;
  }
}
