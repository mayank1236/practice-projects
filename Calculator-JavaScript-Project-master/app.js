//Wrap code in an IIFE
(function(){
let input = document.querySelector('.screen');
let operators = document.querySelectorAll('.btn-yellow');
let numbers = document.querySelectorAll('.btn-grey');
let equal = document.querySelector('.btn-equal');
let clear = document.querySelector('.btn-clear');

var entered = input.value;
input.value = 0;


numbers.forEach(number => number.addEventListener('click', type));
operators.forEach(op => op.addEventListener('click', type));
equal.addEventListener('click', calculate);
clear.addEventListener('click', close);

function type(e) {
  input.value = entered + this.dataset.num;
  entered = input.value;
}

function calculate(e) {
  input.value = eval(input.value);
}

function close(e) {
  input.value = 0;
  entered = input.value;
}
})(); //end IIFE
