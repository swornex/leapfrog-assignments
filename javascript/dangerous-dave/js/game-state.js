export const gameState = {};

export const setGameState = (state) => {
  gameState.current = state.current;
  gameState.startScreen = state.startScreen;
  gameState.endScreen = state.endScreen;
  gameState.playScreen = state.playScreen;
};
