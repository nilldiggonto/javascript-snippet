const num1 = Math.ceil(Math.random()*10);
const num12 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById('question');
const scoreEl = document.getElementById('score');
questionEl.innerText = `What is ${num1} multiply by ${num12}?`;
let score = JSON.parse(localStorage.getItem('score'));

if (!score){
    score = 0;
}

scoreEl.innerText = `Score: ${score}`;
const correctAns= num1 * num12;
const inputEl = document.getElementById('input');

const formEl = document.getElementById('form');

formEl.addEventListener("submit",()=>{
    const userAns = +inputEl.value;
    if (userAns === correctAns ){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();

    }
});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}

