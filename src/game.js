// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`

import {
  Board
} from './board.js';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    this._timer;
    this._firstDateStamp;
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      if (!this._firstDateStamp) {
        console.log(`Boom!! Game over before it even started!`);
        this._board.print();
      } else {
        this._timer = (new Date() - this._firstDateStamp) / 1000;
        console.log(`Boom!! Game over in ${this._timer} seconds!`);
        this._board.print();
      }
    } else if (!this._board.hasSafeTiles()) {
      if (!this._firstDateStamp) {
        console.log(`Wow!! You won the game on the first move!`);
        this._board.print();
      } else {
        this._timer = (new Date() - this._firstDateStamp) / 1000;
        console.log(`Congratulations!! You won in ${this._timer} seconds!`);
      }
    } else {
      if (!this._firstDateStamp) {
        this._firstDateStamp = new Date();
        console.log(`New game starting at ${this._firstDateStamp.toLocaleTimeString()}:`);
        this._board.print();
        this._timer = 0;
      } else {
        this._timer = (new Date() - this._firstDateStamp) / 1000;
        console.log(`Current Board - Game Time: ${this._timer}s`);
        this._board.print();
      }
    }
  }
}