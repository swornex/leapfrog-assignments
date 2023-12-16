import Map from "./map.js";

export default class Level {
  constructor(map, ctx) {
    this.map = map;
    this.ctx = ctx;

    this.mapStates = {
      initial: 0,
      current: 0,
      total: this.map.length - 1
    };

    this.jetPack = {
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

  init() {
    this.map.forEach((map) => {
      this.maps.push(new Map(map, this));
    });
  }

  draw() {
    this.maps[this.mapStates.current].draw();
  }

  getIsLevelCompleted() {
    return this.maps[this.mapStates.current].getIsLevelCompleted();
  }

  getTrophiesCollected() {
    return this.achievements.trophiesCollected;
  }
}
