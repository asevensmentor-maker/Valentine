let noCount = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const reaction = document.getElementById("reaction");

const messages = [
  "Are you sure? 🥺",
  "Please think again 💔",
  "My heart is shaking 😭",
  "Don’t do this to me 💘",
  "Okay… last chance 😢"
];

function noClicked() {
  noCount++;

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  yesBtn.style.transform = `scale(${1 + noCount * 0.2})`;

  question.innerText = messages[Math.min(noCount - 1, messages.length - 1)];
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
