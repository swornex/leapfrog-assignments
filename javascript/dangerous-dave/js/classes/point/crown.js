import _BasePoint from "./base.js";

export default class Crown extends _BasePoint {
  constructor(x, y, width, height) {
    super(x, y, width, height, 1500, 384, 0);
  }
}
