(function() {
  let button = document.querySelector('.btn');
  let input = document.getElementById('itemInput');
  let list = document.querySelector('.item-list');
  let clear = document.querySelector('#clear-list');
  let feedback = document.querySelector('.feedback');
  var i;
  var complete;
  var del;
  var edit;

  if(window.localStorage.length > 0) {
    let l = window.localStorage.length;
    for(let i = 0; i < l; i++) {
      list.innerHTML += window.localStorage.getItem(`item${i}`);
    }
  }

  button.addEventListener('click', addListItem);
  window.addEventListener('DOMContentLoaded', apply);
  clear.addEventListener('click', clearStorage);

  function addListItem(e) {
    e.preventDefault();
    i = list.children.length;

    if(input.value.trim() == '') {
      feedback.textContent = '';
      feedback.textContent = 'Please enter valid name for the item';
      feedback.classList.add('showItem', 'alert-danger');
      setTimeout(function() {feedback.classList.remove('showItem')}, 3000);
      return;
    }

    list.innerHTML += `<div><div class="item my-3">
    <h5 class="item-name text-capitalize">${input.value}</h5>
    <div class="item-icons">
     <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
     <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
     <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
    </div>
   </div>
   </div>`;
   window.localStorage['item'+i] = `<div>${list.children[i].innerHTML}</div>`;
   input.value = '';
   i++;

   apply();
  }

  function check(e) {
    e.preventDefault();
    let element = this.parentElement.parentElement;
    let index = getIndex(element);

    if(element.children[0].classList.contains('completed')) {
      element.children[0].classList.remove('completed');
      this.classList.remove('visibility');
    } else {
      element.children[0].classList.add('completed');
      this.classList.add('visibility');
    }
    window.localStorage.setItem('item'+index, `<div>${element.parentElement.innerHTML}</div>`);
  }

  function remove(e) {
    e.preventDefault();
    let element = this.parentElement.parentElement;
    let index = getIndex(element);

    element.parentElement.parentElement.removeChild(element.parentElement);

    for(let k = index;  k < window.localStorage.length; k++) {
      window.localStorage.setItem('item' + k, window.localStorage.getItem('item'+ (k+1)));
    }

    if(this.classList.contains('edit-item')) {
      input.value = element.textContent.trim();
      input.focus();
    }

    removeNull();
  }

  function clearStorage(e) {
    list.innerHTML = '';
    window.localStorage.clear();
  }

  function apply(e) {
    complete = document.querySelectorAll('.complete-item');
    del = document.querySelectorAll('.delete-item');
    edit = document.querySelectorAll('.edit-item');

    complete.forEach(item => item.addEventListener('click', check));
    del.forEach(item => item.addEventListener('click', remove));
    edit.forEach(item => item.addEventListener('click', remove));
  }

  function getIndex(element) { //this took me 4 hours of work to get working 😭😭😭 i wanna cry
    var j;
    let listItems = document.querySelectorAll('.item-list > div');
    for(j = 0; j < listItems.length; j++) {
      if(element.parentElement == listItems[j]) {
        return j;
      }
    }
    return j;
  }

  function removeNull() {
    window.localStorage.removeItem('item' + (window.localStorage.length-1));
  }
})();
