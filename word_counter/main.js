const textEl = document.getElementById('textarea');
const totalEl = document.getElementById('total-counter');
const remainEl = document.getElementById('remain-counter');

textEl.addEventListener("keyup",()=>{
    updateCounter();
})

function updateCounter(){
   totalEl.innerText =  textEl.value.length;
   remainEl.innerText =  textEl.getAttribute('maxLength') -textEl.value.length;
}

//navbar background change on scroll

const navEl = document.querySelector(".navbar");
const footerEl = document.querySelector(".footer");
window.addEventListener("scroll",()=>{
    if (window.scrollY > footerEl.offsetTop -navEl.offsetHeight){
        navEl.classList.add('active');

    }else{
        navEl.classList.remove('active');
    }
});

// mouse trail
const bodyEl = document.querySelector('body');

bodyEl.addEventListener("mousemove",(e)=>{
    const xpos = e.offsetX;
    const ypos = e.offsetY;
    const spanEl = document.createElement("span");
    spanEl.setAttribute("class","trail");
    spanEl.style.left = xpos + "px";
    spanEl.style.top = ypos + "px";

    const size = Math.random() * 50;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";


    bodyEl.appendChild(spanEl);

    setTimeout(()=>{
        spanEl.remove();
    },2000);
})