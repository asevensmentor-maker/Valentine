document.addEventListener("DOMContentLoaded", () => {

  let noCount = 0;

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const question = document.getElementById("question");
  const reaction = document.getElementById("reaction");

  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popupImg");
  const popupText = document.getElementById("popupText");

  popup.classList.add("hidden"); // force hide on load

  const messages = [
    "Are you sure? 🥺",
    "Please think again 💔",
    "My heart is shaking 😭",
    "Don’t do this to me 💘",
    "Okay… last chance 😢"
  ];

  yesBtn.addEventListener("click", yesClicked);
  noBtn.addEventListener("click", noClicked);

  function noClicked() {
    noCount++;

    noBtn.style.transform =
      `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;

    yesBtn.style.transform = `scale(${1 + noCount * 0.2})`;

    question.innerText =
      messages[Math.min(noCount - 1, messages.length - 1)];

    reaction.innerText = "My heart is beating faster 💓";

    if (noCount >= 6) {
      noBtn.style.display = "none";
      reaction.innerText = "You can’t escape love 😌💖";
    }
  }

  function yesClicked() {
    document.getElementById("valentineScreen").classList.add("hidden");
    document.getElementById("nextScreen").classList.remove("hidden");
  }

  window.startMagic = function () {
    document.getElementById("nextScreen").classList.add("hidden");
    document.getElementById("balloonScreen").classList.remove("hidden");
  };

  let surprises = [
    { img: "photo1.jpg", text: "You are not just my love — you are my home ❤️" },
    { img: "photo2.jpg", text: "Growing together with you is my biggest blessing 💍" },
    { img: "photo3.jpg", text: "Every moment with you feels like magic ✨" }
  ];

  let remaining = surprises.length;
  document.getElementById("remaining").innerText = remaining;

  window.popBalloon = function (index) {
    if (!surprises[index]) return;

    popupImg.src = surprises[index].img;
    popupText.innerText = surprises[index].text;
    popup.classList.remove("hidden");

    surprises[index] = null;
    remaining--;
    document.getElementById("remaining").innerText = remaining;

    if (remaining === 0) {
      setTimeout(() => {
        popup.classList.add("hidden");
        document.getElementById("balloonScreen").classList.add("hidden");
        document.getElementById("finalScreen").classList.remove("hidden");
      }, 800);
    }
  };

  window.closePopup = function () {
    popup.classList.add("hidden");
  };

});
