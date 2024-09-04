console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let turn =  new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let Turn = "X"

// function to change the turn
const changeTurn = () =>{
    return turn === "X"?"0" : "X"
}

// function  to check for a win
const checkWin = () =>{

}

// main logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    boxtext.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = Turn;
            changeTurn();
            turn.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText= "Turn for" + Turn;
        }
    })
})