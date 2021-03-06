document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = generateBoard()
  



function startGame () {
  // Don't remove this function call: it makes the game work!
  for (var i = 0; i < board.cells.length; i++) {  
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  } 

  var restartGameButton = document.querySelector("button#restart");
  restartGameButton.addEventListener('click', restartTheGame);

  var exitGameButton = document.querySelector("button#closeWindow");
  exitGameButton.addEventListener('click', exitGame)

  lib.initBoard()
}

document.addEventListener("click", checkForWin)
document.addEventListener("contextmenu", checkForWin);

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?


  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //  

  // Psuedo Code
  //1. For, Looping through each cell
  //2. Check if all the mines are NOT hidden if are then return out
  //3. Check for isMine and isMarked to be that same and that they are all true
  //4. Complete

  function checkForWin() {
    for (var i = 0; i < board.cells.length; i++) {
      if (board.cells[i].isMine === false && board.cells[i].hidden === true) {
        return;
      }
    }
    for (var i = 0; i < board.cells.length; i++) {
      if (board.cells[i].isMine === true && board.cells[i].isMarked === false) {
        return;
      }
    }

    lib.displayMessage('Compromised all Agents')
  }

  function restartTheGame(){
    location.reload();
  }
  function exitGame(){
    window.close()
  }

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.













function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0;
  for(var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine === true) {
      count++;
    }
  }
 return count;
}









function generateBoard() {
  var cells = []
  
  const cellCreator = (row, col, isMine, isMarked, hidden) => {
    newCell = {
      row: row,
      col: col,
      isMine: isMine,
      isMarked: isMarked,
      hidden: hidden,
    }
      return newCell
    }

  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      cellCreator(i, j, (Math.random() < 0.3), false, true);
      cells.push(newCell);
    } 
  }

  var generatedBoard = {cells}
  return generatedBoard;
}   



