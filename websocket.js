const socket = new WebSocket('ws://localhost:3000');

// Обработчик соединения с сервером
socket.addEventListener('open', (event) => {
    console.log('Соединение установлено');

    // Отправка начального сообщения после подключения к серверу
    socket.send('Привет, я новый пользователь');
});

// Обработчик получения сообщения от сервера
socket.addEventListener('message', (event) => {
    const receivedMessage = event.data;
    console.log(`Получено сообщение: ${receivedMessage}`);

    // Добавление сообщения в контейнер
    addMessageToContainer(receivedMessage);
});

// Обработчик ошибки подключения к серверу
socket.addEventListener('error', (event) => {
    console.error('Ошибка подключения:', event);
});

// Обработчик закрытия соединения с сервером
socket.addEventListener('close', (event) => {
    console.log('Соединение закрыто');
});

// Функция отправки сообщения на сервер
function sendMessageToServer(message) {
    socket.send(message);
}
