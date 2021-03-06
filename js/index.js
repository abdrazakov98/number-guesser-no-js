let min = 1,
  max = 10,
  winningNum = Math.floor(Math.random() * 10) + 1,
  // winningNum = 2,
  guessesLeft = 3;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // validation
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Нужно ввести число от ${min} до ${max}`, "red");
  }

  // check if won
  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.border = "1px solid green";
    setMessage(`Поздравляю! Вы угадали число ${winningNum}`, "green");

    guessBtn.textContent = "Новая игра";
    if ((guessBtn.textContent = "Новая игра")) {
      guessBtn.addEventListener("click", newGame);
    }
  } else if (guess !== winningNum && guess >= min && guess <= max) {
    guessInput.style.border = "1px solid red";
    reduceAttempts = attempts.textContent--; 
    setMessage(
      `${guess} - не угадали, осталось папыток: ${reduceAttempts} `,
      "red"
    );
  }
  if (reduceAttempts === 0) {
    guessInput.disabled = true;
    guessBtn.textContent = "Новая игра";
    setMessage(
      `Игра окончена, Вы проиграли.Было загадано число: ${winningNum}`
    );
    if ((guessBtn.textContent = "Новая игра")) {
      guessBtn.addEventListener("click", newGame);
    }
  }

  guessInput.value = "";
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
function newGame() {
  location.reload();
}

const attempts = document.createElement("span");
attempts.textContent = "2";
attempts.style.display = "none";
message.appendChild(attempts);