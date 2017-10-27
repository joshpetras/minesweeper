# Minesweeper

## Table of Contents

* **[Overview](#overview)**
* **[How to Play](#how-to-play)**
* **[Example Game Play](#example-game-play)**

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
// To play, we will create instances of the Minesweeper Game in the command line.

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
```

### Example Game Play

```
> let g = new Game(10,10,10);
Generating new game board. Good luck!
Bombs: 10 - Flags Remaining: 10
  |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |  
undefined
> g.flip(5,5);
First move at 5:32:10 PM
Bombs: 10 - Flags Remaining: 10
  |   |   |   |   | 2 | 0 | 0 | 0 | 0
  |   |   |   |   | 2 | 0 | 0 | 0 | 0
  |   |   | 1 | 1 | 1 | 0 | 0 | 0 | 0
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 1 | 0 | 0 | 0 | 1 |   |  
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 2 | 2 | 1 | 0 | 0 | 0 | 0
  |   |   |   |   | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 |   |  
undefined
> g.flag(4,8);
Bombs: 10 - Flags Remaining: 9 - Game Time: 35.895s
  |   |   |   |   | 2 | 0 | 0 | 0 | 0
  |   |   |   |   | 2 | 0 | 0 | 0 | 0
  |   |   | 1 | 1 | 1 | 0 | 0 | 0 | 0
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 1 | 0 | 0 | 0 | 1 | F |  
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 2 | 2 | 1 | 0 | 0 | 0 | 0
  |   |   |   |   | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 |   |  
undefined
> g.flag(9,8);
Bombs: 10 - Flags Remaining: 8 - Game Time: 50.018s
  |   |   |   |   | 2 | 0 | 0 | 0 | 0
  |   |   |   |   | 2 | 0 | 0 | 0 | 0
  |   |   | 1 | 1 | 1 | 0 | 0 | 0 | 0
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 1 | 0 | 0 | 0 | 1 | F |  
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 2 | 2 | 1 | 0 | 0 | 0 | 0
  |   |   |   |   | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flag(7,4);
Bombs: 10 - Flags Remaining: 7 - Game Time: 66.105s
  |   |   |   |   | 2 | 0 | 0 | 0 | 0
  |   |   |   |   | 2 | 0 | 0 | 0 | 0
  |   |   | 1 | 1 | 1 | 0 | 0 | 0 | 0
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 1 | 0 | 0 | 0 | 1 | F |  
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 2 | 2 | 1 | 0 | 0 | 0 | 0
  |   |   |   | F | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flag(7,3);
Bombs: 10 - Flags Remaining: 6 - Game Time: 68.574s
  |   |   |   |   | 2 | 0 | 0 | 0 | 0
  |   |   |   |   | 2 | 0 | 0 | 0 | 0
  |   |   | 1 | 1 | 1 | 0 | 0 | 0 | 0
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 1 | 0 | 0 | 0 | 1 | F |  
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 2 | 2 | 1 | 0 | 0 | 0 | 0
  |   |   | F | F | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flag(0,4);
Bombs: 10 - Flags Remaining: 5 - Game Time: 84.176s
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   |   |   |   | 2 | 0 | 0 | 0 | 0
  |   |   | 1 | 1 | 1 | 0 | 0 | 0 | 0
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 1 | 0 | 0 | 0 | 1 | F |  
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 2 | 2 | 1 | 0 | 0 | 0 | 0
  |   |   | F | F | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flag(1,4);
Bombs: 10 - Flags Remaining: 4 - Game Time: 89.709s
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   |   | 1 | 1 | 1 | 0 | 0 | 0 | 0
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 1 | 0 | 0 | 0 | 1 | F |  
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 2 | 2 | 1 | 0 | 0 | 0 | 0
  |   |   | F | F | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flip(2,2);
Bombs: 10 - Flags Remaining: 4 - Game Time: 131.197s
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 1 | 0 | 0 | 0 | 1 | F |  
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 2 | 2 | 1 | 0 | 0 | 0 | 0
  |   |   | F | F | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flip(3,2);
Bombs: 10 - Flags Remaining: 4 - Game Time: 144.721s
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0
  |   | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 1 | 0 | 0 | 0 | 1 | F |  
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 2 | 2 | 1 | 0 | 0 | 0 | 0
  |   |   | F | F | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flip(7,2);
Bombs: 10 - Flags Remaining: 4 - Game Time: 157.802s
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0
  |   | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 1 | 0 | 0 | 0 | 1 | F |  
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 2 | 2 | 1 | 0 | 0 | 0 | 0
  |   | 1 | F | F | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flip(6,2);
Bombs: 10 - Flags Remaining: 4 - Game Time: 163.702s
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0
  |   | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 1 | 0 | 0 | 0 | 1 | F |  
  |   |   | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   | 1 | 2 | 2 | 1 | 0 | 0 | 0 | 0
  |   | 1 | F | F | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flip(5,2);
Bombs: 10 - Flags Remaining: 4 - Game Time: 171.035s
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0
  |   | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   |   | 1 | 0 | 0 | 0 | 1 | F |  
  |   | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   | 1 | 2 | 2 | 1 | 0 | 0 | 0 | 0
  |   | 1 | F | F | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flag(4,2);
Bombs: 10 - Flags Remaining: 3 - Game Time: 182.396s
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0
  |   | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   | F | 1 | 0 | 0 | 0 | 1 | F |  
  |   | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   | 1 | 2 | 2 | 1 | 0 | 0 | 0 | 0
  |   | 1 | F | F | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flip(3,1);
Bombs: 10 - Flags Remaining: 3 - Game Time: 200.32s
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   | F | 1 | 0 | 0 | 0 | 1 | F |  
  |   | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   | 1 | 2 | 2 | 1 | 0 | 0 | 0 | 0
  |   | 1 | F | F | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flip(3,0);
Bombs: 10 - Flags Remaining: 3 - Game Time: 208.605s
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0
0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
0 | 1 | F | 1 | 0 | 0 | 0 | 1 | F |  
1 | 2 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
  |   | 1 | 2 | 2 | 1 | 0 | 0 | 0 | 0
  |   | 1 | F | F | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flip(6,1);
Bombs: 10 - Flags Remaining: 3 - Game Time: 246.751s
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0
0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
0 | 1 | F | 1 | 0 | 0 | 0 | 1 | F |  
1 | 2 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
  | 1 | 1 | 2 | 2 | 1 | 0 | 0 | 0 | 0
  |   | 1 | F | F | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flip(7,1);
Bombs: 10 - Flags Remaining: 3 - Game Time: 252.862s
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0
0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
0 | 1 | F | 1 | 0 | 0 | 0 | 1 | F |  
1 | 2 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
  | 1 | 1 | 2 | 2 | 1 | 0 | 0 | 0 | 0
  | 2 | 1 | F | F | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flag(6,0);
Bombs: 10 - Flags Remaining: 2 - Game Time: 278.461s
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0
0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
0 | 1 | F | 1 | 0 | 0 | 0 | 1 | F |  
1 | 2 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
F | 1 | 1 | 2 | 2 | 1 | 0 | 0 | 0 | 0
  | 2 | 1 | F | F | 1 | 0 | 0 | 0 | 0
  | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flag(8,0);
Bombs: 10 - Flags Remaining: 1 - Game Time: 298.843s
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0
0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
0 | 1 | F | 1 | 0 | 0 | 0 | 1 | F |  
1 | 2 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
F | 1 | 1 | 2 | 2 | 1 | 0 | 0 | 0 | 0
  | 2 | 1 | F | F | 1 | 0 | 0 | 0 | 0
F | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flip(1,3);
Bombs: 10 - Flags Remaining: 1 - Game Time: 325.857s
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   |   | 2 | F | 2 | 0 | 0 | 0 | 0
1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0
0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
0 | 1 | F | 1 | 0 | 0 | 0 | 1 | F |  
1 | 2 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
F | 1 | 1 | 2 | 2 | 1 | 0 | 0 | 0 | 0
  | 2 | 1 | F | F | 1 | 0 | 0 | 0 | 0
F | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flip(1,2);
Bombs: 10 - Flags Remaining: 1 - Game Time: 337.961s
  |   |   |   | F | 2 | 0 | 0 | 0 | 0
  |   | 1 | 2 | F | 2 | 0 | 0 | 0 | 0
1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0
0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
0 | 1 | F | 1 | 0 | 0 | 0 | 1 | F |  
1 | 2 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
F | 1 | 1 | 2 | 2 | 1 | 0 | 0 | 0 | 0
  | 2 | 1 | F | F | 1 | 0 | 0 | 0 | 0
F | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F |  
undefined
> g.flag(1,1);
All flags have been deployed! Clearing all remaining tiles...
Congratulations!! You won in 353.348 seconds!
1 | 1 | 1 | 2 | F | 2 | 0 | 0 | 0 | 0
1 | F | 1 | 2 | F | 2 | 0 | 0 | 0 | 0
1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0
0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
0 | 1 | F | 1 | 0 | 0 | 0 | 1 | F | 1
1 | 2 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1
F | 1 | 1 | 2 | 2 | 1 | 0 | 0 | 0 | 0
2 | 2 | 1 | F | F | 1 | 0 | 0 | 0 | 0
F | 1 | 1 | 2 | 2 | 1 | 0 | 1 | 1 | 1
1 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | F | 1
undefined
> 
```
