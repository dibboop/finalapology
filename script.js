// Get buttons
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const message = document.getElementById("message");

// Make the "No" button move away when hovered over
noButton.addEventListener("mouseover", function () {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

// When "Yes" is clicked
yesButton.addEventListener("click", function () {
    message.innerHTML = "Yay! I love you 💖💖💖";
    yesButton.style.display = "none";
    noButton.style.display = "none";
});
