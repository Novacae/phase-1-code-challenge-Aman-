// Code here\]
//const beerlist = document.querySelector('#beer-list');
//const bttn = document.querySelector('button');
//event on button
//bttn.addEventListener('click',bttn)
//fetch beer data
const beerList = document.getElementById("beer-list");
const beerImage = document.getElementById("beer-image");
const beerName = document.getElementById("beer-name");
const beerDescription = document.getElementById("beer-description");
const reviewsList = document.getElementById("review-list");
const descriptionForm = document.getElementById("description-form");
const reviewForm = document.getElementById("review-form");

function getBeerData() {
  return fetch("http://localhost:3000/beers")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("response not ok");
      }
      return response.json();
    })
    .catch(function (error) {
      console.error("Error fetching beer data:", error);
      return null;
    });
} //updating beer details
function showBeerDetails(beerData) {
  if (!beerData || beerData.length === 0) {
    console.error("no beer data available");
    return;
  }
  const beerOne = beerData[0];

  beerName.textContent = beerOne.name;
  beerImage.src = beerOne.image_url;
  beerDescription.textContent = beerOne.description;
}
const bttn = document.querySelector("button");

//event on button
bttn.addEventListener("click", bttn);
document.addEventListener("DOMContentLoaded", () => {
  getBeerData().then((beerData) => {
    showBeerDetails(beerData);
  });
});

// fetch beer data
function getBeers() {
  return fetch("http://localhost:3000/beers")
    .then(function (response) {
      if (!response.ok) {
        throw new error("response not ok");
      }
      return response.json();
    })
    .catch(function (error) {
      console.error("error getting data list", error);
      return null;
    });
}
const beerNav = document.querySelector("#beer-list");
function revealBeer(beerNav) {
  if (!beerNav || beerNav.length === 0) {
    console.error("no beer data available");
    return;
  } //modified DOM
  const beerBarOne = beerNav[1];
  document.querySelector("#beer-list li:nth-child(1)").textContent =
    beerBarOne.name;

  const beerBarTwo = beerNav[2];
  document.querySelector("#beer-list li:nth-child(2)").textContent =
    beerBarTwo.name;

  const beerBarTri = beerNav[3];
  document.querySelector("#beer-list li:nth-child(3)").textContent =
    beerBarTri.name;
}
//Display on webpage
let ind = 0;

function renderMenu() {
  beerList.innerHTML = "";
  beerObs.forEach((beer, i) => {
    const li = document.createElement("li");
    li.textContent = beer.name;
    li.addEventListener("click", () => {
      index = i;
      renderBeer(index);
    });
    beerList.appendChild(li);
  });
}
function renderBeer(index) {
  const beer = beerObs[index];
  beerImage.src = `${beer.image_url}`;
  beerName.innerText = `${beer.name}`;
  beerDescription.innerText = `${beer.description}`;
  reviewsList.innerHTML = "";
  for (const review of beer.reviews) {
    const list = document.createElement("li");
    list.textContent = review;
    reviewsList.appendChild(list);
    list.addEventListener("click", () => {
      reviewsList.removeChild(list);
    });
  }
}
//reviews
function showReviews() {
  return fetch("http://localhost:3000/beers")
    .then(function (response) {
      if (!response.ok) {
        throw new error("response not ok");
      }
      return response.json();
    })
    .catch(function (error) {
      console.error("error loading", error);
      return null;
    });
}
function revBeer(allReview) {
  if (!allReview || allReview.length === 0) {
    console.error("no reviews data available");
    return;
  }
  const reviewData = allReview[1];
  document.querySelector("#review-list li:nth-child(1)").textContent =
    reviewData.reviews;
  const reviewdAta = allReview[2];
  document.querySelector("#review-list li:nth-child(2)").textContent =
    reviewdAta.reviews;
}
//submitting reviews
const beerReForm = document.querySelector("#review-form");
const beerReviewText = document.querySelector("#review");
beerReForm.addEventListener("submit", (env) => {
  env.preventDefault();
  console.log(`review form ID: ${beerData.id}`);
  console.log("---------------------------------");
  if (beerReviewText.value !== "") {
    beerData.reviews.push(beerReviewText.value);
    patchBeer(beerData);
  } else {
    alert("Review is empty string!!");
  }
});
