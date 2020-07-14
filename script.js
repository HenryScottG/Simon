// listener for Start button
// let start=document.querySelector('#start');
// let cells=document.getElementsByClassName('cell');
let cells=document.querySelectorAll(".cell");
let startButton=document.getElementById("start");
let moves=[1, 2, 1, 3];
let count=0;
let compSeq=[];
let interval=function() {
    console.log(compSeq[count]);
 
console.log(compSeq);
    // console.log(cell);      
    // count++;
    // if (count>=4 ){
    //     clearInterval(interval);
    //  }

 }
startButton.addEventListener('click', function(){
// console.log('start');
// computer picks the sequence of colors

for (let i = 0; i < 4; i++){
    compSeq.push(Math.floor(Math.random()*4));
    // setTimeout(interval,`${(i+1)*2000}`);
        console.log(compSeq[i]);
    }

compSeq.forEach((move, index) => {
    let timeout = function () {
      cells.forEach((cell) => {
        cell.style.opacity = "1";
        if (`cell${move}` === cell.id) {
          cell.style.opacity = "0.5";
        }
      });
    };
    setTimeout(timeout, `${(index + 1) * 400}`);
  });



// let score=0   // updating the score
// let scoretext=document.getElementById('scorecounter');
// scoretext.innerText=''+ score;


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
            
            console.log('correct');
        }  else{
            alert('You Lost The Game! Click Start again to play.');
            location.reload(); // refresh the browser to start over
            return false;
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



