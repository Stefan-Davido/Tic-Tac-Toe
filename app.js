const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");
const block4 = document.getElementById("block4");
const block5 = document.getElementById("block5");
const block6 = document.getElementById("block6");
const block7 = document.getElementById("block7");
const block8 = document.getElementById("block8");
const block9 = document.getElementById("block9");
var allH2 = document.querySelectorAll("H2");
const zeroWins = document.getElementById("zeroWins");
const xWins = document.getElementById("xWins");
const playGame = document.getElementById("tic-tac-toe-game");
const WINNER_DIV = document.getElementById("winner");
const RESTART_BTN = document.getElementById("restartBtn");
const message = document.getElementById("message");
message.innerText = "Lets Play"
const ZERO = "0";
const X = "X";
var circleTurn;
var counterWinnerX = 0;
var counterWinnerZero = 0;

playGame.addEventListener("click", clickHandler);
RESTART_BTN.addEventListener("click", playAgain);
WINNER_DIV.style.display = "none";

function clickHandler(event) {
   
    const cell = event.target;
    const currentClass = circleTurn ? ZERO : X;
    placeMark(cell, currentClass);
    if(checkWin()){
        console.log("Winner");
    }
}

function placeMark(cell, currentClass){
    if(cell.innerText == ''){
        cell.innerText = currentClass;
        message.innerText = "The Block now is " + currentClass;
        swapTurns();
    }
    else{
        message.innerText = "The Block is already Used!!!";
    }
}

function swapTurns(){
    circleTurn = !circleTurn;
}

function checkWin(){
    if(block1.innerText == block2.innerText &&
        block1.innerText == block3.innerText &&
        block1.innerText != ""){
            message.innerText = "The Winner is" + " " + block1.innerText;
            WINNER_DIV.classList.add('restartGame');
    }
    else if(block4.innerText == block5.innerText &&
        block4.innerText == block6.innerText &&
        block4.innerText != ""){
            message.innerText = "The Winner is" + " " + block4.innerText;
            WINNER_DIV.classList.add('restartGame'); 
    }
    else if(block7.innerText == block8.innerText &&
        block7.innerText == block9.innerText &&
        block7.innerText != ""){
            message.innerText = "The Winner is" + " " + block7.innerText;
            WINNER_DIV.classList.add('restartGame'); 
    }
    else if(block1.innerText == block4.innerText &&
        block1.innerText == block7.innerText &&
        block1.innerText != ""){
            message.innerText = "The Winner is" + " " + block1.innerText;
            WINNER_DIV.classList.add('restartGame'); 
    }
    else if(block2.innerText == block5.innerText &&
        block2.innerText == block8.innerText &&
        block2.innerText != ""){
            message.innerText = "The Winner is" + " " + block2.innerText;
            WINNER_DIV.classList.add('restartGame'); 
    }
    else if(block3.innerText == block6.innerText &&
        block3.innerText == block9.innerText &&
        block3.innerText != ""){
            message.innerText = "The Winner is" + " " + block3.innerText;
            WINNER_DIV.classList.add('restartGame'); 
    }
    else if(block1.innerText == block5.innerText &&
        block1.innerText == block9.innerText &&
        block1.innerText != ""){
            message.innerText = "The Winner is" + " " + block1.innerText;
            WINNER_DIV.classList.add('restartGame'); 
    }
    else if(block3.innerText == block5.innerText &&
        block3.innerText == block7.innerText &&
        block3.innerText != ""){
            message.innerText = "The Winner is" + " " + block3.innerText;
            WINNER_DIV.classList.add('restartGame');
    }
    else if(block1.innerText != '' && block2.innerText != '' &&
        block3.innerText != '' && block4.innerText != '' &&
        block5.innerText != '' && block6.innerText != '' &&
        block7.innerText != '' && block8.innerText != '' &&
        block9.innerText != ''){
            message.innerText = "Its Even! Wanna play again?";
            WINNER_DIV.classList.add('restartGame');
    }
}

function playAgain(){
    location.reload();
}