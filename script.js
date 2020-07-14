// listener for Start button
// let start=document.querySelector('#start');
// let cells=document.getElementsByClassName('cell');
let cells=document.querySelectorAll(".cell");
let startButton=document.getElementById("start");
let title=document.querySelector(".game-title");
// let counter=1;
let playerMoves=[];
let compSeq=[];
let counter=1;
let clicked=0;
// GENERATE RANDOM NUMBERS FOR THE MOVES ARRAY
function generateRandomSimonMoves() {
    for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
      compSeq.push(randomNumber);
    //   console.log(compSeq);
    } 
    // addCellEvents();
    console.log(compSeq, playerMoves, counter);
}

function cellEventListener() {
let lastChar = this.id.substr(this.id.length - 1);
    playerMoves.push(lastChar);
//   insert code.
    console.log(lastChar, compSeq, playerMoves, counter);
    
if (lastChar == compSeq[playerMoves.length - 1]&& counter==4) {
    title.innerText='Winner';    
    console.log('Winner');
    } else if (lastChar == compSeq[playerMoves.length - 1]) {
        console.log("good so far");
        counter++;
        blink();
    } else {
        console.log("loser");
      // removeCellEvents();
    }
} 

function addCellEvents() {
    cells.forEach(function (cell) {
      cell.addEventListener("click", cellEventListener);
    });
}
function removeCellEvents() {
    cells.forEach(function (cell) {
      cell.removeEventListener("click", cellEventListener);
    });
}

// Add listener for the start button.
startButton.addEventListener('click', startGame);
// console.log('start');
// computer picks the sequence of colors
function startGame() {
    compSeq = [];
    counter = 1;
    removeCellEvents();
    addCellEvents();
    generateRandomSimonMoves();
    blink();
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

  //user starts
let userTurn=0;

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
    //    create an empty array. 
    // click start, grab the 1st index of compSeq to the new array.
    // once player click grabs checks to see if it equals the new array input.
    // if correct, grab the next number from compSeq and adds it to the new array.
    // blinks again for the new sequence. repeat until the length match for the new array
    // and the compSeq. if they match we have a winner. 

        // while (clicked<compSeq.length){
        //     console.log('clicked ',clicked);
        //     console.log('userTurn ',userTurn);
        // if (compSeq[userTurn]===playerSeq){
        //     console.log('correct');
        // }
        // }
        
    if (compSeq[userTurn]===playerSeq){ //matching check between the two clicks
            
            //function name for the winner
    if (counter===compSeq.length){
        title.innerText='Winner';    
        return false;
        console.log('Winner');
        }
            console.log('correct');
        }  else{
            alert('You Lost The Game! Click Start again to play.');
            location.reload(); // refresh the browser to start over
            return false;
        }
        console.log(compSeq[userTurn]);
        console.log(color);
        return true;
}
// creating the event listeners for the cells

for(let i = 0; i < cells.length; i++){
    let keepPlaying
    cells[i].addEventListener('click', function(){
    let cellId = this.getAttribute('id'); // this circle
    keepPlaying = input(cellId);
    
    // userTurn++; // increment user turn by 1
    });
    if (keepPlaying){
        userTurn++;
    }else{
        break;
    }
}
// });

// add listener for End button
let end=document.querySelector('#end');
end.addEventListener('click',(event)=>{
    location.reload(); // refresh the browser to start over
    return false;
    console.log('end');
});



