
const container = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel img');
let index = 0;

function showImage() {
  const offset = -index * 100;
  container.style.transform = `translateX(${offset}%)`;
}

function prevImage() {
  index = (index > 0) ? index - 1 : images.length - 1;
  showImage();
}

function nextImage() {
  index = (index < images.length - 1) ? index + 1 : 0;
  showImage();
}