let yesButtonSize = 1; // Initial size of the Yes button
let gifVisible = true; // Flag to track the visibility of the gif
const distanceFromYesButton = 60; // Constant distance from Yes button
const noButtonMessages = ["No", "Are you sure?", "really sure???", "Please", "Noooooooo", "You're breaking my heart :-(", "You can do it!", "I want only you", "Pleaseeeeee"]; // Array of messages for the No button
let currentMessageIndex = 0; // Index to keep track of the current message

function redirectYes() {
    window.location.href = "yes-page.html";
}

function moveNoButton() {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");
    const question = document.querySelector("h1");
    const gifContainer = document.querySelector(".gif-container");

    // Check if the gif is visible
    if (gifVisible) {
        // Toggle the visibility of the gif
        gifContainer.style.display = "none";
        gifVisible = false;
    }

    // Change the text in the No button
    noButton.innerText = noButtonMessages[currentMessageIndex];
    
    // Increment the index to get the next message in the array
    currentMessageIndex = (currentMessageIndex + 1) % noButtonMessages.length;

    // Increase the size of the Yes button
    yesButtonSize += 0.5;
    yesButton.style.transform = `scale(${yesButtonSize})`;

    // Get the position of the Yes button
    const yesButtonRect = yesButton.getBoundingClientRect();
    const yesButtonX = yesButtonRect.left + yesButton.offsetWidth / 2;

    // Calculate the position of the question
    const questionX = yesButtonX - question.offsetWidth / 2;
    const questionY = yesButtonRect.top - distanceFromYesButton - question.offsetHeight;

    // Set the position of the question
    question.style.position = "absolute";
    question.style.left = questionX + "px";
    question.style.top = questionY + "px";

    // Move the No button
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}