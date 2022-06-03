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
  newsDataArray = [];
  if (response = "success") {
    const jsonResponse = await response.json();
    newsDataArray = jsonResponse;
  } else {
    // handle err
  }
  displayNews();
}

const fetchBusinessNews = async () => {
  const response = await fetch(BUSINESS_NEWS);
  newsDataArray = [];
  if (response = "success") {
    const jsonResponse = await response.json();
    newsDataArray = jsonResponse;
  } else {
    // handle err
  }
  displayNews();
}

const fetchScienceNews = async () => {
  const response = await fetch(SCIENCE_NEWS);
  newsDataArray = [];
  if (response = "success") {
    const jsonResponse = await response.json();
    newsDataArray = jsonResponse;
  } else {
    // handle err
  }
  displayNews();
}

const fetchSportsNews = async () => {
  const response = await fetch(SPORTS_NEWS);
  newsDataArray = [];
  if (response = "success") {
    const jsonResponse = await response.json();
    newsDataArray = jsonResponse;
  } else {
    // handle err
  }
  displayNews();
}

const fetchTechNews = async () => {
  const response = await fetch(TECH_NEWS);
  newsDataArray = [];
  if (response = "success") {
    const jsonResponse = await response.json();
    newsDataArray = jsonResponse;
  } else {
    // handle err
  }
  displayNews();
}

const fetchPoliticsNews = async () => {
  const response = await fetch(POLITICS_NEWS);
  newsDataArray = [];
  if (response = "success") {
    const jsonResponse = await response.json();
    newsDataArray = jsonResponse;
  } else {
    // handle err
  }
  displayNews();
}

const fetchEntertainmentNews = async () => {
  const response = await fetch(ENTERTAINMENT_NEWS);
  newsDataArray = [];
  if (response = "success") {
    const jsonResponse = await response.json();
    newsDataArray = jsonResponse;
  } else {
    // handle err
  }
  displayNews();
}

const fetchNewsQuery = async () => {
  const response = await fetch(S)
}