const buttons = document.querySelectorAll(".button");
let stats = document.querySelector(".status");
let pc = document.querySelector(".p");
let cc = document.querySelector(".c");
let pS = document.querySelector(".play");
let cS = document.querySelector(".comp");
let pScore = 0;
let cScore = 0;

console.log(pScore);
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (pScore === 3){
            stats.textContent = "Match winner is Player!";
        }
        else if (cScore === 3){
            stats.textContent = "Match winner is Computer!";
        }
        else{
            stats.textContent = playRound(button.textContent,getComputerChoice());
        }
    });
})

//create the function needed for computers choice
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0) return "rock";
    else if (choice === 1) return "paper";
    else return "scissor"
}
//create a function to play round.
function playRound(playerChoice, computerChoice){
    pc.textContent = playerChoice;
    cc.textContent = computerChoice;

    if (computerChoice.toLowerCase() === "rock" && playerChoice.toLowerCase() === "scissor"){
        cS.textContent = ++cScore;  
        return "You Lose! Rock beats Scissor!";
    }
    else if (computerChoice.toLowerCase() === "scissor" && playerChoice.toLowerCase() === "rock"){
        pS.textContent = ++pScore;
        return "You Win! Rock beats Scissor!"
    }
    else if (computerChoice.toLowerCase() === "paper" && playerChoice.toLowerCase() === "scissor"){
        pS.textContent = ++pScore;
        return"You Win! Scissor beats Paper!";
    }
    else if (computerChoice.toLowerCase() === "scissor" && playerChoice.toLowerCase() === "paper"){
        cS.textContent = ++cScore;  
        return "You Lose! Scissor beats Paper!";
    }
    else if (computerChoice.toLowerCase() === "rock" && playerChoice.toLowerCase() === "paper"){
        pS.textContent = ++pScore;
        return "You Win! Paper beats Rock!";
    }
    else if (computerChoice.toLowerCase() === "paper" && playerChoice.toLowerCase() === "rock"){
        cS.textContent = ++cScore;  
        return "You Lose! Paper beats Rock!";
    }
    else{
        cS.textContent = ++cScore;  
        pS.textContent = ++pScore;
        return `It's a Tie! ${computerChoice.toLowerCase()} and ${playerChoice.toLowerCase()} is a tie!`
    }
    function playAgain(){
        buttons.forEach((button) => {
            button.remove();
        })
    }
}
