// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// create a new game...
// let game = new Game(3, 3, 3);
// flip a tile...
// game.playMove(0, 1);
// mark a potential bomb with a flag...
// game.flag(2, 2);
// to clear remaining tiles when all bomb flags have been deployed...
// game.clear();
// When done run `.exit`

import {
  Board
} from './board.js';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    this._timer;
    this._firstDateStamp;
    this._flagCount = this._board._numberOfBombs;
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
        console.log(`Bombs: ${this._board._numberOfBombs} - Flags Remaining: ${this._flagCount}`);
        this._board.print();
        this._timer = 0;
      } else {
        this._timer = (new Date() - this._firstDateStamp) / 1000;
        console.log(`Bombs: ${this._board._numberOfBombs} - Flags Remaining: ${this._flagCount} - Game Time: ${this._timer}s`);
        this._board.print();
      }
    }
  }

  flag(rowIndex, columnIndex) {
    if (this._board.playerBoard[rowIndex][columnIndex] !== ' ') {
      this._timer = (new Date() - this._firstDateStamp) / 1000;
      console.log(`This tile has already been flipped!`);
      console.log(`Bombs: ${this._board._numberOfBombs} - Flags Remaining: ${this._flagCount} - Game Time: ${this._timer}s`);
      this._board.print();
      return;
    } else {
      this._board.playerBoard[rowIndex][columnIndex] = 'F';
      this._flagCount--;
      if (this._flagCount === 0) {
        this._timer = (new Date() - this._firstDateStamp) / 1000;
        console.log(`All flags have been deployed! Clearing all remaining tiles...`);
        this.clear(); // Test this function
        return;
      }
      this._timer = (new Date() - this._firstDateStamp) / 1000;
      console.log(`Bombs: ${this._board._numberOfBombs} - Flags Remaining: ${this._flagCount} - Game Time: ${this._timer}s`);
      this._board.print();
    }
  }

  clear() {
    let bombDetector = this._board.flipAll();
    if (bombDetector) {
      this._timer = (new Date() - this._firstDateStamp) / 1000;
      console.log(`Boom!! Game over in ${this._timer} seconds!`);
    } else {
      this._timer = (new Date() - this._firstDateStamp) / 1000;
      console.log(`Congratulations!! You won in ${this._timer} seconds!`);
    }
    this._board.print();
  }
}
