const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
let timerId = null;
refs.stopBtn.disabled = true;
document.body.addEventListener('click', changeBodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function assignBodyColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
}
function changeBodyColor(e) {
  if (e.target === refs.startBtn) {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    timerId = setInterval(assignBodyColor, 1000);
  }
  if (e.target === refs.stopBtn) {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
  }
}
