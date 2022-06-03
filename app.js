const generalButton = document.getElementById('general');
const businessButton = document.getElementById('business');
const scienceButton = document.getElementById('science');
const sportsButton = document.getElementById('sports');
const techButton = document.getElementById('technology');
const politicsButton = document.getElementById('politics');
const entertainmentButton = document.getElementById('entertainment');
const searchButton = document.getElementById('search-button');

const newsQuery = document.getElementById('news-query');
const newsType = document.getElementById('news-type');
const newsDetails = document.getElementById('news-details');

// News Array
var newsDataArray = [];

//  News Categories 
const GENERAL_NEWS = 'https://inshorts.deta.dev/news?category=all';
const BUSINESS_NEWS = 'https://inshorts.deta.dev/news?category=business';
const SCIENCE_NEWS = 'https://inshorts.deta.dev/news?category=science';
const SPORTS_NEWS = 'https://inshorts.deta.dev/news?category=sports';
const TECH_NEWS = 'https://inshorts.deta.dev/news?category=technology';
const POLITICS_NEWS = 'https://inshorts.deta.dev/news?category=politics';
const ENTERTAINMENT_NEWS = 'https://inshorts.deta.dev/news?category=entertainment';
const SEARCH_NEWS = 'https://inshorts.deta.dev/news?category=entertainment';


generalButton.addEventListener("click", function() {
  fetchGeneralNews();
});

businessButton.addEventListener("click", function() {
  fetchBusinessNews();
});

scienceButton.addEventListener("click", function() {
  fetchScienceNews();
});

sportsButton.addEventListener("click", function() {
  fetchSportsNews();
});

techButton.addEventListener("click", function() {
  fetchTechNews();

});
techButton.addEventListener("click", function() {
  fetchPoliticsNews();
});

entertainmentButton.addEventListener("click", function() {
  fetchEntertainmentNews();
});

searchButton.addEventListener("click", function() {
  fetchNewsQuery();
});


// Fetch functions
const fetchGeneralNews = async () => {
  const response = await fetch(GENERAL_NEWS);
  console.log(response);
  
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);    
    newsDataArray = jsonResponse.category;
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
    newsDataArray = jsonResponse.category;
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
    newsDataArray = jsonResponse.category;
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
    newsDataArray = jsonResponse.category;
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
    newsDataArray = jsonResponse.category;
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
    newsDataArray = jsonResponse.category;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
  }
  displayNews();
}

const fetchEntertainmentNews = async () => {
  const response = await fetch(ENTERTAINMENT_NEWS);
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const jsonResponse = await response.json();
    newsDataArray = jsonResponse.category;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
  }
  displayNews();
}

const fetchNewsQuery = async () => {

  if (newsQuery.value == null)
  return;

  const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value));
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const jsonResponse = await response.json();
    newsDataArray = jsonResponse.category;
  } else {
    //  handle errors
    console.log(response.status, response.statusText);
  }
  displayNews();
}

function displayNews() {

  newsDetails.innerHTML = "";

  if (newsDataArray.length == 0) {
    newsDetails.innerHTML = "<h5>No data found.</h5>"
    return;
  }

  newsDataArray.forEach((news) => {

    var newsColumn = document.createElement('div');
    newsColumn.className = "col-sm-12 col-md-4 col-lg-3 p-2 card"

    var newsCard = document.createElement('div');
    newsCard.className = "p-2";

    var image = document.createElement('img');
    image.setAttribute("height","matchparent");
    image.setAttribute("width","100%");
    image.src=news.imageUrl;

    var newsCardBody = document.createElement('div');

    var newsHeading = document.createElement('h5');
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    var dateHeading = document.createElement('h6');

  });

}