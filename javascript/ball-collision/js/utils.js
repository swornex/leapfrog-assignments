// function getRandomNumber(min = 0, max = 0) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function getRandomNumber(min = 0, max = 0) {
  let num = 0;
  while (num === 0) {
    num = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return num;
}

function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
