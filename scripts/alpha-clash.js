// function play() {
//   // hide the home section when click play button to add hidden class in help of (classList)
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   // show the play ground section
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }

function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;

  // stop the game if player pressed (Esc)
  if (playerPressed === "Escape") {
    gameOver();
  }

  // get the expected press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(playerPressed, expectedAlphabet);

  // check right or wrong key is pressed
  if (playerPressed === expectedAlphabet) {
    // console.log("You got a point !");

    //update the score :
    // 1. get the current score
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);

    // 2. increase the score by 1
    const newScore = currentScore + 1;

    // 3. show the update score
    currentScoreElement.innerText = newScore;

    // start a new round
    removeBackGroundColorById(expectedAlphabet);
    continueGame();
  } else {
    // get the current life score
    const currentLifeElement = document.getElementById("current-life");
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);

    // decrease the current life score
    const newLife = currentLife - 1;

    // display the update life value
    currentLifeElement.innerText = newLife;
    if (newLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  const alphabet = getRandomAlphabet();
  //   console.log("Your random alphabet", alphabet);

  // show current generated alphabet (show it)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  //set background color to alphabet
  setBackGroundColorById(alphabet);
}

function play() {
  // hide everything show only playground
  hideElementById("home-screen");
  hideElementById("last-score");
  showElementById("play-ground");

  // reset score and life
  setElementValueById("current-life", 5);
  setElementValueById("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("last-score");

  // update final score
  // 1. get the final score
  const endScore = getElementValueById("current-score");
  // console.log(endScore);
  setElementValueById("end-score", endScore);

  // clear the last highlight selected alphabet
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackGroundColorById(currentAlphabet);
}
