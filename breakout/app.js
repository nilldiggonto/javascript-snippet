const grid = document.querySelector('#plane');
const blockWidth = 100;
const blockHeight = 20;
const userStart = [ 230,10]
const currentPosition = userStart
const boardWidth = 450;
var colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];

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



//move user
function moveUser(e){
    console.log(e.key);
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

