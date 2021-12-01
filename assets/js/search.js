var searchButton = document.querySelector("#search-button");
var searchBarInput = document.querySelector("#search-bar-input");
var cardContainer = document.querySelector("#card-container");

// search bar
function displayResults() {
  var searchValue = searchBarInput.value;
  fetch("https://api.jikan.moe/v4/anime?q=" + searchValue)
    .then(function (response) {
      return response.json();
    })

    // grabs the mal_id of each title to set into local storage
    .then(function (results) {
      console.log(results.data[0].mal_id);
      localStorage.setItem("id", results.data[0].mal_id);
      location.replace("second.html");
    });
}

// enter key for search bar
function logKey(e) {
  console.log(e.code);
  if (e.code === "Enter") {
    displayResults();
  }
}

function fourRandomNumbers(animeArray) {
  var randomNumArray = [];

  for (let i = 0; i < 4; i++) {
    var randomNum = Math.floor(Math.random() * animeArray.length);
    if (randomNumArray.indexOf(randomNum) === -1) {
      randomNumArray.push(randomNum);
    } else {
      i--;
    }
  }
  return randomNumArray;
}

// four top anime cards on front page
fetch("https://api.jikan.moe/v4/anime?score=9")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (data) {
    var cards = document.querySelectorAll(".cards > img");
    var title = document.querySelectorAll("h6");
    var randomArray = fourRandomNumbers(data.data);
    for (let i = 0; i < randomArray.length; i++) {
      const animeObject = data.data[randomArray[i]];

      cards[i].setAttribute("src", animeObject.images.jpg.image_url);

      //   add change to 2nd html link when click on image
      cards[i].addEventListener("click", function (event) {
        console.log(animeObject.mal_id);
        localStorage.setItem("id", animeObject.mal_id);
        location.replace("second.html");
      });

      title[i].textContent = animeObject.title;
    }
  });

searchButton.addEventListener("click", function (event) {
  displayResults();
});

document.addEventListener("keypress", logKey);
