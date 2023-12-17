import { walls } from "../../images.js";
import _BaseBlock from "./base.js";

export default class OutBlock extends _BaseBlock {
  constructor(x, y, width, height) {
    super(x, y, width, height, 192, 0, walls);
  }
}
