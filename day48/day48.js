const images = document.querySelector(".image");

const container = document.querySelector(".container");
const unsplashUrl = "https://source.unsplash.com/random/119807";
const rows = 5;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.classList.add("image");
  img.src = `${unsplashUrl}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandom()}x${getRandom()}`;
}

function getRandom() {
  return Math.floor(Math.random() * 10) + 300;
}
