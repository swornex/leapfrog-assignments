import { trees } from "../../images.js";
import _BaseBlock from "./_base.js";

export default class Star extends _BaseBlock {
  constructor(x, y, width, height) {
    super(x, y, width, height, 128, 0, trees);
  }
}
