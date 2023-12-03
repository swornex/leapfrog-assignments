import Platform from "./platform.js";

class MovingPlatform extends Platform {
  constructor(x, y, width, height, ctx, speedX) {
    // Call the constructor of the base class (Platform)
    super(x, y, width, height, ctx);

    this.speedX = speedX || 2; // Speed of horizontal movement (adjust as needed)
    this.direction = 1; // Initial direction (1 for right, -1 for left)
  }

  // Override the draw method to provide specific behavior for MovingPlatform
  draw() {
    const img = new Image();
    img.src = "assets/images/moving-platform.png";
    this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }

  // Add the updatePosition method specific to MovingPlatform
  updatePosition() {
    // Update the platform's x position based on the direction and speed
    this.x += this.speedX * this.direction;

    // Check boundaries to change direction when reaching the edges
    if (this.x + this.width > canvas.width) {
      this.direction = -1; // Change direction to move left
    } else if (this.x < 0) {
      this.direction = 1; // Change direction to move right
    }
  }
}

export default MovingPlatform;
