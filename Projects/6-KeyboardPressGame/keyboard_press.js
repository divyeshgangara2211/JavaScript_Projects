let lastPressedKey = null; // Track the last pressed key

document.addEventListener("keydown", function (event) {
    let detailsBox = document.getElementById("details");

    // Prevent continuous rotation if the same key is held down
    if (event.key === lastPressedKey) return;

     // Ignore modifier keys (Shift, Ctrl, Alt, Meta)
     if (event.key === "Shift" || event.key === "Control" || event.key === "Alt" || event.key === "Meta") {
        return; // Stop execution for these keys
    }

    // Update last pressed key
    lastPressedKey = event.key;

    // Display the pressed key in an animated box
    detailsBox.style.display = "block";
    detailsBox.innerHTML = `You pressed: <span class="bounce">${event.key.toUpperCase()}</span> 🎉`;

    // Generate a random emoji confetti
    let emojiArray = ["🎈", "🎉", "✨", "🎊", "😍", "😊", "🌟", "💖", "🚀"];
    let emoji = document.createElement("span");
    emoji.classList.add("emoji");
    emoji.innerHTML = emojiArray[Math.floor(Math.random() * emojiArray.length)];

    // Position emoji randomly on the screen
    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(emoji);

    // Remove emoji after animation
    setTimeout(() => {
        emoji.remove();
    }, 2000);

    // Reset lastPressedKey after a small delay (so next press rotates again)
    setTimeout(() => {
        lastPressedKey = null;
    }, 500);
});
