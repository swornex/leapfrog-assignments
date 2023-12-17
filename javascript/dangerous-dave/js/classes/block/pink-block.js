import { pinkBlock } from "../../images.js";
import _BaseBlock from "./_base.js";

export default class PinkBlock extends _BaseBlock {
  constructor(x, y, width, height) {
    super(x, y, width, height, 0, 0, pinkBlock);
  }
}
