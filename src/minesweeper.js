const printBoard = board => {
  console.log('Current Board:');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
printBoard(board);
board[0].splice(1, 1, '1');
board[2].splice(2, 1, 'B');
printBoard(board);
