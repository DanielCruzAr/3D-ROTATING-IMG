let playBtn = document.getElementById("play");
let backwardBtn = document.getElementById("backward");
let forwardBtn = document.getElementById("forward");
let container = document.querySelector(".container");
let playIcon = document.querySelector(".play-icon");
let pauseIcon = document.querySelector(".pause-icon");
const spans = document.querySelectorAll(".container span");

playBtn.addEventListener("click", () => {
    const currentState = window
        .getComputedStyle(container)
        .getPropertyValue("animation-play-state");

    if (currentState === "paused") {
        container.style.animationPlayState = "running";
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
    } else if (currentState === "running") {
        container.style.animationPlayState = "paused";
        pauseIcon.style.display = "none";
        playIcon.style.display = "block";
    }
});

forwardBtn.addEventListener("click", () => {
    setSpanPositions();
    container.style.animationDuration = "5s";
});

backwardBtn.addEventListener("click", () => {
    setSpanPositions();
    container.style.animationDuration = "20s";
});

const setSpanPositions = () => {
    spans.forEach((span) => {
        const computedStyle = getComputedStyle(span);
        const iValue = computedStyle.getPropertyValue("--i");
        // transfor the span to the new position
        span.style.transform = `rotateY(calc(var(${iValue}) * 45deg)) translateZ(450px);`;
    });
};
