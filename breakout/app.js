const grid = document.querySelector('#plane');
const blockWidth = 100;
const blockHeight = 20;
const userStart = [ 230,10]
const currentPosition = userStart
const boardWidth = 450;
const boardHeight = 600;
var colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
let ballTimerid
const ballStart = [300,30]
let ballCurrentPosition= ballStart;
const ballDiameter = 20

xDirection = 2
yDirection= 2
class Block{
    constructor(xAxis,yAxis){
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis + blockWidth,yAxis]
        this.topLeft = [xAxis,yAxis +blockHeight]
        this.topRight =[xAxis + blockWidth,yAxis + blockHeight]
    }
}

const blocks = [
    new Block(10,360),
    new Block(120,360),
    new Block(230,360),
    new Block(340,360),
    new Block(450,360),
    // new Block(560,360),
    // new Block(670,360),

    new Block(10,339),
    new Block(120,339),
    new Block(230,339),
    new Block(340,339),
    new Block(450,339),

    new Block(10,318),
    new Block(120,318),
    new Block(230,318),
    new Block(340,318),
    new Block(450,318),
    // new Block(10,270),
    // new Block(10,270),

]
function addBlock(){
   

    for (let i =0;i < blocks.length; i++ ){
        const brick = document.createElement('div')
        brick.classList.add('brick')
        brick.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        brick.style.left = blocks[i].bottomLeft[0] + 'px';
        brick.style.bottom = blocks[i].bottomLeft[1]+'px';

        grid.appendChild(brick)
    }
};

addBlock();

//add user
const user = document.createElement('div')
user.classList.add('user');
drawUser();
grid.appendChild(user)

function drawUser(){
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] +'px'
}

function drawBall(){
    ball.style.left = ballCurrentPosition[0] + 'px'
    ball.style.bottom = ballCurrentPosition[1] + 'px'
    
}


//move user
function moveUser(e){
    // console.log(e.key);
    switch(e.key){
        
        case 'ArrowLeft':
            if (currentPosition[0] > 0){
                currentPosition[0] -= 10
                drawUser()
            }
            break;
        
        case 'ArrowRight':
            if (currentPosition[0] < boardWidth){
                currentPosition[0] += 10
                drawUser()
            }
            break;


            

    }
}

document.addEventListener('keydown',moveUser)

//Adding Ball
const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)

//moving Ball
function moveBall(){
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection; 

    drawBall();
    checkForBreak();
};

ballTimerid = setInterval(moveBall,30);

//Collisions
function checkForBreak(){
    //break
    for (let i= 0; i< blocks.length; i++){
        if(
            (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] <blocks[i].bottomRight[0]) &&
            (ballCurrentPosition[1] + ballDiameter) > (blocks[i].bottomLeft[1]) && (ballCurrentPosition[1] < blocks[i].topLeft[1])
        ){
            const allBlocks = document.querySelectorAll('.brick');
            allBlocks[i].classList.remove('brick')
            blocks.splice(i,1)
            changeDirection()
        }
    };

    if (ballCurrentPosition[0] >= ( 450 - ballDiameter) || ballCurrentPosition[1] >=(450 - ballDiameter) ||
        ballCurrentPosition[0] <= 0
    ){
        changeDirection()
    }


    if ((ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
        (ballCurrentPosition[1] >currentPosition[1] && ballCurrentPosition[1] <currentPosition[1] + blockHeight)
        ){
            
            changeDirection()
        }
    // Game over
    if (ballCurrentPosition[1] <= -3){
        console.log('game over')
        clearInterval(ballTimerid)
    }
}

function changeDirection(){
    if(xDirection === 2 && yDirection === 2 ){
        yDirection = -2
        // console.log('one')
        return
    }

    if (xDirection === 2 && yDirection === -2){
        xDirection = -2
        // console.log('one2')

        return
    }

    if (xDirection === -2 && yDirection === -2){
            yDirection = 2
        // console.log('one3')

            return
    }
    if (xDirection === -2 && yDirection ===2 ){
        xDirection = 2
        // console.log('one4')

        return
    }
}
