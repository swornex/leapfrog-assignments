import { getSoundInstance } from "./utils.js";

const success = getSoundInstance("success");
const jump = getSoundInstance("jump");
const shoot = getSoundInstance("shoot");
const elementCollide = getSoundInstance("element-collide");
const gameOver = getSoundInstance("game-over");
const enemyCollide = getSoundInstance("enemy-collide");
const pointCollide = getSoundInstance("point");

export {
success,
jump,
shoot,
elementCollide,
enemyCollide,
gameOver,
pointCollide
};
