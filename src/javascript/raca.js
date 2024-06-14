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
      infoText = 'Os Pit Bulls são uma categoria de raças de cães que incluem o American Pit Bull Terrier, o American Staffordshire Terrier, o Staffordshire Bull Terrier, e, em alguns casos, o American Bully. Esses cães são conhecidos por sua força, coragem e lealdade, mas também são frequentemente alvo de controvérsia devido a percepções sobre seu temperamento e segurança.<h1>História e Origem</h1>Os Pit Bulls foram originalmente criados no Reino Unido no século XIX, a partir do cruzamento de bulldogs com terriers, com o objetivo de criar um cão que combinasse a força dos bulldogs com a tenacidade dos terriers. Esses cães foram usados em esportes sangrentos como brigas de cães e bull-baiting. Com a migração para os Estados Unidos, eles se tornaram conhecidos como American Pit Bull Terriers e foram empregados em diversas tarefas, incluindo caça, pastoreio e como cães de família devido à sua lealdade e coragem.;<h1>Características Físicas e Comportamentais </h1><h2>Aparência:</h2> Os Pit Bulls geralmente têm um corpo musculoso e atlético, com uma cabeça larga e forte. Sua pelagem é curta e pode variar em diversas cores.<h2>Temperamento:</h2>São conhecidos por serem cães inteligentes, energéticos e afetuosos com seus donos. No entanto, devido ao seu histórico de criação para brigas, alguns indivíduos podem exibir comportamentos agressivos, especialmente se não forem socializados e treinados adequadamente desde filhotes.<h2>Necessidades de Exercício:</h2>Eles são muito ativos e precisam de bastante exercício para se manterem saudáveis e equilibrados. Caminhadas diárias, brincadeiras e atividades físicas são essenciais.'
      break;
    case 'bulldog':
      infoText = 'O Bulldog é uma raça de cão de companhia, conhecida por sua cabeça larga e ombros robustos.';

      break;
    default:
      infoText = 'Informações não disponíveis.';
  }

  infoDiv.innerHTML = `<p>${infoText}</p>`;
}
