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
    console.log(this.containerWidth, this.containerHeight);

    this.createElement();
  }

  //move ball by dx and dy
  move() {
    const tempX = this.x + this.dx * SPEED;
    const tempY = this.y + this.dy * SPEED;

    //checks if the ball is going out of the container in x position
    if (tempX + this.radius * 2 >= this.containerWidth) {
      this.x = this.containerWidth - this.radius * 2;
    } else if (tempX <= 0) {
      this.x = 0;
    } else {
      this.x += this.dx * SPEED;
    }

    //checks if the ball is going out of the container in y position
    if (tempY <= 0) {
      this.y = 0;
    } else if (tempY + this.radius * 2 >= this.containerHeight) {
      this.y = this.containerHeight - this.radius * 2;
    } else {
      this.y += this.dy * SPEED;
    }
  }

  //set style to the element
  setStyle(el, styles = {}) {
    Object.keys(styles).forEach((styleName) => {
      const styleValue = styles[styleName];

      el.style[styleName] = styleValue;
    });
  }

  //create element div
  createElement() {
    this.element = document.createElement("div");
    this.draw();
    this.container.appendChild(this.element);
  }

  //draw the element
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

  //check if the ball is colliding with the wall
  checkWallCollision = () => {
    //right collision
    if (this.x + this.radius * 2 >= this.containerWidth) {
      this.dx = -Math.abs(this.dx);
    }

    //left collision
    if (this.x <= 0) {
      this.dx = Math.abs(this.dx);
    }

    //top collision
    if (this.y <= 0) {
      this.dy = Math.abs(this.dy);
    }

    //bottom collision
    if (this.y + this.radius * 2 >= this.containerHeight) {
      this.dy = -Math.abs(this.dy);
    }
  };

  //check if the ball is colliding with other ball
  checkBallCollision = (ball) => {
    const distance = calculateDistance(ball.x, ball.y, this.x, this.y);

    if (distance < this.radius + ball.radius) {
      this.resolveCollision(ball);
    }
  };

  //resolve collision between two balls using vector
  resolveCollision = (ball) => {
    //calculate the distance between the centers of the two balls
    const distance = calculateDistance(ball.x, ball.y, this.x, this.y);

    //calculate the vector from this ball to the other ball
    const vecX = ball.x - this.x;
    const vecY = ball.y - this.y;

    //normalize the vector to get a unit vector
    const normVecX = vecX / distance;
    const normVecY = vecY / distance;

    //calculate the relative velocity vector
    const relativeVecX = this.dx - ball.dx;
    const relativeVecY = this.dy - ball.dy;

    //calculate the speed at which the balls are approaching each other
    const speed = relativeVecX * normVecX + relativeVecY * normVecY;

    //check if the balls are moving away from each other
    if (speed < 0) {
      //balls are already moving away, no need to resolve collision
      return;
    }

    //update velocities to simulate collision response
    this.dx -= speed * normVecX;
    this.dy -= speed * normVecY;
    ball.dx += speed * normVecX;
    ball.dy += speed * normVecY;
  };
}
