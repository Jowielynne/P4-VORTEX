// CAROUSEL.
const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach(button => {
    button.addEventListener("click", () => {
        changeSlide(button.dataset.carouselButton === "next" ? 1 : -1);
    });
});

function changeSlide(offset) {
    const slides = document.querySelector('[data-carousel] [data-slides]');
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
}

setInterval(() => {
    changeSlide(1);
}, 7000);
