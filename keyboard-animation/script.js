const texts = document.querySelector(".texts");
const container = document.querySelector(".container");
const firstRow = document.querySelector(".first-row");
const secondRow = document.querySelector(".second-row");
const thirdRow = document.querySelector(".third-row");
const spaceBar = document.querySelector(".space-bar");

const keys = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "space-bar",
];
const colors = ["#43c6ac", "green", "yellow", "red", "blue"];
let enteredText = [];

const createKeyboard = () => {
  keys.forEach((key, idx) => {
    const keyEl = document.createElement("p");
    keyEl.innerText = key;
    keyEl.id = key;

    if (idx < 10) firstRow.appendChild(keyEl);
    else if (idx > 9 && idx < 19) secondRow.appendChild(keyEl);
    else if (idx > 18 && idx < 26) thirdRow.appendChild(keyEl);
    else if (idx > 25) {
      keyEl.innerHTML = " ";
      spaceBar.appendChild(keyEl);
    }
  });
};

//getting user input
window.addEventListener("keydown", (e) => {
  const enteredKey = e.key;

  keys.forEach((key) => {
    if (enteredKey === key) {
      animateKeyboard(key);
    } else if (enteredKey === " ") {
      animateKeyboard("space-bar");
    }
  });

  if (enteredKey === "Enter") {
    enteredText = [];
  } else if (enteredKey === "Backspace") {
    enteredText.pop();
  } else {
    enteredText.push(enteredKey);
  }

  updateTexts(enteredText);
});

//set background color of entered keys
const animateKeyboard = (key) => {
  const enteredKeyEl = document.getElementById(key);
  const color = getRandomColor();
  let color2 = getRandomColor();

  enteredKeyEl.style.background = "linear-gradient(45deg, yellow, green)";
  enteredKeyEl.style.color = "#fff";

  if (key === "space-bar") {
    while (color === color2) {
      color2 = getRandomColor();
    }
    enteredKeyEl.style.background = `linear-gradient(45deg, ${color}, ${color2})`;
  }

  setTimeout(() => {
    enteredKeyEl.style.background = "";
    enteredKeyEl.style.color = "";
  }, 1000);
};

const updateTexts = (arr) => {
  inputedText = arr.join("");
  texts.innerText = inputedText;
};

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

createKeyboard();
