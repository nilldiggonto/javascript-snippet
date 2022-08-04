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