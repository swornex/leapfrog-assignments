class ImageCarousel {
  constructor(imageArr, height = 500, width = 800) {
    this.imageArr = imageArr;
    this.width = width;
    this.height = height;
    this.currentIndex = 0;
    this.fps = 120 / 1000;
    this.createCarousel();
    this.start();
  }

  createCarousel() {
    this.body = document.querySelector("body");

    this.mainContainer = document.createElement("div");
    this.mainContainer.className = "main-container";

    this.carouselContainer = document.createElement("div");
    this.carouselContainer.className = "carousel-container";

    this.createCarouselElements();

    this.carouselSlide.append(this.carouselImgWrapper);

    this.carouselContainer.append(this.prevBtn);
    this.carouselContainer.append(this.carouselSlide);
    this.carouselContainer.append(this.nextBtn);

    this.mainContainer.append(this.carouselContainer);
    this.mainContainer.append(this.indicators);
    this.body.append(this.mainContainer);

    this.addEventListeners();
  }

  createCarouselElements() {
    this.createIndicators();
    this.createButtons();
    this.createImageElements();
  }

  createIndicators() {
    this.indicators = document.createElement("div");
    this.indicators.className = "indicators";

    for (let i = 0; i < this.imageArr.length; i++) {
      const indicator = document.createElement("button");
      indicator.className = "btn";
      indicator.id = `btn${i}`;
      indicator.style.backgroundColor = i === 0 ? "#B74628" : "#DCE994";
      this.indicators.append(indicator);
    }
  }

  createButtons() {
    this.prevBtn = this.createButton("prevBtn", "<");
    this.nextBtn = this.createButton("nextBtn", ">");
  }

  createButton(id, text) {
    const button = document.createElement("button");
    button.className = "carousel-btn";
    button.id = id;
    button.innerText = text;
    return button;
  }

  createImageElements() {
    this.carouselSlide = document.createElement("div");
    this.carouselSlide.className = "carousel-slide";
    this.carouselSlide.style.width = `${this.width}px`;
    this.carouselSlide.style.height = `${this.height}px`;

    this.carouselImgWrapper = document.createElement("div");
    this.carouselImgWrapper.className = "carousel-img-wrapper";
    const imgWrapperWidth = this.imageArr.length * this.width;
    this.carouselImgWrapper.style.width = `${imgWrapperWidth}px`;
    this.carouselImgWrapper.style.marginLeft = 0;

    for (let i = 0; i < this.imageArr.length; i++) {
      const image = document.createElement("img");
      image.setAttribute("src", this.imageArr[i]);
      image.setAttribute("alt", `image${i + 1}`);
      image.setAttribute("width", `${this.width}px`);
      image.setAttribute("height", `${this.height}px`);
      this.carouselImgWrapper.append(image);
    }
  }

  addEventListeners() {
    this.nextBtn.addEventListener("click", () => {
      clearInterval(this.interval);

      this.disableButtons();

      const increment = this.currentIndex === this.imageArr.length - 1 ? 1 : -1;

      this.currentIndex = (this.currentIndex + 1) % this.imageArr.length;
      this.updateIndicators();
      this.slideImages(increment);
    });

    this.prevBtn.addEventListener("click", () => {
      clearInterval(this.interval);

      this.disableButtons();

      const increment = this.currentIndex === 0 ? -1 : 1;

      this.currentIndex =
        (this.currentIndex - 1 + this.imageArr.length) % this.imageArr.length;
      this.updateIndicators();
      this.slideImages(increment);
    });

    const indicators = document.querySelectorAll(".btn");

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        this.disableButtons();
        const increment = index > this.currentIndex ? -1 : 1;

        this.currentIndex = index;
        this.updateIndicators();
        this.slideImages(increment);
      });
    });
  }

  updateIndicators() {
    const indicators = document.querySelectorAll(".btn");

    indicators.forEach((indicator, index) => {
      indicator.style.backgroundColor =
        index === this.currentIndex ? "#B74628" : "#DCE994";
    });
  }

  slideImages(increment) {
    clearInterval(this.interval);

    const margin = this.currentIndex * this.width;

    const interval = setInterval(() => {
      this.carouselImgWrapper.style.marginLeft = `${
        parseInt(this.carouselImgWrapper.style.marginLeft) + increment
      }px`;

      if (parseInt(this.carouselImgWrapper.style.marginLeft) === -margin) {
        clearInterval(interval);

        this.enableButtons();

        this.start();
      }
    }, this.fps);
  }

  disableButtons() {
    this.prevBtn.disabled = true;
    this.prevBtn.style.cursor = "not-allowed";

    this.nextBtn.disabled = true;
    this.nextBtn.style.cursor = "not-allowed";

    const indicators = document.querySelectorAll(".btn");

    indicators.forEach((indicator) => {
      indicator.disabled = true;
      indicator.style.cursor = "not-allowed";
    });
  }

  enableButtons() {
    this.prevBtn.disabled = false;
    this.prevBtn.style.cursor = "pointer";

    this.nextBtn.disabled = false;
    this.nextBtn.style.cursor = "pointer";

    const indicators = document.querySelectorAll(".btn");

    indicators.forEach((indicator) => {
      indicator.disabled = false;
      indicator.style.cursor = "pointer";
    });
  }

  start() {
    this.interval = setInterval(() => {
      this.disableButtons();

      const increment = this.currentIndex === this.imageArr.length - 1 ? 1 : -1;

      this.currentIndex = (this.currentIndex + 1) % this.imageArr.length;

      this.updateIndicators();
      this.slideImages(increment);
    }, 3000);
  }
}

// Create an instance of ImageCarousel
new ImageCarousel([
  "https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=",
  "https://media.istockphoto.com/id/637268486/photo/patan.jpg?s=612x612&w=0&k=20&c=IHL_X9XMlTKCFjXMAdJTr3dLoJTN-Vvn5QsYfNtnkgc=",
  "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://media.tacdn.com/media/attractions-splice-spp-720x480/0f/e4/f4/a8.jpg",
  "https://www.himalayanwonders.com/siteblog/wp-content/uploads/2015/03/monkey-temple-kathmandu.jpg"
]);
