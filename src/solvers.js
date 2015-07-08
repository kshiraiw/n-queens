window.findSolution = function(row, n, board, validator, callback) {
  if (row === n) {
    callback();
    return;
  }

  for (var i = 0; i < n; i++) {
    board.togglePiece(row, i);

    if ( !board[validator]() ) {
      var newRow = row + 1;
      findSolution(newRow, n, board, validator, callback);
    }

    board.togglePiece(row,i);
  }
};

window.findNRooksSolution = function(n) {
  var board = new Board ({n:n});
  var solution = board.rows();
  
  findSolution(0, n, board, "hasAnyRooksConflicts", function() {
    solution = _.map(board.rows(), function(row) {
      return row.slice();
    });
  });

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});

  findSolution(0, n, board, "hasAnyRooksConflicts", function() {
    solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
 var board = new Board ({n:n});
 var solution = board.rows();

  findSolution(0, n, board, "hasAnyQueensConflicts", function() {
    solution = _.map(board.rows(), function(row) {
      return row.slice();
    });
  });
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});


  findSolution(0, n, board,"hasAnyQueensConflicts", function() {
    solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
// /*           _
//    ___  ___ | |_   _____ _ __ ___
//   / __|/ _ \| \ \ / / _ \ '__/ __|
//   \__ \ (_) | |\ V /  __/ |  \__ \
//   |___/\___/|_| \_/ \___|_|  |___/

// */

// // hint: you'll need to do a full-search of all possible arrangements of pieces!
// // (There are also optimizations that will allow you to skip a lot of the dead search space)
// // take a look at solversSpec.js to see what the tests are expecting


// // return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// window.findNRooksSolution = function(n) {
//   // var solution = [];
//   // var board = new Board ({n:n});
//   // var numRooks = 0;
//   // var generateSolutions = function(board, colToTry) {
//   //   board.togglePiece(numRooks, colToTry);
//   //   // console.log(board.rows())
//   //   numRooks++;
//   //   if (numRooks < n) {
//   //     var boardCopy = new Board ({n:n});
//   //     console.log(boardCopy.rows())

//   //     for (var i = 0; i < n; i++) {
//   //       console.log(board.rows()[i].indexOf(1))
//   //       if (board.rows()[i].indexOf(1) !== -1) {
//   //         boardCopy.togglePiece(i, board.rows()[i].indexOf(1));
//   //       }
//   //     }
//   //     for (var i = 0; i < n; i++) {
//   //         generateSolutions(boardCopy, i);
//   //     }
//   //   } else if (numRooks >= n || board.hasAnyRooksConflicts()) {

//   //   } else if (numRooks === n) {
//   //     solution.push(board.rows());
//   //   }
//   // }

//   // for (var i = 0; i < n; i++) {
//   //     generateSolutions(board, i);

//   // }

//   // var solution; //fixme
//   // var board = new Board ({n:n});
//   // var numRooks = 0;
//   // var horizontal = 0;
//   // var vertical = 0;
//   // var count = 0;
//   // var placeRook = function(x,y, currentBoard) {
//     // if(numRooks === n)

//     // }
//     // console.log(count)
//     // if (numRooks === n && !currentBoard.hasAnyRooksConflicts()) {
//     //   count++;
//     //   if(numRooks !== 0){
//     //     numRooks--;
//     //   }
//     //   return;
//       // count++;
//       // numRooks--;
//       // x--;
//       // y = currentBoard.rows()[x].indexOf(1);
//       // currentBoard.togglePiece(x,y);
//       // placeRook(x,y+1, currentBoard);

//     // } 
    
//   //   for( var i = y; i < currentBoard.rows().length; i++) {
//   //     currentBoard.togglePiece(x,i);
//   //     if(currentBoard.hasAnyRooksConflicts()) {
//   //       currentBoard.togglePiece(x,i);
//   //       continue;
//   //     } else {
//   //       numRooks++;
//   //       placeRook(x + 1, 0, currentBoard);
//   //       currentBoard.togglePiece(x,i);
//   //     }
//   //   }
//   //   if (numRooks !==n ) {
//   //     currentBoard.togglePiece(x,y);
//   //     //togglePiece(x,y)
//   //     y++;
//   //     placeRook(x,y,currentBoard);
//   //     console.log("x: " + x + " , y: "+ y)
//   //   }
//   // };
//   // placeRook(horizontal, vertical, board);
//   // var placeRook = function() {
//   //   var randomSpot = Math.floor(Math.random()*n);
//   //   if (numRooks === n) {
//   //     return;
//   //   } else {
//   //     board.rows()[numRooks][randomSpot] = 1; 
//   //     if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
//   //       board.rows()[numRooks][randomSpot] = 0;
//   //       placeRook();
//   //     } else {
//   //       numRooks++;
//   //       placeRook();
//   //     }
//   //   }
//   // }
//   // placeRook(horizontal, vertical, board);
   
//   // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
//   // return solution;
// };



// // return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// window.countNRooksSolutions = function(n) {
//   var solutionCount = 0;
//   var board = new Board({n:n});

//   var findSolution = function(row) {
//     if (row === n) {
//       solutionCount++;
//       return;
//     }

//     for (var i = 0; i < n; i++) {
//       board.togglePiece(row, i);

//       if ( !board.hasAnyRooksConflicts() ) {
//         row++;
//         findSolution(row);
//       }

//       board.togglePiece(row, i);
//     }
//   };
//   // for (var i = 1; i <= n; i++) {
//   //   solutionCount *= i;
//   // }
//   findSolution(0);

//   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
//   return solutionCount;
// };


// // return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
// window.findNQueensSolution = function(n) {
//   // var solution = undefined;
//   // var board = new Board({n:n});
//   // var rowNumber = 0;
//   // var count = 0;
//   // console.log(board.rows())

//   // var placeQueen = function() {









//     // var randomSpot = Math.floor(Math.random() * n);
//     //  if (rowNumber < 0 || rowNumber === n) {
//     //   return;
//     // } else {
//     //   board.rows()[rowNumber][randomSpot] = 1;
//     // }
//     // console.log(board.hasAnyQueensConflicts())
//     // if (board.hasAnyQueensConflicts()) {
//     //   console.log(rowNumber)
//     //   board.rows()[rowNumber][randomSpot] = 0;
//     //   if(rowNumber !== 0) {  
//     //     rowNumber--;
//     //   }
//     //   placeQueen();
//     // } else {
//     //   rowNumber++;
//     //   placeQueen();
//     // }
//   // };
//   // placeQueen();
//   // console.log(board.rows());
//   // console.log('Single solution for ' + n + ' queens:', JSON.stringify(board.rows()));
//   // return board.rows();
// };


// // return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
// window.countNQueensSolutions = function(n) {
//   var solutionCount = 0;
//   var board = new Board({n:n});

//   var findSolution = function(row) {
//     if (row === n) {
//       solutionCount++;
//       return;
//     }

//     for (var i = 0; i < n; i++) {
//       board.togglePiece(row, i);

//       if ( !board.hasAnyQueensConflicts() ) {
//         row++;
//         findSolution(row);
//       }

//       board.togglePiece(row, i);
//     }
//   };
//   // for (var i = 1; i <= n; i++) {
//   //   solutionCount *= i;
//   // }
//   findSolution(0);
//   console.log('Number of solutions for ' + n + ' queens:', solutionCount);
//   return solutionCount;
// };
