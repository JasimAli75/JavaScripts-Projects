// avaliable choices we have
let choices = ["rock", "paper", "scissors"];

// User output show message

let userprompt = "0 for rock , 1 for paper. 2 for scissors";
let outcome= "ready to play.";

// computer chooses randomly
let computerChoice = randomInteger (0,2);
computerChoice = choices[computerChoice];

//message for user input
const prompt = PromptSync();
let userInput = prompt(userprompt);
let userChoice = choices(userInput);

if (computerChoice == userChoice) {
    outcome = "Draw";
}else if (computerChoice === "rock" && userChoice === "paper") {
    outcome = "Player Wins";
}else if (computerChoice === "rock" && userChoice === "scissors") {
    outcome = "Computer Wins";
}else if (computerChoice === "paper" && userChoice === "rock") {
    outcome = "Computer Wins";
}else if (computerChoice === "paper" && userChoice === "scissors") {
    outcome = "Player Wins";
} else if (computerChoice === "scissors" && userChoice === "rock") {
    outcome= "Players Wins";
} else if (computerChoice=== " scissors" && userChoice === "paper") {
    outcome = "Computer Wins";
}

console.log("computer chooses" + computerChoice);
console.log("Player chooses" + userChoice);
console.log (outcome);