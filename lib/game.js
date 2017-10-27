'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // To play, we will create instances of the Minesweeper Game in the command line.

// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// To create a Game instance, run the follwing command:
//   let game = new Game(numberOfRows, numberOfColumns, numberOfBombs);

// For example, to create a 3 x 3 grid with 3 bombs, the command would be...
//   let game = new Game(3, 3, 3);

// please note that both row and column indexes begin at 0 as follows...
//   0,0 | 0,1 | 0,2
//   1,0 | 1,1 | 1,2
//   2,0 | 2,1 | 2,2

// to flip a tile...
//   game.flip(0, 1);

// to mark a potential bomb with a flag...
//   game.flag(2, 2);

// to remove a flag...
//   game.unFlag(2, 2);

// to flip all remaining tiles and end game...
//   game.clear();

// When done run `.exit`

var _board = require('./board.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Game);

    this._board = new _board.Board(numberOfRows, numberOfColumns, numberOfBombs);
    this._timer;
    this._firstDateStamp;
    this._flagCount = this._board._numberOfBombs;
    console.log('Generating new game board. Good luck!');
    console.log('Bombs: ' + this._board._numberOfBombs + ' - Flags Remaining: ' + this._flagCount);
    this._board.print();
  }

  _createClass(Game, [{
    key: 'flip',
    value: function flip(rowIndex, columnIndex) {
      this._board.flipTile(rowIndex, columnIndex);
      if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
        if (!this._firstDateStamp) {
          console.log('Boom!! Game over before it even started!');
          this._board.print();
        } else {
          this._timer = (new Date() - this._firstDateStamp) / 1000;
          console.log('Boom!! Game over in ' + this._timer + ' seconds!');
          this._board.print();
        }
      } else if (!this._board.hasSafeTiles()) {
        if (!this._firstDateStamp) {
          console.log('Wow!! You won the game on the first move!');
          this._board.print();
        } else {
          this._timer = (new Date() - this._firstDateStamp) / 1000;
          console.log('Congratulations!! You won in ' + this._timer + ' seconds!');
          this._board.print();
        }
      } else {
        if (!this._firstDateStamp) {
          this._firstDateStamp = new Date();
          console.log('First move at ' + this._firstDateStamp.toLocaleTimeString());
          console.log('Bombs: ' + this._board._numberOfBombs + ' - Flags Remaining: ' + this._flagCount);
          this._board.print();
          this._timer = 0;
        } else {
          this._timer = (new Date() - this._firstDateStamp) / 1000;
          console.log('Bombs: ' + this._board._numberOfBombs + ' - Flags Remaining: ' + this._flagCount + ' - Game Time: ' + this._timer + 's');
          this._board.print();
        }
      }
    }
  }, {
    key: 'flag',
    value: function flag(rowIndex, columnIndex) {
      if (this._board.playerBoard[rowIndex][columnIndex] !== ' ') {
        this._timer = (new Date() - this._firstDateStamp) / 1000;
        console.log('This tile has already been flipped!');
        console.log('Bombs: ' + this._board._numberOfBombs + ' - Flags Remaining: ' + this._flagCount + ' - Game Time: ' + this._timer + 's');
        this._board.print();
        return;
      } else {
        this._board.playerBoard[rowIndex][columnIndex] = 'F';
        this._flagCount--;
        if (this._flagCount === 0) {
          this._timer = (new Date() - this._firstDateStamp) / 1000;
          console.log('All flags have been deployed! Clearing all remaining tiles...');
          this.clear(); // Automatically clear all remaining tiles when all flags are deployed.
          return;
        }
        this._timer = (new Date() - this._firstDateStamp) / 1000;
        console.log('Bombs: ' + this._board._numberOfBombs + ' - Flags Remaining: ' + this._flagCount + ' - Game Time: ' + this._timer + 's');
        this._board.print();
      }
    }
  }, {
    key: 'unFlag',
    value: function unFlag(rowIndex, columnIndex) {
      if (this._board.playerBoard[rowIndex][columnIndex] !== 'F') {
        this._timer = (new Date() - this._firstDateStamp) / 1000;
        console.log('This tile does not have a flag on it!');
        console.log('Bombs: ' + this._board._numberOfBombs + ' - Flags Remaining: ' + this._flagCount + ' - Game Time: ' + this._timer + 's');
        this._board.print();
        return;
      } else {
        this._board.playerBoard[rowIndex][columnIndex] = ' ';
        this._flagCount++;
        if (this._flagCount === this._board._numberOfBombs) {
          this._timer = (new Date() - this._firstDateStamp) / 1000;
          console.log('All flags have been recovered!');
          console.log('Bombs: ' + this._board._numberOfBombs + ' - Flags Remaining: ' + this._flagCount + ' - Game Time: ' + this._timer + 's');
          this._board.print();
          return;
        }
        this._timer = (new Date() - this._firstDateStamp) / 1000;
        console.log('Bombs: ' + this._board._numberOfBombs + ' - Flags Remaining: ' + this._flagCount + ' - Game Time: ' + this._timer + 's');
        this._board.print();
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      var bombDetector = this._board.flipAll();
      if (bombDetector) {
        this._timer = (new Date() - this._firstDateStamp) / 1000;
        console.log('Boom!! Game over in ' + this._timer + ' seconds!');
      } else {
        this._timer = (new Date() - this._firstDateStamp) / 1000;
        console.log('Congratulations!! You won in ' + this._timer + ' seconds!');
      }
      this._board.print();
    }
  }]);

  return Game;
}();