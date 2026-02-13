let surprises = [
  {
    img: "images/photo1.jpg",
    text: "You are not just my love — you are my home ❤️"
  },
  {
    img: "images/photo2.jpg",
    text: "We have grown together for 6 years, and marrying you is my best decision 💍"
  },
  {
    img: "images/photo3.jpg",
    text: "Every moment with you is my favorite memory 💖"
  }
];

let remaining = surprises.length;

function startGame() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");
}

function popBalloon(index) {
  if (!surprises[index]) return;

  document.getElementById("popupImg").src = surprises[index].img;
  document.getElementById("popupText").innerText = surprises[index].text;
  document.getElementById("popup").classList.remove("hidden");

  surprises[index] = null;
  remaining--;
  document.getElementById("remaining").innerText = remaining;

  if (remaining === 0) {
    setTimeout(showFinal, 800);
  }
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

function showFinal() {
  document.getElementById("gameScreen").classList.add("hidden");
  document.getElementById("finalScreen").classList.remove("hidden");
}
