let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset_button");
let heading = document.querySelector(".heading");
let newBtn = document.querySelector(".new_button");
let msg = document.querySelector("#msg");

//onclick thing so on clicking one of the .box buttons, like on clicking x comes and then on next when i click y comes

let currBox = "true";
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
  if(currBox === "true") {
    currBox = "false";
    box.innerText = "X";
  } else if(currBox === "false"){
    currBox = "true";
    box.innerText = "O";
  } box.disabled = true;
  count++;

  let isWinner = checkWinner();
  if(count == 9 && !isWinner) {
    console.log("the game is a draw");
    msg.innerText = "The game is a draw";
    heading.classList.remove("hide");
  } checkWinner();
})
});

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]; 

const checkWinner = () => {
  for(patterns of winPatterns) {
    let pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if(pos1Val == pos2Val && pos2Val == pos3Val) {
        console.log("winner! Team", pos1Val);
        showWinner(pos1Val);
        return true;
      }
    } 
  } 
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, the winner is Team ${winner}`;
  heading.classList.remove("hide");
  disabledBtns();
}

const disabledBtns = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
} 

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = " ";
    box.disabled = false;
    currBox = "true";
    heading.classList.add("hide");
})});

newBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = " ";
    box.disabled = false;
    currBox = "true";
    heading.classList.add("hide");
})});













