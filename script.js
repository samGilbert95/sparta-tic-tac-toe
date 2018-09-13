document.addEventListener('DOMContentLoaded', () => {

let tallyX = 0;
let tallyO = 0;
const game = new Object();
game.reset = document.getElementById('reset');
game.turn = true; //
game.winCon = false;
game.playText = document.getElementsByClassName('playerTurn');
game.box = document.getElementsByTagName('td');
game.pressedBoxesX = [];
game.pressedBoxesO = [];
game.winningCombos = [[0,3,6], [1,4,7], [2,5,8], [0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6]];

game.startOver = () =>{
  game.reset.addEventListener('click', (e) => {
    location.reload();
  })
}


game.checkWin = () => {
  for (i=0; i<game.winningCombos.length; i++) {
    for (j=0; j<game.winningCombos[i].length; j++){
      if (game.pressedBoxesX.indexOf(game.winningCombos[j][i]) !== -1 && game.turn === false){
        tallyX = tallyX + 1;
        console.log("TX" + tallyX);
      } else if (game.pressedBoxesO.indexOf(game.winningCombos[j][i]) !== -1 && game.turn === true){
        tallyO = tallyO + 1;
        console.log("TO" + tallyO);
      }
      if (tallyX === 3 || tallyO === 3){
        game.winCon = true;
        alert('Game over. Click reset to play again!');
        tallyX = 0;
        tallyO = 0;
        location.reload();
      }
    };
  };
   tallyX = 0;
   tallyO = 0;
}


game.boardSet = () =>{
  if (game.winCon === false) {
    for (i = 0; i<game.box.length; i++) {
      game.box[i].addEventListener('click', (e) => {
        if (game.turn === true && e.target.className === '' ) {
          e.target.innerHTML = 'X';
          e.target.className = 'X';
          game.pressedBoxesX.push(Number(e.target.attributes[0].value));
          console.log(game.pressedBoxesX);
          game.turn = !game.turn;
          game.playText[0].innerHTML = "It is O's turn";
          game.checkWin();
        } else if (game.turn === false && e.target.className === ''){
          e.target.innerHTML = 'O';
          e.target.className = 'O';
          game.pressedBoxesO.push(Number(e.target.attributes[0].value));
          console.log(game.pressedBoxesO);
          game.turn = !game.turn;
          game.playText[0].innerHTML = "It is X's turn";
          game.checkWin();
        }
      });
    }
  }
}



// || game.winningCombos[i][j+1] === game.box[k].attributes[0].value || game.winningCombos[i][j+2] === game.box[k].attributes[0].value){



game.startOver();
game.boardSet();
//game.checkWin();

});
