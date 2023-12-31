import _BaseEnemy from "./base.js";

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
      srcX: 224,
      srcY: 0,
      shootAngle: 4
    });
  }
}
