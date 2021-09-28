const main = document.querySelector('main');

function addCard(char) {
  const newFire = document.createElement('div');
  newFire.setAttribute('class', 'fire');

  const newArticle = document.createElement('article');
  const inImg = document.createElement('img');
  inImg.setAttribute('src', './' + char.slug + '.png');
  inImg.setAttribute('alt', char.realName);
  newArticle.appendChild(inImg);

  if (char.rarity === 'SS' || char.rarity === 'Z') {
    const tierBadge = document.createElement('p');
    tierBadge.setAttribute('class', 'center badge');
    tierBadge.innerText = char.rarity;
    newArticle.appendChild(tierBadge);
  }

  const inH2 = document.createElement('h2');
  inH2.setAttribute('class', 'center');
  inH2.innerText = char.realName;
  newArticle.appendChild(inH2);

  newFire.appendChild(newArticle);
  main.appendChild(newFire);
}

const characters = [
  {
    realName: 'Alika',
    slug: 'alika',
    rarity: 'S',
  },
  {
    realName: 'Amerpact',
    slug: 'amerpact',
    rarity: 'A',
  },
  {
    realName: "A'misandra",
    slug: 'amisandra',
    rarity: 'SS',
  },
  {
    realName: 'Bahamut',
    slug: 'bahamut',
    rarity: 'S',
  },
  {
    realName: 'Gatz',
    slug: 'gatz',
    rarity: 'S',
  },
  {
    realName: 'Gugba',
    slug: 'gugba',
    rarity: 'SS',
  },
  {
    realName: 'Olber',
    slug: 'olber',
    rarity: 'SS',
  },
  {
    realName: 'Pizfer',
    slug: 'pizfer',
    rarity: 'Z',
  },
];

for (let i = 0; i < characters.length; i++) {
  const char = characters[i];
  addCard(char);
}
