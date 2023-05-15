// Ожидание загрузки документа перед выполнением JavaScript-кода
document.addEventListener("DOMContentLoaded", () => {
  // Получаем HTML-элементы, с которыми мы будем работать
  const startBtn = document.getElementById("start-game-btn");
  const gameBoard = document.getElementById("game-board");
  const score1Elem = document.getElementById("score1");
  const score2Elem = document.getElementById("score2");

  let currentPlayer = null;
  let player1Score = 0;
  let player2Score = 0;

  // Функция, которая запускает игру
  function startGame() {
    // Предотвращаем повторное нажатие кнопки "Start Game"
    startBtn.disabled = true;

    // Отображаем игровое поле
    gameBoard.style
