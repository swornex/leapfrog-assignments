export const keys = {
  ArrowLeft: false,
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false
};

//when keys is pressed
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      keys.ArrowLeft = true;
      break;
    case "ArrowRight":
      keys.ArrowRight = true;
      break;
    case "ArrowUp":
      keys.ArrowUp = true;
      break;
    case "ArrowDown":
      keys.ArrowDown = true;
      break;
  }
});

//when keys is released
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      keys.ArrowLeft = false;
      break;
    case "ArrowRight":
      keys.ArrowRight = false;
      break;
    case "ArrowUp":
      keys.ArrowUp = false;
      break;
    case "ArrowDown":
      keys.ArrowDown = false;
      break;
  }
});
