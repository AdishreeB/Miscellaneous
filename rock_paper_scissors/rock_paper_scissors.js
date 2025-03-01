let userScorePara = document.querySelector(".scoreUser");
let compScorePara = document.querySelector(".scoreComp");
let gamesPlayed = document.querySelector(".score_board");
let gameSymbols = document.querySelectorAll(".choice");
let result = document.querySelector(".result");

let userScore = 0;
let compScore = 0;

const displayChoice = (userVal) => {
  console.log(`${userVal} was chosen by user`);
}

let compChoice;
let userChoice;

const randomVal = () => {
  let randomIdx = Math.floor(Math.random() * 3);
  let options = ["rock", "paper", "scissors"];
  compChoice = options[randomIdx];
  console.log(`${compChoice} was chosen by the computer`);
  return compChoice;
}



let count = 0;
gameSymbols.forEach((gameSymbol) => {
  gameSymbol.addEventListener("click", () => {
    userChoice = gameSymbol.getAttribute("id");
    displayChoice(userChoice);
    
    randomVal();

    resultOfRound();

    count++;
    gamesPlayed.innerText = `Number of games played: ${count}`;
    
    
})});

let userWin = true;
const resultOfRound = () => {
  if (userChoice == "rock") {
    userWin = compChoice == "paper" ? false : true;
  } else if (userChoice == "paper") {
    userWin = compChoice == "scissors" ? false : true;
  } else if (userChoice == "scissors") {
    userWin = compChoice == "rock" ? false : true;
  } score();
};

const score = () => {
  if(userChoice == compChoice) {
    console.log("the game is a draw");
    result.innerText = "THE GAME IS A DRAW. TRY AGAIN!";
  } else if (userWin) {
    userScore++;
    console.log("user won this round!!");
    userScorePara.innerText = `${userScore}`;
    result.innerText = "USER WON!!";
  } else {
    compScore++;
    console.log("computer won this round!!");
    compScorePara.innerText = `${compScore}`;
    result.innerText = "COMPUTER WON!!";
}
};




