const main = document.querySelector('main');

function addCard(name) {
  const newFire = document.createElement('div');
  newFire.setAttribute('class', 'fire');

  const newArticle = document.createElement('article');
  const inImg = document.createElement('img');
  inImg.setAttribute('src', './' + name + '.png');
  inImg.setAttribute('alt', name);
  newArticle.appendChild(inImg);

  const inH2 = document.createElement('h2');
  inH2.setAttribute('class', 'center');
  inH2.innerText = name;
  newArticle.appendChild(inH2);

  newFire.appendChild(newArticle);
  main.appendChild(newFire);
}

const characters = [
  'alika',
  'amerpact',
  'amisandra',
  'bahamut',
  'gatz',
  'gugba',
  'olber',
  'pizfer',
];

for (let i = 0; i < characters.length; i++) {
  const charName = characters[i];
  addCard(charName);
}
