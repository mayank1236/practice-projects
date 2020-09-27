let holes = document.querySelectorAll('.hole');
let score = document.querySelector('.score');
let moles = document.querySelectorAll('.mole');

let timeUp = false;
var i = 0;

function startGame() {
  timeUp = false;
  i = 0;
  score.innerText = 0;
  game();
  setTimeout(() => timeUp = true, 15000);
}

function holeNum() {
  let randomHole = Math.floor(Math.random() * 6);
  return Number(randomHole);
}

function appearTimer() {
  let popTime = (Math.random() * 0.5) + 0.5;
  return Number(popTime);
}

function game() {
  let n = holeNum();
  let hole = holes[n];
  let time = appearTimer() * 1000;

  hole.classList.add('up');

  setTimeout(function() {
    hole.classList.remove('up');
    if(!timeUp){
      game();
    };
  }, time);

}

function showScore(e) {
  i++;
  score.innerText = i;
  return;
}

moles.forEach(mole => mole.addEventListener('click', showScore));
