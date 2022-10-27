import PromptSync from "prompt-sync";
import randomInteger from "random-int"

// the avaliable choices
const choices = ["rock", "paper", "scissors."];

let userprompt = "0 for rock, 1 for paper, 2 for scissors";

let outcome = "reday to play";

// computer choice randomly
const computerChoice = randomInteger(0,2);
const computerChoiceName = choices[computerChoice];

//user input for game

const prompt = PromptSync();
const userInput = prompt(userprompt);

const userChoice = choices[userInput];

// computer and player game selection
if (computerChoiceName === userChoice) {
    outcome = "Draw";
} else if (computerChoiceName === "rock" && userChoice === "paper") {
    outcome = "player wins";
} else if (computerChoiceName === "rock" && userChoice === "scissors") {
    outcome = "computer wins";
}else if (computerChoiceName === "paper" && userChoice === "rock") {
    outcome = "computer wins";
} else if(computerChoiceName === "paper" && userChoice === "scissors") {
    outcome = "players wins";
} else if(computerChoiceName === "scissors" && userChoice === "rock") {
    outcome = "players wins";
} else if(computerChoiceName === "scissors" && userChoice === "paper") {
    outcome = "computer wins";
} else  {
    outcome = "invalid number please try again";
}

console.log("computer chooses" + computerChoiceName);
console.log("player chooses" + userChoice);
console.log(outcome);
