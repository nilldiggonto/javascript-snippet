const computerChoice = document.getElementById('computer-choice')
const userChoice = document.getElementById('user-choice')
const resultChoice = document.getElementById('result')

const possibleChoice = document.querySelectorAll('.btn-sm')
let userPick
let userMachineres
let computerMachineres
let computerPick
let result

possibleChoice.forEach((pc,i) => pc.addEventListener('click',(e)=>{
    userMachineres = i +1
    userPick = e.target.children[0].src;
    userChoice.innerHTML = `
    <img src="${userPick}" width="25px" height="25px" alt="">

    `
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice(){
    const randomNumber =Math.floor( Math.random() * possibleChoice.length) + 1;
    computerMachineres = randomNumber
    if (randomNumber === 1){
        computerPick = `
        <img src="https://cdn4.iconfinder.com/data/icons/font-awesome-regular/512/hand-rock-128.png" width="25px" height="25px" alt="">
        
        `
    }
    if (randomNumber === 2){
        computerPick = `
        <img src="https://cdn0.iconfinder.com/data/icons/public-sign-part04/100/_-59-256.png" width="25px" height="25px" alt="">
        
        `
    }
    if (randomNumber === 3){
        computerPick = `
        <img src="https://cdn2.iconfinder.com/data/icons/hand-gestures-2-2/128/Scissor-Hand-Finger-Gesture-Gesture-Scissors-256.png" width="25px" height="25px" alt="">
        
        `
    }

    computerChoice.innerHTML = computerPick;

}


function getResult(){
    if (userMachineres === computerMachineres ){
        result = 'its a draw'
    }else if(computerMachineres === 1 && userMachineres === 2 ){
        result = "you Win!"
    }else if(computerMachineres===2 && userMachineres === 3){
        result = "you loss!"
    }else if (computerMachineres === 2 && userMachineres === 3){
        result = "you win!"
    }else if (computerMachineres === 2 && userMachineres === 1){
        result = "you loss!"
    }else if (computerMachineres === 3 && userMachineres === 1){
        result = "you win!"
    }else if (computerMachineres === 2 && userMachineres === 2){
        result = "you loss!"
    }

    resultChoice.innerHTML = result;
}