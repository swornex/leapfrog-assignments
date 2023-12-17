import { fire } from "../../images.js";
import _BaseDanger from "./_base.js";

export default class Fire extends _BaseDanger {
  constructor(x, y, width, height) {
    const imageCoordinates = [
      [0, 0],
      [64, 0],
      [128, 0],
      [192, 0]
    ];

    super(x, y, width, height, fire, imageCoordinates);
  }
}
