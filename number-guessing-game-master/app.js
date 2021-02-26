//Generate a random number between 1 and 500
let number = Math.floor(Math.random() * 100);
const PreviousDoc = document.querySelector('html').innerHTML;
let wrapper = document.querySelector('#wrapper');
let input = document.querySelector('#guessField');
var btn = document.querySelector('#subt');
var guesses = document.querySelector('.guesses');
var nOfAttempts = 10;
var showAttempts = document.querySelector('.lastResult');
var lOrh = document.querySelector('.lowOrHi');

btn.addEventListener('click', getNumber);



function getNumber(e) {
  e.preventDefault();

  if(!(input.value.trim()) || isNaN(input.value)) {
    input.value = '';
    alert('You need to enter a Number between 1 & 100.')
    return;
  }

  let guess = Number(input.value.trim());

  return (result(guess, number));
}



function result(guess, number) {
  lOrh.style.width = '100%';
  lOrh.style.height = '40px';
  lOrh.style.display = 'none';
  lOrh.style.background = '#7b3056';
  lOrh.innerText = '';
  lOrh.style.paddingTop = '15px';
  guesses.innerText += ` ${guess} `;

  if(guess == number) {
    btn.style.display = 'none';
    wrapper.innerHTML += `<div id="result" style="width:100%;height:40px;padding-top:15px;background-color:#7b3056;">You guessed correctly!</div>
                          <button onclick="resetGame()" id="reset">Start new game</button>`;
    return;
  }

  if(nOfAttempts < 1) {
    btn.style.display = 'none';
    wrapper.innerHTML += `<div id="result" style="width:100%;height:40px;padding-top:15px;background-color:#7b3056;">Your attempts are over! Answer was ${number}</div>
                          <button onclick="resetGame()" id="reset">Start new game</button>`;
    return;
  }

  if(guess < number) {
    lOrh.innerText = 'You guessed too low! Try again!';
    lOrh.style.display = 'block';
  }else if(guess > number) {
    lOrh.innerText = 'You guessed too high! Try again!';
    lOrh.style.display = 'block';
  }

  input.value = '';
  nOfAttempts -= 1;
  showAttempts.innerText = `${nOfAttempts}`;
}



function resetGame() {
  number = Math.floor(Math.random() * 100);
  nOfAttempts = 10;
  btn.style.display = 'block';
  input.value = '';
  lOrh.style.display= "none";
  
  document.documentElement.innerHTML = PreviousDoc;
}
