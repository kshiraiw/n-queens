/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution; //fixme
  var board = new Board ({n:n});
  var numRooks = 0;
  var horizontal = 0;
  var vertical = 0;
  var count = 0;
  var placeRook = function(x,y, currentBoard) {
    // if(numRooks === n && )

    // }
    console.log(count)
    if (numRooks === n && !currentBoard.hasAnyRooksConflicts()) {
      count++;
      if(numRooks !== 0){
        numRooks--;
      }
      return;
      // count++;
      // numRooks--;
      // x--;
      // y = currentBoard.rows()[x].indexOf(1);
      // currentBoard.togglePiece(x,y);
      // placeRook(x,y+1, currentBoard);

    } 
    
    currentBoard.togglePiece(x,y);
    if(currentBoard.hasAnyRooksConflicts()) {
      currentBoard.togglePiece(x,y);
      y++;
      placeRook(x,y, currentBoard);
    } else {
      numRooks++;
      x++;
      y = 0;
      placeRook(x,y, currentBoard);
    }
    if (numRooks !==n ) {
      currentBoard.togglePiece(x,y);
      //togglePiece(x,y)
      y++;
      placeRook(x,y,currentBoard);
    }
  };
  placeRook(horizontal, vertical, board);
  // var placeRook = function() {
  //   var randomSpot = Math.floor(Math.random()*n);
  //   if (numRooks === n) {
  //     return;
  //   } else {
  //     board.rows()[numRooks][randomSpot] = 1; 
  //     if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
  //       board.rows()[numRooks][randomSpot] = 0;
  //       placeRook();
  //     } else {
  //       numRooks++;
  //       placeRook();
  //     }
  //   }
  // }
  // placeRook();
  solution = board.rows();
   
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 1;
  for (var i = 1; i <= n; i++) {
    solutionCount *= i;
  }


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined;
  var board = new Board({n:n});
  var rowNumber = 0;
  var count = 0;
  console.log(board.rows())

  var placeQueen = function() {









    // var randomSpot = Math.floor(Math.random() * n);
    //  if (rowNumber < 0 || rowNumber === n) {
    //   return;
    // } else {
    //   board.rows()[rowNumber][randomSpot] = 1;
    // }
    // console.log(board.hasAnyQueensConflicts())
    // if (board.hasAnyQueensConflicts()) {
    //   console.log(rowNumber)
    //   board.rows()[rowNumber][randomSpot] = 0;
    //   if(rowNumber !== 0) {  
    //     rowNumber--;
    //   }
    //   placeQueen();
    // } else {
    //   rowNumber++;
    //   placeQueen();
    // }
  };
  placeQueen();
  console.log(board.rows());
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(board.rows()));
  return board.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme
  if (n < 2) {
    solutionCount = 1;
  } else { 
    solutionCount = 2;
    solutionCount *= (n-3);
  }

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
