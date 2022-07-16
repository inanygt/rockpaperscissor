// create function GetComputerChoice
// create variables "Rock", "Paper" and "Scissors"
// create a random number between 0 and 2
// assign number to one of the three variable
// return variable

function getComputerChoice() {
   let game = ["Rock", "Paper", "Scissors" ]
   let i = Math.floor(Math.random() * 3);
   return game[i];
}

console.log(getComputerChoice())