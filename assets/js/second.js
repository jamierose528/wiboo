var showTitle = document.querySelector("#show-title");
var showSynopsis = document.querySelector("#show-synopsis");
var showImage = document.querySelector("img");
var genreList = document.querySelector("#genre-list");
var rating = document.querySelector("#rating");
var score = document.querySelector("#score");

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

  