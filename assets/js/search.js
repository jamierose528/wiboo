var searchButton = document.querySelector("#search-button");
var searchBarInput = document.querySelector("#search-bar-input");

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

searchButton.addEventListener("click", function (event) {
  displayResults();
});

document.addEventListener("keypress", logKey);
