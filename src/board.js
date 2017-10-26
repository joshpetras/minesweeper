export class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    if (this._numberOfBombs >= this._numberOfTiles) {
      console.log(`Too many bombs for a board with ${this._numberOfTiles} tiles!`);
    } else {
      this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
      this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }
  }

  get playerBoard() {
    return this._playerBoard;
  }

  flipTile(rowIndex, columnIndex) {

    if (this._playerBoard[rowIndex][columnIndex] === 'F') {
      console.log("You can't flip a tile that has a flag on it!");
      return;
    } else if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped!');
      return;
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
      return 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
    this._numberOfTiles--;
    if (this._playerBoard[rowIndex][columnIndex] === 0) {
      this.flipNeighbors(rowIndex, columnIndex);
    }
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
        if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++;
        }
      }
    });
    return numberOfBombs;
  }

  flipNeighbors(rowIndex, columnIndex) {
    const neighborOffsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ];
    const numberOfRows = this._playerBoard.length;
    const numberOfColumns = this._playerBoard[0].length;
    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
        if (this._playerBoard[neighborRowIndex][neighborColumnIndex] === ' ') {
          this.flipTile(neighborRowIndex, neighborColumnIndex);
        }
      }
    });
  }

  flipAll() {
    let bombDetector;
    for (let i=0; i<this._playerBoard.length; i++) {
      for (let j=0; j<this._playerBoard[i].length; j++) {
        if (this._playerBoard[i][j] === ' ') {
          bombDetector = this.flipTile(i, j);
          if (bombDetector === 'B') {
            return true;
          }
        }
      }
    }
  }

  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs;
  }

  print() {
    console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
  }

  static generatePlayerBoard(numberOfRows, numberOfColumns) {
    const board = [];
    for (let i = 0; i < numberOfRows; i++) {
      const row = [];
      for (let j = 0; j < numberOfColumns; j++) {
        row.push(' ');
      }
      board.push(row);
    }
    return board;
  }

  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    const board = [];
    for (let i = 0; i < numberOfRows; i++) {
      const row = [];
      for (let j = 0; j < numberOfColumns; j++) {
        row.push(null);
      }
      board.push(row);
    }
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      if (board[randomRowIndex][randomColumnIndex] === null) {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      }
    }
    return board;
  }
}
