import _BasePipe from "./base.js";

export default class UpPipe extends _BasePipe {
  constructor(x, y, width, height) {
    super(x, y, width, height, 128, 0);
  }
}
