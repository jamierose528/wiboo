var showTitle = document.querySelector("#show-title");
var showSynopsis = document.querySelector("#show-synopsis");
var showImage = document.querySelector("img");

var id = localStorage.getItem("id");
fetch("https://api.jikan.moe/v4/anime/" + id)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (data) {
    console.log(data);
    showTitle.textContent = data.data.title;
    showSynopsis.textContent = data.data.synopsis;
    showImage.setAttribute("src", data.data.images.jpg.image_url);
  });
