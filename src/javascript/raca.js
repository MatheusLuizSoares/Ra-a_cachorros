const container = document.querySelector('.container');
const dogs = document.querySelectorAll('.dog img');
const infoDiv = document.querySelector('.info');
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

function showInfo(breed) {
  let infoText = '';
  
  switch (breed) {
    case 'husky':
      infoText = 'O Husky Siberiano é uma raça de cão de trabalho originária do nordeste da Sibéria, na Rússia.';
      break;
    case 'pitbull':
      infoText = 'O Pitbull Americano é conhecido por sua força, coragem e lealdade.';
      break;
    case 'bulldog':
      infoText = 'O Bulldog é uma raça de cão de companhia, conhecida por sua cabeça larga e ombros robustos.';
      break;
    case 'Poodle'
     infoText=''
    default:
      infoText = 'Informações não disponíveis.';
  }

  infoDiv.innerHTML = `<p>${infoText}</p>`;
}
