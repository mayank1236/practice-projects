// Work to get the filter buttons working
(function(){

  let storeItem = document.querySelectorAll('.store-item');

//Filter button application function
  let filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(filterBtn => {
    filterBtn.addEventListener('click', search);
  });

  function search(e) {
    e.preventDefault();

    let itemType = this.dataset.filter;

    for(let i = 0; i<storeItem.length; i++) {
      if(itemType == 'all') {
        storeItem[i].style.display = 'block';
      }else if(storeItem[i].dataset.item != itemType) {
        storeItem[i].style.display = "none";
      }else {
        storeItem[i].style.display = 'block';
      }
    }
  };

})();

//SEARCH Box filter

(function(){
  let storeItem = document.querySelectorAll('.store-item');
  let searchItem = document.getElementById('search-item');

  searchItem.addEventListener('keyup', search);

  function search(e) {
    const searchFilter = e.target.value.toLowerCase().trim();

    storeItem.forEach(item => {
      if(item.textContent.includes(searchFilter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
 }
})();

(function(){
  let storeItem = Array.from(document.querySelectorAll('.store-item'));
  let imgs = Array.from(document.querySelectorAll('.store-img')).map(img => img.getAttribute('src'));
  let lightBox = document.querySelector('.lightbox-container');
  let lbItem = document.querySelector('.lightbox-item');
  let left = document.querySelector('.btnLeft');
  let right = document.querySelector('.btnRight');
  let close = document.querySelector('.lightbox-close');

  var imgCount = 0; //I FORGOT I COULD USE SIMPLY USE A GLOBAL VARIABLE AND WASTED LIKE 2 HOURS OF TIME

//Adding events listeners to elements of document

  left.addEventListener('click', chngImg);
  right.addEventListener('click', chngImg);
  close.addEventListener('click', chngImg);
  storeItem.forEach((item, index) => item.addEventListener('click', modal));

//functions

  function modal(e) {
    imgCount = storeItem.indexOf(this);
    lightBox.classList.add('show');
    lbItem.style.backgroundImage = `url("${imgs[imgCount]}")`;
  }

  function chngImg(e) {
    if(this == right) {
      imgCount++;
      if(imgCount >= (imgs.length)) {
        imgCount = 0;
      }
    }

    if(this == left) {
      imgCount--;
      if(imgCount < 0) {
        imgCount = imgs.length-1;
      }
    }

    if(this == close) {
      lightBox.classList.remove('show');
    }

    lbItem.style.backgroundImage = `url("${imgs[imgCount]}")`;
  }

})();
