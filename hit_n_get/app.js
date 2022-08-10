const cardDisplay = document.querySelector('#box-content');
function createBorad(){
    for (let i=0; i< 9; i++){
        const card = document.createElement('div')
        card.setAttribute('class','col-md-4')
        card.setAttribute('id','card' + i)
        card.setAttribute('data-id',i)
        card.innerHTML = `
        <div class="box card" id="box-${i}"> </div>
        `
        // card.innerHTML = `
        // <img data-id= ${i} src='https://cdn4.iconfinder.com/data/icons/set-1/32/__22-256.png'>
        // `

        cardDisplay.appendChild(card)
    }
};

createBorad();

const squares = document.querySelectorAll('.box');
const ralph = document.querySelector('.ralph');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
let currentTime = 60;
let result = 0;
let hitPosition;
let timerId = null;

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('ralph');
        square.classList.remove('ralph2');

    })

    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('ralph');
    hitPosition = randomPosition.id;
    // console.log(randomPosition)
}


squares.forEach(square =>{
    square.addEventListener('mousedown',()=>{

        if (square.id == hitPosition){
            square.classList.remove('ralph');
            square.classList.add('ralph2');

            result++;
          
            score.innerHTML = result;
            hitPosition = null;
        }
    })
})

function runRalph(){
    
    timerId = setInterval(randomSquare,800)
}

runRalph();

function countDown(){
    currentTime--;
    timeLeft.innerHTML =currentTime;

    if(currentTime == 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Game Over');
    }
}

let countDownTimerId = setInterval(countDown,1000)