let cells=document.querySelectorAll(".cell");
let startButton=document.getElementById("start");
let title=document.querySelector(".game-title");
let playerMoves=[];
let compSeq=[];
let counter=1;
let clicked=0;
// GENERATE RANDOM COMPUTER NUMBERS FOR THE MOVES ARRAY
function generateRandomSimonMoves() {
    for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
      compSeq.push(randomNumber);
    //   console.log(compSeq);
    } 
    console.log(compSeq, playerMoves, counter);
}

function cellEventListener() {
let lastChar = this.id.substr(this.id.length - 1);
    playerMoves.push(lastChar);
    console.log(lastChar, compSeq, playerMoves, counter);
    
if (lastChar == compSeq[playerMoves.length - 1]&& counter==4) { //CHECKING THE COUNTER IF COMPLETED
    title.innerText='Winner';    // THROUGH THE ARRAY AND DISPLAY WINNER IF CORRECT
    setTimeout(alert("Winner"),2000); // POP UP ALERT FOR THE WINNER MESSAGE
    location.reload();
    // console.log('Winner');
    } else if (lastChar == compSeq[playerMoves.length - 1]) { // THIS GOES THROUGH THE COMUTER SEQUENCE
        // console.log("good so far");
        counter++; //COUNTING THROUGH THE ARRAY
        blink(); // CALLING THE BLINK FUNCTION
    } else {
        // console.log("loser");
      // removeCellEvents();
    }
} 
// CALL FOR THE LISTENER FOR THE CELLS BEING CLICKED
function addCellEvents() {
    cells.forEach(function (cell) {
      cell.addEventListener("click", cellEventListener);
    });
}
// REMOVE THE LISTENER
function removeCellEvents() {
    cells.forEach(function (cell) {
      cell.removeEventListener("click", cellEventListener);
    });
}

// LISTENER FOR THE START BUTTON
startButton.addEventListener('click', startGame);

function startGame() {
    compSeq = [];
    counter = 1;
    removeCellEvents();
    addCellEvents();
    generateRandomSimonMoves();
    blink(); // CALL THE BLINK FUNCTION
}

function blink() {
    // LOOP OVER THE MOVES ARRAY. FOR EACH MOVE MAKE THE COORESPONDING CELL BLINK.
for (let index = 0; index <= counter - 1; index++) {
      // EVERY TIME THIS TIMEOUT FUNCTION IS CALLED LOOP OVER THE 4 CELLS AND BLINK
      // THE CELL WITH THE ID THAT MATCHES THE MOVE
    let timeout = function () {
    cells.forEach((cell) => {
          // TO RESET EACH CELL TO 0.5 OPACITY, THE INITIAL STATE
    cell.style.opacity = "0.5";
  
    setTimeout(function () {
            // IF WE'VE REACHED THE LAST MOVE IN THE ARRAY, WE NEED TO RESET THAT CELL
    if (index == compSeq.length) {
    document.getElementById(`cell${compSeq[compSeq.length - 1]}`).style.opacity = "0.5";
  
              // IF THE MOVE MATCHES THE CELL ID THEN BLINK IT
        } else if (`cell${compSeq[index]}` === cell.id) {
              cell.style.opacity = "1";
        } else {
              return;
        }
     }, 400);
    });
    };
      setTimeout(timeout, `${(index + 1) * 800}`); 
    }
}

  //PLAYERS TURN
let userTurn=0;
// ASSIGNING THE CELLS 
function input(color){
console.log(color)
    let playerSeq=null;
        if (color==='cell0'){
            playerSeq=0;
        } else if (color==='cell1'){
            playerSeq=1;
        } else if (color==='cell2'){
            playerSeq=2;
        } else if (color==='cell3'){
            playerSeq=3;
        } 
    
    if (compSeq[userTurn]===playerSeq){ //DOES IT MATCH THE COMPSEQ AND PLAYERS CLICK
            
    if (counter===compSeq.length){
        title.innerText='Winner';    
        return false;

        }
        // console.log('correct');
        }  else{
        alert('You Lost The Game! Click Start again to play.');
        location.reload(); // REFRESH THE BROWSER TO START OVER
        return false;
        }
        // console.log(compSeq[userTurn]);
        // console.log(color);
        return true;
}
// EVENT LISTENER FOR THE CELL

for(let i = 0; i < cells.length; i++){
    let keepPlaying
    cells[i].addEventListener('click', function(){
    let cellId = this.getAttribute('id'); 
    keepPlaying = input(cellId);
    
    });
    if (keepPlaying){ // KEEP PLAYING OR ELSE BREAK OUT
        userTurn++;
    }else{
        break;
    }
}


// LISTENER FOR THE END BUTTON
let end=document.querySelector('#end');
end.addEventListener('click',(event)=>{
    location.reload(); // REFRESH THE BROWSER TO CLEAR EVERYTHING
    return false;
    console.log('end');
});



