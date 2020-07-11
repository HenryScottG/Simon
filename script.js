console.log('ok');
// listener for Start button
let start=document.querySelector('#start');
start.addEventListener('click',(event)=>{
console.log('start');
let cells = document.getElementsByClassName('cell');
let compSeq=[];
// computer picks the sequence of colors
for (let i = 0; i < 4; i++){
    compSeq.push(Math.floor(Math.random()*4 +1));
    console.log(compSeq[i]);
}
let userTurn=0;
function input(turn,color){
let playerSeq=-1;
    // for (let i = 0; i < 4; i++){
        // compSeq.push(Math.floor(Math.random()*4 +1));
        if (color==='cell0'){
            playerSeq=1;
        } else if (color==='cell1'){
            playerSeq=2;
        } else if (color==='cell2'){
            playerSeq=3;
        } else if (color==='cell3'){
            playerSeq=4;
        } 
        if (compSeq[turn]===playerSeq){ //matching
            console.log('winner');
        }  else{
            console.log('loser');
        }

        console.log(compSeq[turn]);
        console.log(color);
}
// creating the event listeners for the cells
for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', function(){
        let cellId = this.getAttribute('id'); // this circle
        cells[i].fadeTo('fast', 0.5).fadeTo('fast', 1);
        // userInput.push(parseInt(circleId.charAt(circleId.length - 1))); // grabbing last user input's circle array
        // roundStart(); // running program again
        input(userTurn,cellId);
        userTurn++; // increment user turn by 1
        });
    }
});





// add listener for End button
let end=document.querySelector('#end');
end.addEventListener('click',(event)=>{
console.log('end');
});




// let myCells=document.querySelectorAll('.cell');
// myCells.forEach(cell=>{
//     document.addEventListener('click', getCell);  
// })
