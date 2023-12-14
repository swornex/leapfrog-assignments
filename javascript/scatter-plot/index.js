const container = document.querySelector(".container");

function setStyle(el, styles = {}) {
  Object.keys(styles).forEach((styleName) => {
    const styleValue = styles[styleName];

    el.style[styleName] = styleValue;
  });
}

function toPX(value) {
  return `${value}px `;
}

class Box {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;

    this.element = document.createElement("div");

    setStyle(this.element, {
      width: toPX(this.width),
      height: toPX(this.height),
      backgroundColor: this.color,
      position: "absolute",
      borderRadius: "50%",
      top: toPX(this.x),
      left: toPX(this.y)
    });
    container.append(this.element);
  }
}

function getRandomInt(min = 0, max = 0) {
  return Math.floor(Math.random() * (max - min)) + min;
}

for (i = 0; i < 100; i++) {
  new Box(
    20,
    20,
    "#DFCDE4",
    getRandomInt(0 + 20, 500 - 20),
    getRandomInt(0 + 20, 500 - 20)
  );
}

const boxOne = new Box(20, 20, "#DFCDE4", 0 + 10, 0 + 10);
