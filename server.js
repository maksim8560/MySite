const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

// Обработчик подключения нового клиента
wss.on('connection', (ws) => {
	console.log('Новый клиент подключился');

	// Обработчик получения сообщения от клиента
	ws.on('message', (message) => {
		const { username, messageText } = JSON.parse(message);
		console.log(`Получено сообщение от ${username}: ${messageText}`);

		// Отправка сообщения всем клиентам, кроме отправителя
		wss.clients.forEach((client) => {
			if (client !== ws && client.readyState === WebSocket.OPEN) {
				client.send(JSON.stringify({ username, messageText }));
			}
		});
	});

	// Обработчик закрытия соединения клиента
	ws.on('close', () => {
		console.log('Клиент отключился');
	});
});
