let count = 0; 
let level = 1;
let timeout = 10;
let gameOver = false;
let remainingTime = 10;

function handleClick() {
  if (gameOver) return;
  count++;
  if (count === 3) { 
    alert(`You won level ${level}!`);
    count = 0; 
    level++;
    timeout -= 1;
    if (level === 7) { 
      alert("Congratulations, you beat the game!");
      stopGame();
      return;
    }
    remainingTime = timeout;
    document.getElementById("countdown").textContent = remainingTime;
  }


  const button = document.getElementById("myButton");

  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  
  var buttonWidth = button.offsetWidth;
  var buttonHeight = button.offsetHeight;
  
  var randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
  var randomY = Math.floor(Math.random() * (screenHeight - buttonHeight));
  
  button.style.position = "absolute";
  button.style.left = randomX + "px";
  button.style.top = randomY + "px";



}

const button = document.getElementById("myButton");


button.addEventListener("click", handleClick);

function stopGame() {
  clearTimeout(timeoutID);
  button.removeEventListener("click", handleClick);
  gameOver = true;
}


function updateTimer() {
  remainingTime--;
  document.getElementById("countdown").textContent = remainingTime;
  if (remainingTime === 0) {
    stopGame();
    alert("Time's up!");
  } else {
    setTimeout(updateTimer, 10);
  }
}

// Set timeout for button movement
let timeoutID;
function moveButton() {
  if (gameOver) return; // If game is over, exit function
  // Set timeout for next button movement
  timeoutID = setTimeout(() => {
    moveButton();
  }, timeout);
}

// Start the game
updateTimer(); // Start countdown timer
moveButton(); // Start button movement


