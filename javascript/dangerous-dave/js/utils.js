import Play from "./classes/play.js";

/**
 * Checks if two rectangles collide with each other.
 *
 * @param {Object} rect1 - The first rectangle object with properties x, y, width, and height.
 * @param {Object} rect2 - The second rectangle object with properties x, y, width, and height.
 * @returns {boolean} - Returns true if the rectangles collide, otherwise false.
 */
export const checkCollision = (rect1, rect2) => {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
};

/**
 * Resets the state of the game for Dave.
 */
export const resetDave = () => {
  Play.score = 0;
  Play.currentLevel = Play.initialLevel;
  Play.lives = 3;
};

/**
 * Returns the image path for the given name.
 *
 * @param {string} name - The name of the image.
 * @returns {string} The image path.
 */
function getImagePath(name) {
  return `/leapfrog-assignments/javascript/dangerous-dave/assets/images/${name}.png`;
}

/**
 * Creates a new Image instance with the specified name.
 *
 * @param {string} name - The name of the image.
 * @returns {Image} - The created Image instance.
 */
export function getImageInstance(name) {
  const img = new Image();

  img.src = getImagePath(name);

  return img;
}

/**
 * Returns the sound path for the given name.
 *
 * @param {string} name - The name of the sound.
 * @returns {string} The sound path.
 */
function getSoundPath(name) {
  return `/leapfrog-assignments/javascript/dangerous-dave/assets/sounds/${name}.mp3`;
}

/**
 * Creates a new Sound instance with the specified name.
 *
 * @param {string} name - The name of the Sound.
 * @returns {Audio} - The created Sound instance.
 */
export function getSoundInstance(name) {
  const sound = new Audio();

  sound.src = getSoundPath(name);

  return sound;
}
