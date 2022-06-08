const homeButton = document.getElementById('world-today');
const businessButton = document.getElementById('business');
const scienceButton = document.getElementById('science');
const sportsButton = document.getElementById('sports');
const techButton = document.getElementById('technology');
const politicsButton = document.getElementById('politics');
const searchButton = document.getElementById('search-button');

const loader = document.getElementById('loader');

const newsQuery = document.getElementById('news-query');
const newsType = document.getElementById('news-type');
const newsDetails = document.getElementById('news-details');

// News Array
let newsDataArray = [];

//  News Categories
const TODAYS_NEWS = 'https://inshorts.deta.dev/news?category=world';
const BUSINESS_NEWS = 'https://inshorts.deta.dev/news?category=business';
const SCIENCE_NEWS = 'https://inshorts.deta.dev/news?category=science';
const SPORTS_NEWS = 'https://inshorts.deta.dev/news?category=sports';
const TECH_NEWS = 'https://inshorts.deta.dev/news?category=technology';
const POLITICS_NEWS = 'https://inshorts.deta.dev/news?category=politics';
const ENTERTAINMENT_NEWS = 'https://inshorts.deta.dev/news?category=entertainment';
const SEARCH_NEWS = 'https://inshorts.deta.dev/news?q=category=all';


window.onload = function() {
  newsType.innerHTML += "<h4>Today</h4>";
  displayLoader();
  fetchTodaysNews();
};

homeButton.addEventListener("click", function() {
  newsType.innerHTML = "<h4>Today</h4>";
  fetchTodaysNews();
});

businessButton.addEventListener("click", function() {
  newsType.innerHTML = "<h4>Business</h4>";
  displayLoader();
  fetchBusinessNews();
});

scienceButton.addEventListener("click", function() {
  newsType.innerHTML = "<h4>Science</h4>";
  fetchScienceNews();
});

sportsButton.addEventListener("click", function() {
  newsType.innerHTML = "<h4>Sports</h4>";
  displayLoader();
  fetchSportsNews();
});

techButton.addEventListener("click", function() {
  newsType.innerHTML = "<h4>Technology</h4>";
  displayLoader();
  fetchTechNews();

});
politicsButton.addEventListener("click", function() {
  newsType.innerHTML = "<h4>Politics</h4>";
  displayLoader();
  fetchPoliticsNews();
});

searchButton.addEventListener("click", function() {
  newsType.innerHTML = "<h4>Search : "+newsQuery.value+"</h4>";
  fetchNewsQuery();
});


// Fetch functions
const fetchTodaysNews = async () => {
  const response = await fetch(TODAYS_NEWS);
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    newsDataArray = jsonResponse.data;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
  }
  displayNews();
}

const fetchBusinessNews = async () => {
  const response = await fetch(BUSINESS_NEWS);
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    newsDataArray = jsonResponse.data;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
  }
  displayNews();
}

const fetchScienceNews = async () => {
  const response = await fetch(SCIENCE_NEWS);
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    newsDataArray = jsonResponse.data;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
  }
  displayNews();
}

const fetchSportsNews = async () => {
  const response = await fetch(SPORTS_NEWS);
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    newsDataArray = jsonResponse.data;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
  }
  displayNews();
}

const fetchTechNews = async () => {
  const response = await fetch(TECH_NEWS);
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    newsDataArray = jsonResponse.data;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
  }
  displayNews();
}

const fetchPoliticsNews = async () => {
  const response = await fetch(POLITICS_NEWS);
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    newsDataArray = jsonResponse.data;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
  }
  displayNews();
}

const fetchNewsQuery = async () => {

  if (!newsQuery.value)
  return;

  const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value));
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const jsonResponse = await response.json();
    newsDataArray = jsonResponse.data;
  } else {
    //  handle errors
    console.log(response.status, response.statusText);
  }
  displayNews();
}

// Display Loader
function displayLoader() {
  loader.innerHTML += `
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  `
}

function displayNews() {

  newsDetails.innerHTML = "";

  if (newsDataArray.length === 0) {
    newsDetails.innerHTML = "<h5>No data found.</h5>"
    return;
  }

  newsDataArray.forEach(news => {

    let date = news.date;

    let newsColumn = document.createElement('div');
    newsColumn.className = "col-sm-12 col-md-4 col-lg-3 p-2 card border-0"

    let newsCard = document.createElement('div');
    newsCard.className = "p-2";

    let newsImage = document.createElement('img');
    newsImage.className = "img-fluid";
    newsImage.setAttribute("height","matchparent");
    newsImage.setAttribute("width","100%");
    newsImage.src=news.imageUrl;

    let newsCardBody = document.createElement('div');

    let newsHeading = document.createElement('h5');
    newsHeading.className = "card-title mt-2";
    newsHeading.innerHTML = news.title;

    let dateHeading = document.createElement('h6');
    dateHeading.className = "text-secondary fw-light";
    dateHeading.innerHTML = date;

    let newsContent = document.createElement('p');
    newsContent.className = "text-muted";
    newsContent.innerHTML = news.content;

    let newsLink = document.createElement('a');
    newsLink.className = "btn btn-dark";
    newsLink.setAttribute("target", "_blank");
    newsLink.href = news.url;
    newsLink.innerHTML = "Read more";

    newsCardBody.appendChild(newsHeading);
    newsCardBody.appendChild(dateHeading);
    newsCardBody.appendChild(newsContent);
    newsCardBody.appendChild(newsLink);

    newsCard.appendChild(newsImage);
    newsCard.appendChild(newsCardBody);

    newsColumn.appendChild(newsCard);

    newsDetails.appendChild(newsColumn);
  });
}