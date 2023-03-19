document.addEventListener('DOMContentLoaded', () =>{



  const grid = document.querySelector('.grid')

  for(let i = 0; i < 200; i++){
     grid.innerHTML += '<div></div>'
  }

  for(let i = 0; i < 10; i++){
    grid.innerHTML += '<div class="taken"></div>'
  }


    let squares = Array.from(document.querySelectorAll('.grid div'))
    const scoreDisplay = document.querySelector('#score')
    const startBtn = document.querySelector('#start-button')
    const width = 10; 
    let timerId;
    let nextRandom =0;
    let score = 0
    const colors = [
      'orange',
      'red',
      'purple',
      'green',
      'blue'
    ]


  
    //The Tetrominoes
    const lTetromino = [
      [1, width+1, width*2+1, 2],
      [width, width+1, width+2, width*2+2],
      [1, width+1, width*2+1, width*2],
      [width, width*2, width*2+1, width*2+2]
    ]
  
    const zTetromino = [
      [0,width,width+1,width*2+1],
      [width+1, width+2,width*2,width*2+1],
      [2,width+1,width+2,width*2+1],
      [width, width+1,width*2+1,width*2+2]
    ]
  
    const tTetromino = [
      [1,width,width+1,width+2],
      [1,width+1,width+2,width*2+1],
      [width,width+1,width+2,width*2+1],
      [1,width,width+1,width*2+1]
    ]
  
    const oTetromino = [
      [0,1,width,width+1],
      [0,1,width,width+1],
      [0,1,width,width+1],
      [0,1,width,width+1]
    ]
  
    const iTetromino = [
      [1,width+1,width*2+1,width*3+1],
      [width,width+1,width+2,width+3],
      [1,width+1,width*2+1,width*3+1],
      [width,width+1,width+2,width+3]
    ]

 const theTetrominoes = [lTetromino,zTetromino,tTetromino,oTetromino,iTetromino]


 let currentPosition = 4;
 let currentRotation = 0;

 let random =  Math.floor(Math.random()*theTetrominoes.length) 

 let current = theTetrominoes[random][currentRotation]
 


// 0 < Math.random() <1

// current =  [1,11,21,2] ---> [5,15,25,6]

function control(e){
 
if(scoreDisplay.innerHTML === 'end'){
  alert("Game Over!!!")
  return
}

   if(e.keyCode === 37){
    moveLeft()
   } else if(e.keyCode === 38){
    rotate()
   } else if(e.keyCode === 39){
    moveRight()
   } else if(e.keyCode === 40){
    moveDown()
   }
}

document.addEventListener('keyup', control)





 function draw(){
  //// [10,11,12,21] .  70        [80,81,82,91]
    current.forEach(index => {
        squares[currentPosition + index].classList.add('tetromino')
        squares[currentPosition + index].style.backgroundColor = colors[random]
    }
        )
 }

function undraw(){
    current.forEach(index => {
        squares[currentPosition + index].classList.remove('tetromino')
        squares[currentPosition + index].style.backgroundColor = ''
    }
        )
}

  // timerId = setInterval(moveDown, 1000)

function moveDown(){
  console.log(currentPosition)
 undraw()
 currentPosition += width
 draw()
 freeze()
}




function freeze(){
if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){
    current.forEach(index => squares[currentPosition + index].classList.add('taken'))
    // random = Math.floor(Math.random()*theTetrominoes.length)
    random = nextRandom
    nextRandom = Math.floor(Math.random()*theTetrominoes.length) 
    current = theTetrominoes[random][currentRotation]
    currentPosition = 4
    draw()
    displayShape()
    diss()
    gameOver()
  
}
}



function moveLeft(){
  undraw()
  const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
  if(!isAtLeftEdge) currentPosition -= 1
  if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
    currentPosition += 1
  } 
  draw()
}

function moveRight(){
  undraw()
  const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
  if(!isAtRightEdge) currentPosition += 1
  if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
    currentPosition -= 1
  }  
  draw()
}



function isAtRight(){
     return current.some(index => (currentPosition + index) % width === 9)
   
}

function isAtLeft(){
     return current.some(index => (currentPosition + index) % width === 0)
}

function checkRotatedPosition(P){
  P = currentPosition 
   
    if((P+1) % width < 4){
      if(isAtRight()){
        currentPosition += 1  
        checkRotatedPosition(P)                 
      }
  } 

    else if ((P) % width >5){
    if(isAtLeft()){
        currentPosition -= 1
        checkRotatedPosition(P)
}
  }
}



function rotate(){
  undraw()
  currentRotation ++  
  if(currentRotation === current.length){
    currentRotation = 0
  }
  current = theTetrominoes[random][currentRotation] 
  
  checkRotatedPosition() 
  draw()

}



const displaySquares = document.querySelectorAll('.mini-grid div')
let displayWidth = 4;
let displayIndex = 1;

const upNextTetrominoes = [
  [1, displayWidth+1, displayWidth*2+1, 2],
  [0,displayWidth,displayWidth+1,displayWidth*2+1],
  [1,displayWidth,displayWidth+1,displayWidth+2],
  [0,1,displayWidth,displayWidth+1],
  [1,displayWidth+1,displayWidth*2+1,displayWidth*3+1]
]



function displayShape(){

  displaySquares.forEach( index => {
    index.classList.remove('tetromino')
    index.style.backgroundColor = '' 
  }
  )

  upNextTetrominoes[nextRandom].forEach(index => {
    displaySquares[displayIndex + index].classList.add('tetromino')
    displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom]
  }
    )
}


function diss(){


  for(let i = 0; i < 199; i += width){
    const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]

    if(row.every(index => squares[index].classList.contains('taken'))){
      score +=10
      scoreDisplay.innerHTML = score
          row.forEach(index => {
              squares[index].classList.remove('taken')
              squares[index].classList.remove('tetromino')
              squares[index].style.backgroundColor = ''
          })

          const squaresRemoved = squares.splice(i, width)
          squares = squaresRemoved.concat(squares)
          squares.forEach(block => grid.appendChild(block))
    }
  }
}

//add functionality to the button
startBtn.addEventListener('click', () => {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  } else {
    draw()
    timerId = setInterval(moveDown, 1000)
    nextRandom = Math.floor(Math.random()*theTetrominoes.length)
    displayShape()
  }
})

    //game over
    function gameOver() {
      if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
        scoreDisplay.innerHTML = 'end'
        clearInterval(timerId)
      }
    }



})























































