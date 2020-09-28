let feedGallery = document.querySelector('#feed-textarea ul');
let today = document.getElementById('date');
let url = 'https://www.news18.com/rss/football.xml';

function feedGenerator() {
  let months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  let days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  let time = new Date();
  let day = time.getDay();
  let date = ('0'+time.getDate()).slice(-2);
  let month = time.getMonth();
  let year = time.getFullYear();

  today.textContent = days[day]+' '+date+'/'+months[month]+'/'+year;

  feednami.load(url).then(feeds => {
    feedGallery.innerHTML = '';

    for(let i = 0; i < 20; i++) {
      let feed = feeds.entries[i];
      feedGallery.innerHTML += `<li style="margin-bottom:20px;"><a href="${feed.link}">${feed.title}</a></li>`;
    }
  });

  setInterval(feedGenerator, 900000);
}

feedGenerator();
//Using feednami to fetch RSS feeds
//https://toolkit.sekando.com/docs/en/feednami

//Feeds from BBC News
//https://www.bbc.com/news/10628494#userss
