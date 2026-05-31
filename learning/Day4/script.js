// let userGuess = +prompt("Guess a number form 1 - 100");
let guess = Math.floor(Math.random() * 100) + 1;

let attempt = 0;
let remaining = 10;
function game(userGuess, guess) {
  let message = document.querySelector("#message");
  let attemptTxt = document.querySelector("#attempts");
  let remainingTxt = document.querySelector("#remaining");
  if (userGuess > guess) {
    message.textContent = "Too - High!";
    message.style.display = "block";
    message.classList.remove("too-low");
    message.classList.add("too-high");
    attempt++;
    remaining--;
    attemptTxt.textContent = attempt;
    remainingTxt.textContent = remaining;
  } else if (userGuess === guess) {
    message.textContent = "Correct!";
    message.style.display = "block";
    message.classList.remove("too-high");
    message.classList.remove("too-low");
    message.classList.add("correct");
  } else {
    message.textContent = "Too - Low!";
    message.style.display = "block";
    message.classList.remove("too-high");
    message.classList.add("too-low");
    attempt++;
    remaining--;
    attemptTxt.textContent = attempt;
    remainingTxt.textContent = remaining;
  }
}

let guessBtn = document.querySelector("#guessBtn");
let guessInput = document.querySelector("#guessInput");
guessBtn.addEventListener("click", () => {
  game(+guessInput.value, guess);
});
