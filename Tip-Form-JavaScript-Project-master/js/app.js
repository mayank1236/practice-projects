(function(){

let feed = document.querySelector('.feedback');
let loader = document.querySelector('.loader');

let btn = document.querySelector('.submitBtn');

let inputCount = document.querySelector('#input-users');
let inputBill = document.querySelector('#input-bill');

var bill;
var pplCount;
let service = document.querySelector('#input-service');

let result = document.querySelector('.results');
let tipAmt = document.querySelector('#tip-amount');
let totalAmt = document.querySelector('#total-amount');
let personAmt = document.querySelector('#person-amount');

var billErr;
var countErr;
var serviceErr;

btn.addEventListener('click', calculate);

function calculate(e) {
e.preventDefault();
  bill = inputBill.value;
  pplCount = inputCount.value;

  billErr = !(bill.length > 0 && bill>0);
  countErr = !(pplCount.length>0 && pplCount>0);
  serviceErr = !(service.value != 0);

  if(!(billErr) && !(countErr) && !(serviceErr)) {
    showRes();
  } else {
    showFeed();
  }
}

function showRes() {
  let tipPerc;

  if(service.value == 1) {
    tipPerc = 0.2;
  } else if(service.value == 2 ) {
    tipPerc = 0.1;
  } else {
    tipPerc = 0.02;
  }

  tipAmt.textContent = (Number(bill) * tipPerc).toFixed(2);
  totalAmt.textContent = (Number(bill) + (Number(bill) * tipPerc)).toFixed(2);
  personAmt.textContent = ((Number(bill) + (Number(bill) * tipPerc)) / Number(pplCount)).toFixed(2);

  loader.classList.add('showItem');

  setTimeout(function(){
    loader.classList.remove('showItem');
    result.classList.add('showItem');
  }, 2000);

  setTimeout(function(){
    result.classList.remove('showItem');
    inputBill.value = "";
    inputCount.value = "";
    service.value = 0;
  }, 7000);
}

function showFeed(e) {
  feed.innerHTML = '';

  if(billErr) {
    feed.innerHTML += "<p>Amount of bill can't be blank</p>";
  }
  if(countErr) {
    feed.innerHTML += "<p>Number of users must be greater then zero</p>";
  }
  if(serviceErr) {
    feed.innerHTML += "<p>You must select a service</p>";
  }

  feed.classList.add('showItem', 'alert-danger');

  setTimeout(function(){
    feed.classList.remove('showItem');
    feed.innerHTML = '';
  }, 5000);
}

})();
