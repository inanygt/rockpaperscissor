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
   } else {
         textScore.innerText = "You lose!"
         cScore.innerText = parseInt(cScore.innerText) + 1;
      }
}

// Function to play 5 rounds and keep score and give the winner at the end

function game() {
      for (let i = 0; i < 5; i++) {
      // console.log(playRound(prompt(), getComputerChoice()));
      // console.log(playerScore, computerScore);
      }
      if (playerScore > computerScore) {
         return "You win the game!"
      } else if (playerScore < computerScore) {
         return "You lost the game"
      } else {
         return "it's a tie! "
      }
   }

// console.log(game()); 

// Rps-ui 

const button1 = document.querySelector("#button-1")
const button2 = document.querySelector("#button-2")
const button3 = document.querySelector("#button-3")

button1.addEventListener("click", function() {
   playRound("Rock", getComputerChoice());
})

button2.addEventListener("click", function() {
   playRound("Paper", getComputerChoice());

})

button3.addEventListener("click", function() {
   playRound("Scissors", getComputerChoice());
})

