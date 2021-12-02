var showTitle = document.querySelector("#show-title");
var showSynopsis = document.querySelector("#show-synopsis");
var showImage = document.querySelector("img");
var genreList = document.querySelector("#genre-list");
var rating = document.querySelector("#rating");
var score = document.querySelector("#score");
var currPage = document.querySelector("#page-number");

// moves anime ID into local storage to pull on second html
var id = localStorage.getItem("id");
fetch("https://api.jikan.moe/v4/anime/" + id)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (data) {
    var animeListing = data.data;
    console.log(data);

    // adds content to title, synoposis, and image
    showTitle.textContent = animeListing.title;
    showSynopsis.textContent = animeListing.synopsis;
    showImage.setAttribute("src", animeListing.images.jpg.image_url);
    rating.textContent = animeListing.rating;
    score.textContent = animeListing.score;

    // adds genre names
    for (let i = 0; i < animeListing.genres.length; i++) {
      const genre = animeListing.genres[i].name;
      var listItem = document.createElement("li");
      listItem.textContent = genre;
      genreList.append(listItem);
    }
  });

  function changePage() {
    var nextPage = currPage + 1;
    var prevPage = currPage - 1;
    // Need to complete after slightly adjusting search.js
  }
  
function changeImg() {
  var myImages = [
    "./assets/css/images/mangapanels.jpeg",
    "./assets/css/images/mangapanel2.jpeg",
    "./assets/css/images/mangapanel3.jpeg",
    "./assets/css/images/mangapanel4.png",
    "./assets/css/images/mangapanel5.jpeg",
  ];
  var imgShown = document.body.style.backgroundImage;
  var newImgNumber = Math.floor(Math.random() * myImages.length);
  document.body.style.backgroundImage = "url(" + myImages[newImgNumber] + ")";
}

changeImg();

function displayResultsGenre(choice) {
  fetch("https://api.jikan.moe/v4/anime?genre=" + choice)
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

