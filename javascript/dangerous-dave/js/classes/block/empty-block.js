import { walls } from "../../images.js";
import _BaseBlock from "./_base.js";

export default class EmptyBlock extends _BaseBlock {
  constructor(x, y, width, height) {
    super(x, y, width, height, 0, 0, walls);
  }
}
