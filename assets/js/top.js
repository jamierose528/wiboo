const url = "https://api.simkl.com/anime/best/";
fetch(url)
  .then(
    response => response.text() // .json(), .blob(), etc.
  ).then(
    data => console.log(data) // Handle here
  )

  fetch(url, {
    headers: new Headers({
      'Content-Type': 'application/json',
      'simkl-api-key': 'dfea3c269f2760a757adae2f4e0512c2fe593878f246a8c93275e75bcf6bd79d'
    })
  })
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (data) {
    const cardContainer = document.querySelector(".card-container");
    console.log(data);
    data.forEach((show) => {
      const card = document.createElement('div');
      card.classList.add('show-card');
      const title = document.createElement('h5');
      title.textContent = show.title;
      const image = document.createElement('img');
      image.src = `https://simkl.in/posters/${show.poster}_c.webp`;
      image.alt = show.title;
      image.classList.add('img-card');
      const year = document.createElement('p');
      year.textContent = show.year;
      const ratingContainer = document.createElement('div');
      const rating = document.createElement('p');
      const votes = document.createElement('p');
      rating.textContent = `Rating: ${show.ratings.mal?.rating }`;
      votes.textContent = `Votes: ${show.ratings.mal?.votes }`;
      ratingContainer.appendChild(rating);
      ratingContainer.appendChild(votes);
      card.appendChild(title);
      card.appendChild(image);
      card.appendChild(year);
      card.appendChild(ratingContainer);
      cardContainer.appendChild(card);
    });


  })
  
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