# Tetris_Javascript

* JavaScript-based game programming.

* Understanding of basic JavaScript syntax and the interaction of various functions.

## Tetris URL
https://tetris-juhwan1014.netlify.app/

## structure
  
  ### function control 
  -> Keyboard recognition
  
  ### function draw 
  -> Draw tetromino
  
  ### function undraw 
  -> Undraw tetromino
  
  ### function moveDown 
  -> Erase the existing tetromino and draw a new tetromino under one square 
  (calling function freeze)
  
  ### function freeze 
  -> Check if current tetromino met tetromino with "taken", if so give current tetromino "taken" and then freeze 
  (calling function displayShape, diss, gameOver)
  
  ### function moveLeft 
  -> Erase the existing tetromino and draw a new tetromino left one square
  
  ### function moveRight 
  -> Erase the existing tetromino and draw a new tetromino right one square
  
  ### function isAtRight 
  -> Check to prevent tetrominoes from escaping the game board
  
  ### function isAtLeft 
  -> Check to prevent tetrominoes from escaping the game board
  
  ### function checkRotatedPosition 
  -> If the tetromino is about to go out of the game board, adjust the "currentPosition" value so that it does not go out
  
  ### function rotate 
  -> Run every time the user presses "up", changing the tetromino shape
  
  ### function displayShape 
  -> Show the next tetromino on the right side of the game board
  
  ### function diss 
  -> If a particular line contains all of the "taken" then it gets rid of it, causing other tetrominos to fill the void
  
  ### function gameOver 
  -> Game over when the current tetromino is about to go over the top of the game board
