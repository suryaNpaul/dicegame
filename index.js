function randomDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomImage1 = "./images/dice" + randomNumber1 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", randomImage1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImage2 = "./images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
  } else {
    document.querySelector("h1").innerHTML = "Tied Refresh again!!";
  }
  var dice_sound = new Audio("dice_sound2.mp3");
  dice_sound.play();
}

function loaderToggle() {
  const loading = document.getElementById("loader");
  loading.style.display = "none";
}

// document.querySelector("button").addEventListener("click", randomDice);