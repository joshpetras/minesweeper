# Minesweeper

## Table of Contents

* **[Overview](#overview)**
* **[How to Play](#how-to-play)**
* **[Code Progression](#code-progression)**

## Overview

This is a terminal based version of the Minesweeper game created in JavaScript.

## How to Play

### Requirements

* Nodejs

### Install

1. `git clone git@github.com:joshpetras/minesweeper.git`
2. `cd minesweeper`
3. `npm install`

### Play

```
// To play Minesweeper, we will create instances of MineSweeperGame in the command line.

// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// create a new game instance with a 3 x 3 grid and 3 bombs 
// with Game(rowIndex, columnIndex, numberOfBombs) as follows...
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
```
