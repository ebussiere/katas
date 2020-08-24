//let whiteQueen = [0, 5];
//let blackQueen = [5, 0];

let blackQueen = [0, 7];
let whiteQueen = [4, 3];

let generatedBoard = generateBoard(whiteQueen, blackQueen);

function generateBoard(whiteQueen, blackQueen) {
  let board = [];
  for (let j = 0; j < 8; j++) {
    let row = [];
    for (let i = 0; i < 8; i++) {
      row.push(0);
    }
    board.push(row);
  }
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  return board;
}

const isDiagonalThreat = function (q1, q2) {
  let result = false;
  if (q1[1] > q2[1]) {
    let r = q1[0];

    for (let c = q1[1]; c >= q2[1]; c--) {
      if (generatedBoard[r][c] == 1) {
        result = true;
      }
      r++;
    }
  }
  if (q1[1] < q2[1]) {
    let r = q1[0];
    for (let c = q1[1]; c <= q2[1]; c++) {
      if (generatedBoard[r][c] == 1) {
        result = true;
      }
      r++;
    }
  }

  return result;
};

const isHorizontalThreat = function (q1, q2) {
  let result = false;

  if (q1[0] == q2[0] || q1[1] == q2[1]) {
    result = true;
  }
  return result;
};

const queenThreat = function (generatedBoard) {
  let queensFound = [];
  for (let row = 0; row < generatedBoard.length; row++) {
    for (let col = 0; col < generatedBoard[row].length; col++) {
      if (generatedBoard[row][col] === 1) {
        queensFound.push([row, col]);
      }
    }
  }
  let q1 = queensFound[0];

  let q2 = queensFound[1];

  if (isDiagonalThreat(q1, q2) || isHorizontalThreat(q1, q2)) {
    return true;
  } else {
    return false;
  }
};

console.log(generateBoard(whiteQueen, blackQueen));
console.log(queenThreat(generatedBoard));
