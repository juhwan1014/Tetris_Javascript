document.addEventListener('DOMContentLoaded', () =>{

    let squares = Array.from(document.querySelectorAll('.grid div'))
    const scoreDisplay = document.querySelector('#socre')
    const startBtn = document.querySelector('#start-button')
    const width = 10; 

    let socre = 0

  const lTetromino = [
      [1, width+1, width*2+1, 2],
      [width, width+1, width+2, width*2+2],
      [1, width+1, width*2+1, width*2],
      [width, width*2, width*2+1, width*2+2]
    ]
  
    const zTetromino = [
      [0,width,width+1,width*2+1],
      [width+1, width+2,width*2,width*2+1],
      [width,width+1,width*2+1,width*2+2],
      [2, width+1,width+2,width*2+1]
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

 let current = theTetrominoes[random][currentRotation]
 

// 0 < Math.random() <1

 let random =  Math.floor(Math.random()*theTetrominoes.length)

 function draw(){
    current.forEach(index => 
        squares[currentPosition + index].classList.add('tetromino')
        )
 }

function undraw(){
    current.forEach(index => 
        squares[currentPosition + index].classList.remove('tetromino')
        )
}


 draw()




})

