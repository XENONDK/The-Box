// Name: Slides
// Author: Lukas Vendel Mann
// Version: 1.0.0
// Description: This is a simple slideshow script that can be used to create a slideshow with a set of images, heading and description.
// Props:
// - images: Array of objects with the following properties:
//   - src: The source of the image
//   - alt: The alt text of the image
//   - heading: The heading of the slide
//   - description: The description of the slide
export default class Slides {
    display;
    images;
    slides = [];
    currentSlideNumber = 0;
    constructor(display, images) {
        if (!display) {
            throw new Error("The display element is not defined.");
        }
        if (images.length < 1) {
            throw new Error("No images provided");
        }
        this.display = display;
        this.images = images;
        this.createSlides();
        const previous = document.createElement("button");
        previous.classList.add("slide-button");
        previous.classList.add("slide-previous");
        previous.innerHTML = "Previous";
        previous.addEventListener("click", () => {
            this.previousSlide();
        });
        this.display.appendChild(previous);
        const next = document.createElement("button");
        next.classList.add("slide-button");
        next.classList.add("slide-next");
        next.innerHTML = "Next";
        next.addEventListener("click", () => {
            this.nextSlide();
        });
        this.display.appendChild(next);
        this.showSlide(this.currentSlideNumber);
    }
    createSlides() {
        this.slides = [];
        this.images.forEach((image, index) => {
            const slide = document.createElement("div");
            slide.classList.add("slide");
            const img = document.createElement("img");
            img.classList.add("slide-image");
            img.src = image.src;
            img.alt = image.alt;
            slide.appendChild(img);
            if (image.heading || image.description) {
                const text = document.createElement("div");
                text.classList.add("slide-text");
                if (image.heading) {
                    const heading = document.createElement("p");
                    heading.classList.add("slide-heading");
                    heading.innerHTML = image.heading;
                    text.appendChild(heading);
                }
                if (image.description) {
                    const description = document.createElement("p");
                    description.classList.add("slide-description");
                    description.innerHTML = image.description;
                    text.appendChild(description);
                }
                slide.appendChild(text);
            }
            slide.classList.add("slide-fade-in");
            this.slides.push(slide);
        });
    }
    showSlide(index) {
        // Remove current slide
        if (this.display.children.length > 2) {
            this.display.removeChild(this.display.children[1]);
        }
        // Add new slide
        this.display.insertBefore(this.slides[index], this.display.children[1]);
    }
    nextSlide() {
        // If the current slide is not the last slide
        if (this.currentSlideNumber < this.slides.length - 1) {
            this.currentSlideNumber++;
            this.showSlide(this.currentSlideNumber);
        }
        else {
            this.currentSlideNumber = 0;
            this.showSlide(this.currentSlideNumber);
        }
    }
    previousSlide() {
        // If the current slide is not the first slide
        if (this.currentSlideNumber > 0) {
            this.currentSlideNumber--;
            this.showSlide(this.currentSlideNumber);
        }
        else {
            this.currentSlideNumber = this.slides.length - 1;
            this.showSlide(this.currentSlideNumber);
        }
    }
}
