import { walls } from "../../images.js";
import _BaseBlock from "./base.js";

export default class RedBlock extends _BaseBlock {
  constructor(x, y, width, height) {
    super(x, y, width, height, 64, 0, walls);
  }
}
