import { fireBullets } from "../../images.js";
import _BaseBullet from "./base.js";

export default class FireBullet extends _BaseBullet {
  constructor(x, y, width, height) {
    super(x, y, fireBullets, 0, 0, width, height, -3);
  }
}
