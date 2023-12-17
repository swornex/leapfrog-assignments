import { plants } from "../../images.js";
import _BaseDanger from "./_base.js";

export default class Plant extends _BaseDanger {
  constructor(x, y, width, height) {
    const imageCoordinates = [
      [0, 0],
      [64, 0],
      [128, 0],
      [192, 0]
    ];

    super(x, y, width, height, plants, imageCoordinates);
  }
}
