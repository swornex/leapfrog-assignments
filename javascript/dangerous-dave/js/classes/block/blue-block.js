import { walls } from "../../images.js";
import _BaseBlock from "./base.js";

export default class BlueBlock extends _BaseBlock {
  constructor(x, y, width, height) {
    super(x, y, width, height, 128, 0, walls);
  }
}
