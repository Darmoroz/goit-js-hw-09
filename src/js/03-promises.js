import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  from: document.querySelector('.form'),
};

refs.from.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const firstDelay = +e.currentTarget.elements.delay.value;
  const amount = +e.currentTarget.elements.amount.value;
  const stepDelay = +e.currentTarget.elements.step.value;

  counterPromise(firstDelay, stepDelay, amount);
}

function counterPromise(firstDelay, step, amount) {
  for (let i = 0; i < amount; i += 1) {
    delay = firstDelay + i * step;
    createPromise(i, delay).then(onFulfill).catch(onReject);
  }
}

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

function onFulfill({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
}

function onReject({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`);
}
