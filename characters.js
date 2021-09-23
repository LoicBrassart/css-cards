const main = document.querySelector('main');

function addCard() {
  const newArticle = document.createElement('article');

  const inImg = document.createElement('img');
  inImg.setAttribute('src', './amisandra.png');
  inImg.setAttribute('alt', "A'misandra");
  newArticle.appendChild(inImg);

  const inH2 = document.createElement('h2');
  inH2.setAttribute('class', 'center');
  inH2.innerText = "A'misandra";
  newArticle.appendChild(inH2);

  main.appendChild(newArticle);
}

for (let i = 0; i < 50; i++) {
  addCard();
}
