const ballsArr = [];

const createBalls = (noOfBalls = 100) => {
  for (let i = 0; i < noOfBalls; i++) {
    const ball = new Ball(
      getRandomNumber(0 + BALL_WIDTH / 2, 500 - BALL_WIDTH),
      getRandomNumber(0 + BALL_WIDTH / 2, 500 - BALL_WIDTH),
      BALL_WIDTH / 2,
      getRandomColor()
    );

    ballsArr.push(ball);
  }
};

createBalls();

const animationEffect = () => {
  requestAnimationFrame(animationEffect);
  ballsArr.forEach((ball) => {
    ball.move();
    ball.draw();
    ball.checkWallCollision(0, 0);
  });
};

animationEffect();
