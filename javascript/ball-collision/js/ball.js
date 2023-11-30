class Ball {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = "#" + color;

    this.dx = getRandomNumber(-1, 1);
    this.dy = getRandomNumber(-1, 1);

    this.container = document.querySelector(".container");
    this.containerWidth = this.container.offsetWidth;
    this.containerHeight = this.container.offsetHeight;

    this.createElement();
  }

  move() {
    // this.checkWallCollision(0, 0);
    this.x += this.dx * SPEED;
    this.y += this.dy * SPEED;
  }

  setStyle(el, styles = {}) {
    Object.keys(styles).forEach((styleName) => {
      const styleValue = styles[styleName];

      el.style[styleName] = styleValue;
    });
  }

  createElement() {
    this.element = document.createElement("div");
    this.draw();
    this.container.appendChild(this.element);
  }

  draw() {
    this.setStyle(this.element, {
      position: "absolute",
      left: this.x + "px",
      top: this.y + "px",
      width: this.radius * 2 + "px",
      height: this.radius * 2 + "px",
      backgroundColor: this.color,
      borderRadius: "50%"
    });
  }

  checkWallCollision = (boundaryTop, boundaryLeft) => {
    if (this.x < boundaryLeft || this.x + BALL_WIDTH > this.containerWidth) {
      this.dx = -this.dx;
    }
    if (this.y < boundaryTop || this.y + BALL_HEIGHT > this.containerHeight) {
      this.dy = -this.dy;
    }
  };
}
