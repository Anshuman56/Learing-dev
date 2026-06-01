// let userGuess = +prompt("Guess a number form 1 - 100");
let guess = Math.floor(Math.random() * 100) + 1;

let message = document.querySelector("#message");
let attemptTxt = document.querySelector("#attempts");
let remainingTxt = document.querySelector("#remaining");
let guessBtn = document.querySelector("#guessBtn");
let guessInput = document.querySelector("#guessInput");

let attempt = 0;
let remaining = 10;
function game(userGuess, guess) {
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Enter a number between 1 to 100";
    return;
  }

  message.style.display = "block";
  message.classList.remove("too-low", "too-high", "correct");

  if (userGuess > guess) {
    message.textContent = "Too - High!";
    message.classList.add("too-high");
  } else if (userGuess === guess) {
    message.textContent = "Correct!";
    message.classList.add("correct");
    guessBtn.disabled = true;
    return;
  } else {
    message.textContent = "Too - Low!";
    message.classList.add("too-low");
  }
  attempt++;
  remaining--;
  attemptTxt.textContent = attempt;
  remainingTxt.textContent = remaining;

  if (remaining === 0) {
    message.textContent = `Game Over! The number was ${guess}`;
    guessBtn.disabled = true;
  }
}

function handleGuess() {
  game(+guessInput.value, guess);
  guessInput.value = "";
  guessInput.focus();
}
guessBtn.addEventListener("click", handleGuess);

guessInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") handleGuess();
});
