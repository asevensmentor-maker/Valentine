const progress = document.getElementById("progress");
const screens = document.querySelectorAll(".screen");

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
function goTo(n) {
  document.querySelector(".screen.active").classList.remove("active");
  document.getElementById(`screen${n}`).classList.add("active");
  progress.style.width = (n - 1) * 25 + "%";
}

// YES / NO
let noCount = 0;
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.onclick = () => goTo(2);
noBtn.onclick = () => {
  noCount++;
  noBtn.style.transform =
    `translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;
  yesBtn.style.transform = `scale(${1 + noCount*0.2})`;
  if (noCount >= 6) noBtn.style.display = "none";
};

// Why you hearts
document.querySelectorAll(".heart").forEach(h => {
  h.onclick = () => {
    h.textContent = h.dataset.text;
    h.classList.add("revealed");
  };
});

// Balloon game with image reveal
const balloons = document.getElementById("balloons");
const popImage = document.getElementById("popImage");
const images = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let popped = 0;

for (let i = 0; i < 3; i++) {
  const b = document.createElement("div");
  b.className = "balloon";

  b.onclick = () => {
    const pop = document.createElement("div");
    pop.className = "pop";
    pop.style.left = b.offsetLeft + "px";
    pop.style.top = b.offsetTop + "px";
    balloons.appendChild(pop);

    setTimeout(() => pop.remove(), 600);
    b.remove();

    popImage.querySelector("img").src = images[popped];
    popImage.classList.remove("hidden");

    popped++;
    if (popped === 3) {
      setTimeout(() => {
        goTo(5);
        typeWriter();
      }, 1200);
    }
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
