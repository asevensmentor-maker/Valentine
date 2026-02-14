let current = 1;
const progress = document.getElementById("progress");

// Floating hearts
const bg = document.querySelector(".hearts-bg");
setInterval(() => {
  const h = document.createElement("span");
  h.innerHTML = "💖";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = 5 + Math.random() * 5 + "s";
  bg.appendChild(h);
  setTimeout(() => h.remove(), 10000);
}, 500);

// Navigation
function nextScreen(n) {
  document.querySelector(".screen.active").classList.remove("active");
  document.getElementById(`screen${n}`).classList.add("active");
  progress.style.width = (n - 1) * 25 + "%";
}

// YES / NO logic
let noCount = 0;
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.onclick = () => nextScreen(2);
noBtn.onclick = () => {
  noCount++;
  noBtn.style.transform = `translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;
  yesBtn.style.transform = `scale(${1 + noCount*0.2})`;
  if (noCount > 5) noBtn.style.display = "none";
};

// Why you hearts
document.querySelectorAll(".heart").forEach(h => {
  h.onclick = () => {
    h.textContent = h.dataset.text;
    h.classList.add("revealed");
  };
});

// Balloon game
const balloons = document.getElementById("balloons");
let popped = 0;
for (let i = 0; i < 3; i++) {
  const b = document.createElement("div");
  b.className = "balloon";
  b.onclick = () => {
    b.remove();
    popped++;
    if (popped === 3) nextScreen(5);
  };
  balloons.appendChild(b);
}

// Final letter typing
const finalText = document.getElementById("finalText");
const message =
  "Loving you isn’t just a feeling — it’s my favorite adventure.\n\n" +
  "In your smile, I find my happiness.\n" +
  "In your tears, I promise my strength.\n\n" +
  "No matter what life brings,\n" +
  "I am right here — holding you,\n" +
  "choosing you, every single day.\n\n" +
  "You are my today,\n" +
  "my tomorrow,\n" +
  "and every heartbeat in between.\n\n" +
  "Forever yours ❤️✨";

let i = 0;
function typeWriter() {
  if (i < message.length) {
    finalText.textContent += message.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

document.getElementById("screen5").addEventListener("transitionstart", typeWriter);
