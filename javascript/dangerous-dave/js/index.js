import End from "./classes/state/end.js";
import Start from "./classes/state/start.js";
import { GAME_STATES } from "./constants/game.js";
import { setGameState, gameState } from "./game-state.js";
import Play from "./classes/play.js";
import { resetDave } from "./utils.js";
import Help from "./classes/state/help.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the initial game state
setGameState({
  current: GAME_STATES.START,
  startScreen: new Start(ctx),
  endScreen: new End(ctx),
  playScreen: new Play(ctx),
  helpScreen: new Help(ctx)
});

// Change the state of the game according to the keys pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && gameState.current === GAME_STATES.START) {
    gameState.playScreen = new Play(ctx);
    gameState.current = GAME_STATES.PLAY;
  } else if (e.key === "Enter" && gameState.current === GAME_STATES.END) {
    resetDave();
    gameState.current = GAME_STATES.START;
  } else if (e.key === "H" || e.key === "h") {
    gameState.current = GAME_STATES.HELP;
  } else if (e.key === "Enter" && gameState.current === GAME_STATES.HELP) {
    gameState.current = GAME_STATES.START;
  }
});

/**
 * Animate the canvas based on the current game state.
 *
 * @return {void} No return value.
 */
const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (gameState.current === GAME_STATES.START) {
    gameState.startScreen.draw();
  } else if (gameState.current === GAME_STATES.PLAY) {
    gameState.playScreen.draw();
  } else if (gameState.current === GAME_STATES.END) {
    gameState.endScreen.draw();
  } else if (gameState.current === GAME_STATES.HELP) {
    gameState.helpScreen.draw();
  }

  requestAnimationFrame(animate);
};

animate();
