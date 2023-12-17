import _BaseEnemy from "./base.js";

export default class Spider extends _BaseEnemy {
  constructor(x, y, width, height) {
    super({
      x,
      y,
      width,
      height,
      radius: 50,
      speed: 4,
      health: 1,
      srcX: 128,
      srcY: 0,
      shootAngle: 6
    });
  }
}
