import _BaseEnemy from "./_base.js";

export default class RedSpiral extends _BaseEnemy {
  constructor(x, y, width, height) {
    super({
      x,
      y,
      width,
      height,
      radius: 90,
      speed: 4,
      health: 2,
      srcX: 320,
      srcY: 0,
      shootAngle: 2
    });
  }
}
