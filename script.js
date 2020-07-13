// listener for Start button
let start=document.querySelector('#start');
let cells = document.getElementsByClassName('cell');
let count=0;
let compSeq=[];
let interval=function() {
    console.log(compSeq[count]);
let blinkingCell=document.getElementById(`cell${compSeq[count]}`);
blinkingCell.classList.remove('blinkcell');
    // const cell=document.querySelector('#cell'+count);
    console.log(blinkingCell);
    console.log(compSeq);
    // console.log(cell);      
    // count++;
    // if (count>=4 ){
    //     clearInterval(interval);
    //  }
    blinkingCell.classList.add('blinkcell');
    count++;
    clearTimeout(interval);
 }
start.addEventListener('click',(event)=>{
// console.log('start');
// computer picks the sequence of colors

for (let i = 0; i < 4; i++){
compSeq.push(Math.floor(Math.random()*4));
setTimeout(interval,`${(i+1)*2000}`);
   
//    clearInterval(interval);
//     // https://codereview.stackexchange.com/questions/162096/simon-game-in-javascript
//     let flashLights=function(compSeq) {
//         let i=0;
//         let interval=setInterval(function() {
//           $('cell' + compSeq[i]).fadeTo('slow', 1).fadeTo('slow', 2);
//           i++;
//           if (i>=compSeq.length) {
//             clearInterval(interval);
//           }
//         }, 1500);
//       };
    console.log(compSeq[i]);
}
// }
// let count=0
// let interval=setInterval(function() {
//     const cell=document.querySelector('#cell'+count);
//     console.log(compSeq);
//     console.log(cell);      
//     count++;
//     if (count>=4 ){
//         clearInterval(interval);
//      }
//  }, 1000);

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
        if (compSeq[userTurn]===playerSeq){ //matching check between the two clicks
            
            console.log('winner');
        }  else{
            alert('You Lost The Game!');
            location.reload(); // refresh the browser to start over
            return false;
            console.log('loser');
        }
        console.log(compSeq[userTurn]);
        console.log(color);
}
// creating the event listeners for the cells
for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', function(){
    let cellId = this.getAttribute('id'); // this circle
    input(cellId);
    userTurn++; // increment user turn by 1
    });
}
});

// add listener for End button
let end=document.querySelector('#end');
end.addEventListener('click',(event)=>{
    location.reload(); // refresh the browser to start over
    return false;
    console.log('end');
});



