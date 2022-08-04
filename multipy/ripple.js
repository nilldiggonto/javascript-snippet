const buttonEl = document.querySelector('.btn');

buttonEl.addEventListener("mouseover",(e)=>{
    const x = (e.pageX - buttonEl.offsetLeft);
    const y = (e.pageY - buttonEl.offsetTop);

    buttonEl.style.setProperty("--xPos",x+"px");
    buttonEl.style.setProperty("--yPos",y+"px");
})