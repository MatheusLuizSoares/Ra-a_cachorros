const container = document.querySelector('.container');
const dogs = document.querySelectorAll('.dog img');
let index = 0;

function showImage() {
  const offset = -index * 100;
  container.style.transform = `translateX(${offset}%)`;
}

function prevImage() {
  index = (index > 0) ? index - 1 : dogs.length - 1;
  showImage();
}

function nextImage() {
  index = (index < dogs.length - 1) ? index + 1 : 0;
  showImage();
}
