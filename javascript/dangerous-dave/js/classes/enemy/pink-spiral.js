import _BaseEnemy from "./_base.js";

export default class PinkSpiral extends _BaseEnemy {
  constructor(x, y, width, height) {
    super({
      x,
      y,
      width,
      height,
      radius: 90,
      speed: 4,
      health: 2,
      srcX: 2 * 64 + 96,
      srcY: 0
    });
  }
}
