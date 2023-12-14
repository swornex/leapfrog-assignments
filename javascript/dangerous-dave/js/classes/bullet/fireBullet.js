import { fireBullets } from "../../images.js";
import _BaseBullet from "./_base.js";

export default class FireBullet extends _BaseBullet {
  constructor(x, y, width, height) {
    super(x, y, bullets, 32, 0, width, height);
  }
}
