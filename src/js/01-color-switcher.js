const startEl = document.querySelector('button[data-start]');

const stopEl = document.querySelector('button[data-stop]');

const bodyEl = document.body;


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startEl.addEventListener('click', onClickStart);
stopEl.addEventListener('click', onClickStop);

function onClickStart() {  
    startEl.disabled = true;   
    stopEl.disabled = false;    
    colorBody = setInterval(function() {
        bodyEl.style.backgroundColor = getRandomHexColor();
            }, 1000);
}

function onClickStop() {
    startEl.disabled = false;
    stopEl.disabled = true; 
    clearInterval(colorBody);
}