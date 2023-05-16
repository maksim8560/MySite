const cards = document.querySelectorAll('.card');
const startButton = document.querySelector('.start-button');
const scoreDisplay = document.querySelector('.score');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flipped');

  if (!hasFlippedCard) {
    // Первая карта
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // Вторая карта
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.value === secondCard.dataset.value;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();

  score++;
  scoreDisplay.innerHTML = `Score: ${score}`;
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffleCards() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 8);
    card.style.order = randomPos;
  });
}

function startGame() {
  shuffleCards();

  cards.forEach(card => {
    card.addEventListener('click', flipCard);
  });

  startButton.style.display = 'none';
}

startButton.addEventListener('click', startGame);
