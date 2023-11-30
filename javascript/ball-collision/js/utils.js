/**
 * returns a random number between min and max
 *
 * @param {number} min
 * @param {number} max
 * @returns number
 */
function getRandomNumber(min = 0, max = 0) {
  let num = 0;
  while (num === 0) {
    num = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return num;
}

/**
 * returns a random color
 *
 * @returns string
 */
function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

/**
 * returns the distance between two points
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns number
 */
function calculateDistance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}
