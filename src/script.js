let breakingImg = document.querySelector('#breakingImg');
let breakingNews_title = document.querySelector('#breakingNews .title');
let breakingNews_desc = document.querySelector('#breakingNews .description');
let WNews = document.querySelector('.WNews');
let USNews = document.querySelector('#USNews .newsBox');
let WorldNews = document.querySelector('#WorldNews .newsBox');
let BusinessNews = document.querySelector('#BusinessNews .newsBox');
let ArtsNews = document.querySelector('#ArtsNews .newsBox');
let LifestyleNews = document.querySelector('#LifestyleNews .newsBox');
let OpinionNews = document.querySelector('#OpinionNews .newsBox');

let header = document.querySelector('.header');
let menu = document.querySelector('nav ul');
let ToggleMenu = document.querySelector('.bar');

const toggle = (e) => {
  ToggleMenu.classList.toggle('active');
  menu.classList.toggle('activeMenu');
};
ToggleMenu.addEventListener('click', toggle);

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

const fetchdata = async (section) => {
  const apiKey = 'aEw0xd0wuOukh7khEuHH9tnTeD1VkGbY';
  // const apiKey = 'r3pV0wgYfn8Z9kHyENbrUlC1nUrE5TmS';
  // const apiKey = 'hsI9MnkjAwo3FAxgHB2IfWk7Tqg0rFXV';
  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results.slice(0, 10);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const add_breakingNews = (data) => {
  if (data.length > 0) {
    const imageUrl = data[0].multimedia
      ? data[0].multimedia[0].url
      : 'default-image.jpg';
    breakingImg.innerHTML = `<img src="${imageUrl}" alt="Breaking News Image">`;
    breakingNews_title.innerHTML = `<a href="${data[0].url}" target="_blank"><h2>${data[0].title}</h2></a>`;
    breakingNews_desc.innerHTML = `${data[0].abstract}`;
  }
};
fetchdata('home').then(add_breakingNews);

const add_WNews = (data) => {
  let html = '';
  data.forEach((element) => {
    const title =
      element.title.length < 100
        ? element.title
        : element.title.slice(0, 6) + '...';
    const imageUrl = element.multimedia
      ? element.multimedia[0].url
      : 'default-image.jpg';

    html += `<div class="news">
                <div class="img">
                    <img src="${imageUrl}" alt="World News Image">
                </div>
                <div class="text">
                    <div class="title">
                        <a href="${element.url}" target="_blank"><p>${title}</p></a>
                    </div>
                </div>
             </div>`;
  });
  WNews.innerHTML = html;
};

fetchdata('world').then(add_WNews);

const add_NYTNews = (newsElement, data) => {
  let html = '';
  data.forEach((element) => {
    let title =
      element.title.length < 100
        ? element.title
        : element.title.slice(0, 10) + '...';
    let imageUrl =
      element.multimedia && element.multimedia.length > 0
        ? element.multimedia[0].url
        : 'default-image.jpg';

    html += `<div class="newsCard">
                <div class="img">
                    <img src="${imageUrl}" alt="image">
                </div>
                <div class="text">
                    <div class="title">
                        <a href="${element.url}" target="_blank"><p>${title}</p></a>
                    </div>
                </div>
             </div>`;
  });
  newsElement.innerHTML = html;
};

fetchdata('us').then((data) => add_NYTNews(USNews, data));
fetchdata('world').then((data) => add_NYTNews(WorldNews, data));
fetchdata('business').then((data) => add_NYTNews(BusinessNews, data));
fetchdata('arts').then((data) => add_NYTNews(ArtsNews, data));
fetchdata('fashion').then((data) => add_NYTNews(LifestyleNews, data));
fetchdata('opinion').then((data) => add_NYTNews(OpinionNews, data));
