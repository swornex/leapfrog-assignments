/**
 * Returns the image path for the given name.
 *
 * @param {string} name - The name of the image.
 * @returns {string} The image path.
 */
function getImagePath(name) {
  return `../assets/images/${name}.png`;
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

const walls = getImageInstance("blocks");
const doors = getImageInstance("doors");
const items = getImageInstance("items");
const trophies = getImageInstance("trophies");
const players = getImageInstance("players");
const pinkBlock = getImageInstance("pink-block");
const fire = getImageInstance("fires");
const water = getImageInstance("waters");
const plants = getImageInstance("plants");
const dangers = getImageInstance("dangers");
const bullets = getImageInstance("bullets");
const fireBullets = getImageInstance("fire-bullets");
const jetPacks = getImageInstance("jet-pack");

export {
  walls,
  doors,
  items,
  trophies,
  players,
  pinkBlock,
  fire,
  water,
  plants,
  dangers,
  bullets,
  fireBullets,
  jetPacks
};
