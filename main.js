function fadeOnScroll() {
    const content = document.querySelector('.intro-parent');
    const scrollY = window.scrollY;
    console.log("Current scroll y: ", window.scrollY);
    const fadeStart = 0;
    const fadeUntil = 200;
    let opacity = 1;
    let scale = 1;
    if (scrollY <= fadeStart) opacity = 1;
    else if (scrollY >= fadeUntil) {
        opacity = 0;
        scale = 0.8;
    }
    else {
        const fraction = (scrollY - fadeStart) / (fadeUntil - fadeStart);
        opacity = 1 - fraction;
        scale = 1 - (0.2 * fraction);

    }
    content.style.opacity = opacity;
    content.style.transform = `scale(${scale})`;
}

window.addEventListener('scroll', fadeOnScroll); 