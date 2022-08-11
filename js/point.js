const pointCheck = localStorage.getItem('point');
const time = 5000;

function givePointEveryMin() {
  localStorage.setItem('point', parseInt(localStorage.getItem('point')) + 1);
}

if (pointCheck === null) {
  localStorage.setItem('point', 1);
}

setInterval('givePointEveryMin()', time);
