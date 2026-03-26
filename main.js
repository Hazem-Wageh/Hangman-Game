let category = document.querySelector(".category span");
let hangmanDraw = document.querySelector(".hangman-draw");
let theStand = document.querySelector(".the-stand");
let theHang = document.querySelector(".the-hang");
let theRope = document.querySelector(".the-rope");
let head = document.querySelector(".the-man .head");
let body = document.querySelector(".the-man .body");
let hands = document.querySelector(".the-man .hands");
let legs = document.querySelector(".the-man .legs");
let lettersEl = document.querySelector(".letters");
let lettersGuess = document.querySelector(".letters-guess");

const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);

lettersArray.forEach((letter) => {
  let span = document.createElement("span");
  span.className = "letter-box";
  let spanText = document.createTextNode(letter);
  span.appendChild(spanText);
  lettersEl.appendChild(span);
});

const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};
let wordsKey = Object.keys(words);
let wordsKeyRandom = Math.floor(Math.random() * wordsKey.length);
let wordsKeyRandomName = wordsKey[wordsKeyRandom];

category.innerHTML = wordsKeyRandomName;
let wordsValue = words[wordsKeyRandomName];
let wordsValueRandom = Math.floor(Math.random() * wordsValue.length);
let wordsValueName = wordsValue[wordsValueRandom];

let lettersSpanGuess = Array.from(wordsValueName);

let wrong = 0;

lettersSpanGuess.forEach((letter) => {
  let span = document.createElement("span");
  if (letter === " ") {
    span.className = "with-space";
  }
  lettersGuess.appendChild(span);
});
let lettersGuessSpan = document.querySelectorAll(".letters-guess span");

document.addEventListener("click", (e) => {
  let theStatus = false;
  let chosenWord = Array.from(wordsValueName.toLowerCase());
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let char = e.target.innerHTML.toLowerCase();
    chosenWord.forEach((word, index) => {
      if (char == word) {
        theStatus = true;
        lettersGuessSpan.forEach((span, spanIndex) => {
          if (index === spanIndex) {
            span.innerHTML = char;
          }
        });
      }
    });
    if (theStatus !== true) {
      wrong++;
      hangmanDraw.classList.add(`wrong-${wrong}`);
      if (wrong === 8) {
        endGame();
        lettersEl.classList.add("finished");
      } else {
        if (wrong < 8) {
          lettersEl.classList.add("finished");
          winGame();
        }
      }
    }
  }
});
function endGame() {
  let div = document.createElement("div");
  let divText = document.createTextNode(`Game Over the word ${wordsValueName}`);
  div.appendChild(divText);
  div.className = "popup";
  document.body.appendChild(div);
}
function winGame() {
  let div = document.createElement("div");
  let divText = document.createTextNode(
    `Congratiz you win the word ${wordsValueName}`,
  );
  div.appendChild(divText);
  div.className = "popup";
  document.body.appendChild(div);
}

console.log(lettersSpanGuess);
