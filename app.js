// create function GetComputerChoice
// create variables "Rock", "Paper" and "Scissors"
// create a random number between 0 and 2
// assign number to one of the three variable
// return variable

// Create a function that will play a round of the game
// The function should have 2 parameters, you and the computer
// 


function getComputerChoice() {
   let game = ["Rock", "Paper", "Scissors" ]
   let i = Math.floor(Math.random() * 3);
   return game[i];
}


function PlayTheGame(playerSelection, computerSelection) {
   if (playerSelection == "Rock" && computerSelection == "Scissors") {
      return "You win! Rock beats Scissors";
   } else if (playerSelection == "Rock" && computerSelection == "Paper" ) {
      return "You lose! Paper beats Rock";
   } else if (playerSelection == "paper" && computerSelection == "rock") {
      return "You win! Paper beats Rock";
   } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
      return "You lose! Scissors beats Paper";
   } else if (playerSelection == "Scissors" && computerSelection == "paper") {
      return "You win! Scissors beats paper";
   } else {
      return "You lose! rock beats Scissors"
   }
}

console.log(PlayTheGame("Rock" , getComputerChoice()));