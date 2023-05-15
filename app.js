$(function() {
	// Обработчик отправки формы
	$('#loginForm').submit(function(event) {
		event.preventDefault(); // Отменяем стандартное действие
		const name = $('#nameInput').val().trim();
		if (name === '') return; // Ничего не делаем, если имя не указано

		// Добавляем нового игрока в список
		$('#playerList ul').append(`<li>${name}</li>`);

		// Если уже два игрока, начинаем игру
		if ($('#playerList li').length === 2) {
			startGame();
		}

		// Очищаем поле ввода имени
		$('#nameInput').val('');
	});

	function startGame() {
		// Создаем игровое поле
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				$('#gameBoard').append(`<div class="cell" data-row="${i}" data-col="${j}"></div>`);
			}
		}

		// Обработчик клика по ячейке
		$('.cell').click(function() {
			const row = $(this).data('row');
			const col = $(this).data('col');

			// Если ячейка уже занята, то ничего не делаем
			if (gameState[row][col] !== null) return;

			// Определяем, чей ход и меняем состояние поля
			const playerIndex = $('.currentPlayer').index();
			gameState[row][col] = playerIndex;

			// Заполняем ячейку и проверяем наличие побед
