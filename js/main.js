// Select elements
const card = document.querySelector(".card");
const music = document.getElementById("music");
const heartsContainer = document.querySelector(".hearts");
const balloonsBg = document.querySelector(".balloons-bg");

// Toggle card open/close
function openCard() {
    card.classList.toggle("open");

    if (card.classList.contains("open")) {
        music.play();
        releaseHearts();
        launchBalloonsBg(); // <- now works!
    } else {
        music.pause();
        music.currentTime = 0;
        heartsContainer.innerHTML = '';
        document.querySelector(".balloon-bg-container").innerHTML = '';
    }

    // Hearts animation
    function releaseHearts() {
        heartsContainer.innerHTML = '';
        for (let i = 0; i < 12; i++) {
            const heart = document.createElement("div");
            heart.className = "heart";
            heart.style.left = (Math.random() * 120 - 60) + "px";
            heart.style.animationDelay = (Math.random() * 0.5) + "s";
            heartsContainer.appendChild(heart);
        }
    }

    // Background red balloons
    function launchBalloonsBg() {
        const container = document.querySelector(".balloon-bg-container"); // matches HTML
        container.innerHTML = ''; // clear old balloons

        for (let i = 0; i < 8; i++) {
            const balloon = document.createElement("div");
            balloon.className = "balloon-bg";
            balloon.style.left = `${Math.random() * 100}%`;
            balloon.style.animationDelay = `${Math.random() * 2}s`;
            container.appendChild(balloon);
        }
    }
}