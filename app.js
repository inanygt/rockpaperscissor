
function getComputerChoice() {
   let game = ["Rock", "Paper", "Scissors" ]
   let i = Math.floor(Math.random() * 3);
   return game[i];
}

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
   if (playerSelection == computerSelection) {
      playerScore++;
      computerScore++;
      return "it's a tie";
   } else if (
   (playerSelection == "Rock" && computerSelection == "Scissors") || 
   (playerSelection == "Paper" && computerSelection == "Rock") ||
   (playerSelection == "Scissors" && computerSelection == "Paper") 
   ){
      playerScore++;
      return "you win!";
   } if (
      (playerSelection == "Rock" && computerSelection == "Paper") ||
      (playerSelection == "Paper" && computerSelection == "Scissors") ||
      (playerSelection == "Scissors" && computerSelection == "Rock")
    ) {
         computerScore++;
         return "You lose";
      }
}


// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.


// player starts with 0 points
// Computer starts with 0 points
// ——————
// create a game function
// Play 5 rounds
// After every round
//    If player wins add one point to player
//    If it is a tie add 1 point to player & computer
//    If computer wins add 1 point to computer
// Repeat 5 times 
// The player with the most points wins 


PlayerScore = 0
ComputerScore = 0

function game() {
      for (let i = 0; i < 5; i++) {
      console.log(playRound(prompt(), getComputerChoice()));
      console.log(playerScore, computerScore);
      }
      if (playerScore > computerScore) {
         return "You win the game!"
      } else {
         return "You lost the game"
      }
   }

console.log(game()); 