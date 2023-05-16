const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

// Обработчик подключения нового клиента
wss.on('connection', (ws) => {
	console.log('Новый клиент подключился');

	// Обработчик получения сообщения от клиента
	ws.on('message', (message) => {
		console.log(`Получено сообщение: ${message}`);

		// Рассылка сообщения всем клиентам, кроме отправителя
		wss.clients.forEach((client) => {
			if (client !== ws && client.readyState === WebSocket.OPEN) {
				client.send(message);
			}
		});
	});

	ws.on('close', () => {
console.log('Клиент отключился');
});
});
