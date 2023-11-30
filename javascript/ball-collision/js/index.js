//initialize an array to store ball objects
const ballsArr = [];

//get reference to the container element and set its width and height
const container = document.querySelector(".container");
container.style.width = CONTAINER_WIDTH + "px";
container.style.height = CONTAINER_HEIGHT + "px";

//function to create balls with random properties
const createBalls = (noOfBalls = 100) => {
  for (let i = 0; i < noOfBalls; i++) {
    //create a new Ball object with random position, size, and color
    const ball = new Ball(
      getRandomNumber(0 + BALL_WIDTH / 2, CONTAINER_WIDTH - BALL_WIDTH),
      getRandomNumber(0 + BALL_WIDTH / 2, CONTAINER_HEIGHT - BALL_WIDTH),
      getRandomNumber(10, 20),
      getRandomColor()
    );

    //add the created ball to the array
    ballsArr.push(ball);
  }
};

//call the function to create balls
createBalls();

//function to handle the animation effect
const animationEffect = () => {
  //request the next animation frame
  requestAnimationFrame(animationEffect);

  //iterate over each ball in the array
  ballsArr.forEach((ball) => {
    //check for collision with container walls
    ball.checkWallCollision();

    //iterate over each other ball in the array
    ballsArr.forEach((otherBall) => {
      //check for collision between two different balls
      if (ball !== otherBall) {
        ball.checkBallCollision(otherBall);
      }
    });

    //move and draw the current ball
    ball.move();
    ball.draw();
  });
};

//start the animation loop
animationEffect();
