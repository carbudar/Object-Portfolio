const digital = document.querySelector('.digital')
digital.addEventListener('click',() => {
    document.location.href = 'digital.html'
})

const fineArt = document.querySelector('.fineArts')
fineArt.addEventListener('click',() => {
    document.location.href = 'fineArts.html'
})

const electronic = document.querySelector('.electronics')

electronic.addEventListener('click',() => {
    document.location.href = 'electronics.html'
})


// left marquee animaton function
function startAnimation1(container) {
    let position = 0;

    function animate() {
        position -= 1; // move text to the left

        // is position is out of screen, reset back to 0 to restart
        if (Math.abs(position) >= container.scrollWidth / 2) {
            position = 0;
        }
        //tutorial Math.abs from chatGPT
        //Math.abs documentation -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

        container.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate); // Keep looping
    }

    animate(); // Start the animation
}

// right marquee animaton function
function startAnimation2(container) {
    let position = -container.scrollWidth / 2; // Start from half-way before the screen

    function animate() {
        position += 1; // Move text to the right

        // if position is out of view, reset position to before screen
        if (position >= 0) {
            position = -container.scrollWidth / 2;
        }

        container.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate); // Keep looping
    }

    animate(); // Start the animation
}

// Function to generate multiple h2 elements with spacer characters
function loopText(container, text, count) {
    for (let i = 0; i < count; i++) {
        const h2 = document.createElement('h2');
        h2.textContent = text;
        container.appendChild(h2);

        if (i < count) { // add smiley face spacer in between the texts (after each h2)
            const spacer = document.createElement('h2');
            spacer.textContent = '☺';
            container.appendChild(spacer);
        }
    }

    const clone = container.innerHTML; // Duplicate the content for smooth looping
    container.innerHTML += clone;
}

// Initialize animations for each container
document.querySelectorAll('.move-animation1').forEach((container) => {
    const text = container.querySelector('h2').textContent;
    loopText(container, text, 5); // Generate multiple <h2> elements
    startAnimation1(container); // Start left-scrolling animation
});

document.querySelectorAll('.move-animation2').forEach((container) => {
    const text = container.querySelector('h2').textContent;
    loopText(container, text, 5); // Generate multiple <h2> elements
    startAnimation2(container); // Start right-scrolling animation
});
