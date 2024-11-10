// function play() {
//   // hide the home section when click play button to add hidden class in help of (classList)
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   // show the play ground section
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }

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
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
