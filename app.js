// Assign a random number from 0 to 2 to [Rock, Paper, Scissors]

function getComputerChoice() {
   let game = ["Rock", "Paper", "Scissors" ]
   let i = Math.floor(Math.random() * 3);
   return game[i];
}

let playerScore = 0;
let computerScore = 0;

let pScore = document.querySelector("#player-score")
let cScore = document.querySelector("#computer-score")
let textScore = document.querySelector("#game-text")

pScore.innerText = playerScore;
cScore.innerText = computerScore;
textScore.innerText = "Let's go!"

let result = document.querySelector("#result")
result.innerText = "Let the games begin!"

// function that assigns the winner of a round

function playRound(playerSelection, computerSelection) {
   if (playerSelection == computerSelection) {
      textScore.innerText = "it's a tie"
   } else if (
   (playerSelection == "Rock" && computerSelection == "Scissors") || 
   (playerSelection == "Paper" && computerSelection == "Rock") ||
   (playerSelection == "Scissors" && computerSelection == "Paper") 
   ){
      textScore.innerText = "You win!"
      pScore.innerText = parseInt(pScore.innerText) + 1;

      if (pScore.innerText == 5) {
         result.innerText = "You won! Reload to play again!";
         winAudio.play();
         disableButtons();
      }
   } else {
         textScore.innerText = "You lose!"
         cScore.innerText = parseInt(cScore.innerText) + 1;

         if(cScore.innerText == 5) {
            result.innerText = "You lost! Reload to play again!";
            loseAudio.play();
            disableButtons();
         }
      }
}


// Disable buttons

function disableButtons() {
   document.querySelector("#button-1").disabled = true;
   document.querySelector("#button-2").disabled = true;
   document.querySelector("#button-3").disabled = true;
}


// Audio  

var clickAudio = new Audio("Audio/arcade-click.wav");
var winAudio = new Audio("Audio/arcade-win.wav")
var loseAudio = new Audio("Audio/arcade-lose.wav")


// Event listeners

const button1 = document.querySelector("#button-1")
const button2 = document.querySelector("#button-2")
const button3 = document.querySelector("#button-3")

button1.addEventListener("click", function() {
   playRound("Rock", getComputerChoice());
   clickAudio.play();
})

button2.addEventListener("click", function() {
   playRound("Paper", getComputerChoice());
   clickAudio.play();
})

button3.addEventListener("click", function() {
   playRound("Scissors", getComputerChoice());
   clickAudio.play();
})

