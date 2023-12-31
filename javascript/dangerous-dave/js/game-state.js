export const gameState = {};

/**
 * Set the game state.
 * @param {Object} state
 */
export const setGameState = (state) => {
  gameState.current = state.current;
  gameState.startScreen = state.startScreen;
  gameState.endScreen = state.endScreen;
  gameState.playScreen = state.playScreen;
  gameState.helpScreen = state.helpScreen;
};
