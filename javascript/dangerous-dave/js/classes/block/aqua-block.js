import { walls } from "../../images.js";
import _BaseBlock from "./_base.js";

export default class AquaBlock extends _BaseBlock {
  constructor(x, y, width, height) {
    super(x, y, width, height, 320, 0, walls);
  }
}
