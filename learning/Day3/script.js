let userGuess = +prompt("Guess a number form 1 - 100");
function game(userGuess) {
  let Guess = Math.floor(Math.random() * 100) + 1;
  let atempt = 0;
  console.log(Guess);
  while (userGuess !== Guess) {
    if (userGuess > Guess) {
      userGuess = +prompt("Your guess is higher than the original guess");
      atempt++;
    } else {
      userGuess = +prompt("Your guess is lower that the originale guess");
      atempt++;
    }
  }
  alert("Your guess is right and your attempt was " + atempt);
}

game(userGuess);
