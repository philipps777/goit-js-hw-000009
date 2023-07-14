const startEl = document.querySelector('button[data-start]');

const stopEl = document.querySelector('button[data-stop]');

const bodyEl = document.body;
let  colorBody = null;


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

stopEl.disabled = true;
startEl.addEventListener('click', onClickStart);
stopEl.addEventListener('click', onClickStop);

function setButtonStates(startDisabled, stopDisabled) {
    startEl.disabled = startDisabled;
    stopEl.disabled = stopDisabled;
  }

function onClickStart() {  
    setButtonStates(true, false);  
    colorBody = setInterval(function() {
        bodyEl.style.backgroundColor = getRandomHexColor();
            }, 1000);
}

function onClickStop() {
    setButtonStates(false, true);
    clearInterval(colorBody);
}

