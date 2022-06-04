const worldButton = document.getElementById('world');
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
const HEADLINES_NEWS = 'https://inshorts.deta.dev/news?category=hatke';
const WORLD_NEWS = 'https://inshorts.deta.dev/news?category=world';
const BUSINESS_NEWS = 'https://inshorts.deta.dev/news?category=business';
const SCIENCE_NEWS = 'https://inshorts.deta.dev/news?category=science';
const SPORTS_NEWS = 'https://inshorts.deta.dev/news?category=sports';
const TECH_NEWS = 'https://inshorts.deta.dev/news?category=technology';
const POLITICS_NEWS = 'https://inshorts.deta.dev/news?category=politics';
const ENTERTAINMENT_NEWS = 'https://inshorts.deta.dev/news?category=entertainment';
const SEARCH_NEWS = 'https://inshorts.deta.dev/news?q=';


window.onload = function() {
  newsType.innerHTML = "<h4>Headlines</h4>";
  fetchHeadlines();
};


worldButton.addEventListener("click", function() {
  newsType.innerHTML = "<h4>World News</h4>";
  fetchWorldNews();
});

businessButton.addEventListener("click", function() {
  newsType.innerHTML = "<h4>Business</h4>";
  fetchBusinessNews();
});

scienceButton.addEventListener("click", function() {
  newsType.innerHTML = "<h4>Science</h4>";
  fetchScienceNews();
});

sportsButton.addEventListener("click", function() {
  newsType.innerHTML = "<h4>Sports</h4>";
  fetchSportsNews();
});

techButton.addEventListener("click", function() {
  newsType.innerHTML = "<h4>Technology</h4>";
  fetchTechNews();

});
politicsButton.addEventListener("click", function() {
  newsType.innerHTML = "<h4>Politics</h4>";
  fetchPoliticsNews();
});

entertainmentButton.addEventListener("click", function() {
  newsType.innerHTML = "<h4>Entertainment</h4>";
  fetchEntertainmentNews();
});

searchButton.addEventListener("click", function() {
  newsType.innerHTML = `<h4>Search : ${newsQuery.value}</h4>`;
  fetchNewsQuery();
});


// Fetch functions
const fetchHeadlinesNews = async () => {
  const response = await fetch(HEADLINES_NEWS);
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

const fetchWorldNews = async () => {
  const response = await fetch(WORLD_NEWS);
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

  newsDataArray.forEach(news => {

    var date = news.publishedAt.split("T");

    var newsColumn = document.createElement('div');
    newsColumn.className = "col-sm-12 col-md-4 col-lg-3 p-2 card"

    var newsCard = document.createElement('div');
    newsCard.className = "p-2";

    var newsImage = document.createElement('img');
    newsImage.setAttribute("height","matchparent");
    newsImage.setAttribute("width","100%");
    newsImage.src=news.imageUrl;

    var newsCardBody = document.createElement('div');

    var newsHeading = document.createElement('h5');
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    var dateHeading = document.createElement('h6');
    dateHeading.className = "text-primary";
    dateHeading.innerHTML = date[0];

    var newsContent = document.createElement('p');
    newsContent.className = "text-muted";
    newsContent.innerHTML = news.content;

    var newsLink = document.createElement('a');
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