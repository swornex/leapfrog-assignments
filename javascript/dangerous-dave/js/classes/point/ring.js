import _BasePoint from "./base.js";

export default class Ring extends _BasePoint {
  constructor(x, y, width, height) {
    super(x, y, width, height, 1000, 256, 0);
  }
}
