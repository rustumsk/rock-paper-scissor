
//create the function needed for computers choice
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0) return "Rock";
    else if (choice === 1) return "Paper";
    else return "Scissor"
}
//create a function to play round.
function playRound(playerChoice, computerChoice){
    if (computerChoice.toLowerCase() === "rock" && playerChoice.toLowerCase() === "scissor") return "You Lose! Rock beats Scissor!";
    else if (computerChoice.toLowerCase() === "scissor" && playerChoice.toLowerCase() === "rock") return "You Win! Rock beats Scissor!"
    else if (computerChoice.toLowerCase() === "paper" && playerChoice.toLowerCase() === "scissor") return "You Win! Scissor beats Paper!";
    else if (computerChoice.toLowerCase() === "scissor" && playerChoice.toLowerCase() === "paper") return "You Lose! Scissor beats Paper!";
    else if (computerChoice.toLowerCase() === "rock" && playerChoice.toLowerCase() === "paper") return "You Win! Paper beats Rock!";
    else if (computerChoice.toLowerCase() === "paper" && playerChoice.toLowerCase() === "rock") return "You Lose! Paper beats Rock!";
    else{
        return `It's a Tie! ${computerChoice.toLowerCase()} and ${playerChoice.toLowerCase()} is a tie!`
    }
    
}
//create a game function that plays the game best of 5
function game(){
    for (let i = 0; i < 5; i++){
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Enter Rock or Scissor or Paper");

        let win = playRound(playerChoice, computerChoice);
        console.log(win);
    }
}

console.log(game());