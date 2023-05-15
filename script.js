
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

function updateBoard() {
	for (let i = 0; i < board.length; i++) {
		document.getElementById(`cell-${i}`).innerText = board[i];
	}
}

function handleClick(index) {
	if (board[index] === '' && !gameOver) {
		board[index] = currentPlayer;
		updateBoard();
		checkWin();
		changeTurn();
	}
}

function changeTurn() {
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
	document.body.className = `player-${currentPlayer}`;
}

function checkWin() {
	const winConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (let i = 0; i < winConditions.length; i++) {
		const [a, b, c] = winConditions[i];
		if (board[a] === board[b] && board[b] === board[c] && board[a] !== '') {
			gameOver = true;
			alert(`${currentPlayer} победил!`);
			return;
		}
	}

	if (!board.includes('')) {
		gameOver = true;
		alert('Ничья!');
	}
}

function reset() {
	board = ['', '', '', '', '', '', '', '', ''];
	currentPlayer = 'X';
	gameOver = false;
	updateBoard();
	document.body.className = '';
}

updateBoard();
