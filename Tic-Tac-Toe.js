let boxes = document.querySelectorAll(".box");
let rBtn = document.querySelector("#resetBtn");
let won = document.querySelector("#win");
let nBtn = document.querySelector("#newBtn");
let turn = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

boxes.forEach ((box) => {
    box.addEventListener("click", () => {
        if (turn === true) {
            box.innerHTML = "X";
            turn=false;
        } else {
            box.innerHTML = "O";
            turn=true;
    }
    box.disabled = true;
    checkWinner();
    })
})

const endGame = () => {
    for ( let box of boxes ) {
        box.disabled = true;
    }
}

const boxDisable = () => {
    for ( let box of boxes ) {
        box.disabled = false;
    }
}

const showWinner = (winner) => {
    won.innerHTML = "Player " + winner + " won!";
    won.style.visibility = "visible";
}

const gameDraw = () => {
    won.innerHTML = "Game Draw!";
    won.style.visibility = "visible";
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                endGame();
            }
        }
    }
}


const resetGame = () => {
    turn = true;
    boxDisable();
    box.innerHTML="";
    won.style.visibility = "hidden";
}


nBtn.addEventListener("click", resetGame());
rBtn.addEventListener("click", resetGame());