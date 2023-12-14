import { bullets } from "../../images.js";
import _BaseBullet from "./_base.js";

export default class Bullet extends _BaseBullet {
  constructor(x, y, width, height) {
    super(x, y, bullets, 32, 0, width, height);
  }
}
