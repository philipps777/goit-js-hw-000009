
import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}


const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const form = document.querySelector('.form');




form.addEventListener('submit', (e) => {
  e.preventDefault();

const initialDelay = parseInt(delayInput.value);
const step = parseInt(stepInput.value);
const amount = parseInt(amountInput.value);

let currentDelay = initialDelay;

for (let i = 1; i <= amount; i++) {
  createPromise(i, currentDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.Success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.Failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

  currentDelay += step;
}
});