// your code here...
const gameBoard=document.querySelector(".game--container");
const gameBoardcell=document.querySelectorAll(".cell");
const gameReset=document.querySelector(".game--restart");
let gameStatus=document.querySelector(".game--status");
let letter;
let letterstatus;
let gameActive=true;
const winningMessage=()=> `Player ${letter} has won!`;
const drawMessage = () => `Game ended in a draw!`;

let gamestate = ["","","","","","","","","",]
const winstatement=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]
console.log(winstatement[7][2])
//console.log(gameBoardcell)
gameBoard.children
gameBoard.addEventListener("click",clickHandler);
gameReset.addEventListener("click",clearALL);
let whosturnisit=true;
gameStatus.innerText=`it's X's turn`;
function clearALL(){
    gameBoardcell.forEach(item => {
        item.innerText="";
        gameStatus.innerText=`it's X's turn`;
        whosturnisit=true;
        gameActive=true;
    })
    gamestate=gamestate.map(item => item="")
 //   console.log(gamestate)
    //console.log(gamestate)
}
function whosturn(){
    if (whosturnisit===true) {
        letter="X";
        changeletter(letter);
        whosturnisit=false;
        return true;
       // console.log(whosturnisit) 
    }
    else{
        letter="O";
        changeletter(letter);
        whosturnisit=true;
        return false
    }
}
function changeStatus(){
    gameStatus.innerText=`it's ${letterstatus}'s turn`;
    //console.log(gameStatus.innerText);
}
function clickHandler(event){   
if(gameActive==true){
    if (event.target.innerText === "" ) {
    
    changeStatus(whosturn())
    event.target.innerText=letter;
    gamestate[event.target.getAttribute('data-cell-index')]=letter
    checkIFWon();
    //console.log(gamestate)}
}
}}
function changeletter(letter){
    letterstatus=(letter==="X") ? "O" : "X";
}

function checkIFWon(){
    let winOrNot=false;
    for (let i = 0; i < winstatement.length; i++) {
        const wincondition=winstatement[i];
        let a=gamestate[wincondition[0]];
        let b=gamestate[wincondition[1]];
        let c=gamestate[wincondition[2]];
        if(a==="" || b==="" || c===""){
            continue;
        }
        if(a===b && b===c){
            winOrNot=true;
        }
        if(winOrNot){
            gameStatus.innerText=winningMessage();
            gameActive=false;
            console.log("win")
            }
        let rounddraw= !gamestate.includes("")
        if(rounddraw){
            gameStatus.innerText=drawMessage();
            gameActive=false;
        }
        }
    
}


