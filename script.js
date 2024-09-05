console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioturn =  new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let win = new Audio("win.mp3")
let isgameover = false
let turn = "X"

// function to change the turn
const changeTurn = () =>{
    return turn === "X"?"0" : "X"
}

// function  to check for a win
const checkWin = () => {
        let boxtext = document.querySelectorAll('.boxtext');
        let wins = [
            [0, 1, 2, 5, 5, 0],
            [3, 4, 5, 5, 15, 0],
            [6, 7, 8, 5, 25, 0],
            [0, 3, 6, -5, 15, 90],
            [1, 4, 7, 5, 15, 90],
            [2, 5, 8, 15, 15, 90],
            [0, 4, 8, 5, 15, 45],
            [2, 4, 6, 5, 15, 135],
        ]
        
        // Initially hide the GIF
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.display = "none";

        wins.forEach(e => {
            if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
                console.log("Winner detected: " + boxtext[e[0]].innerText);
                document.querySelector('.info2').innerText = ("Winner is" +" "+ boxtext[e[0]].innerText);
                win.play();
                isgameover = true;
                // Display the GIF when there is a winner
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.display = "block";
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}   

            


// main logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText  = "Turn for"+ " " +turn;
            
        }
    })
})


//add on click listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for"+ " " +turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.display = "none";
    document.querySelector('.info2').innerText = ("Winner is");

})
