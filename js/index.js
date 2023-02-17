document.getElementById('open__modal-btn').addEventListener("click",function (){
    document.getElementById('modal__form').classList.add('open')
});
document.getElementById('close__modal-btn').addEventListener("click",function (){
    document.getElementById('modal__form').classList.remove('open')
});
document.addEventListener("keydown",(e) => {
    if(e.key === 'Escape'){
        document.getElementById('modal__form').classList.remove('open')
    }
});

document.getElementById('burger__btn').addEventListener("click",function (){
    document.getElementById('modal__burger-container').classList.add('open')
});
document.getElementById('close__burger-btn').addEventListener("click",function (){
    document.getElementById('modal__burger-container').classList.remove('open')
});
document.addEventListener("keydown",(e) => {
    if(e.key === 'Escape'){
        document.getElementById('modal__burger-container').classList.remove('open')
    }
});

