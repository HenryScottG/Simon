// console.log('ok');
// listener for Start button
let start=document.querySelector('#start');
let cells = document.getElementsByClassName('cell');
let count=0;
let compSeq=[];
let interval=function() {
    console.log(compSeq[count]);
    
    let blinkingCell=document.getElementById(`cell${compSeq[count]}`);
    // const cell=document.querySelector('#cell'+count);
    console.log(blinkingCell);
    console.log(compSeq);
    // console.log(cell);      
    // count++;
    // if (count>=4 ){
    //     clearInterval(interval);
    //  }
    blinkingCell.style.backgroundColor='black';
    count++;
 }
start.addEventListener('click',(event)=>{
console.log('start');

// computer picks the sequence of colors

for (let i = 0; i < 4; i++){
   
    compSeq.push(Math.floor(Math.random()*4));
    
    
   setTimeout(interval,`${(i+1)*1000}`);
   
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
function input(turn,color){
let playerSeq=-1;
        if (color==='cell0'){
            playerSeq=1;
        } else if (color==='cell1'){
            playerSeq=2;
        } else if (color==='cell2'){
            playerSeq=3;
        } else if (color==='cell3'){
            playerSeq=4;
        } 
        if (compSeq[turn]===playerSeq){ //matching check between the two clicks
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
 
        input(userTurn,cellId);
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



