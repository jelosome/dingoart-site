const image = document.getElementById("canvas-image");
let brightness = 100;
let scale = 1;

document.getElementById("increase-brightness").addEventListener("click", () => {
    brightness += 10;
    image.style.filter = `brightness(${brightness}%)`;
});

document.getElementById("zoom-in").addEventListener("click", () => {
    scale += 0.1;
    image.style.transform = `scale(${scale})`;
});

document.getElementById("zoom-out").addEventListener("click", () => {
    if (scale > 0.5) {
        scale -= 0.1;
        image.style.transform = `scale(${scale})`;
    }
});
