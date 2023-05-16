// Получаем элементы плеера
const videoElement = document.querySelector('video');
const playPauseButton = document.querySelector('#play-pause-button');
const volumeSlider = document.querySelector('#volume-slider');
const muteUnmuteButton = document.querySelector('#mute-unmute-button');

// Обработчик нажатия на кнопку воспроизведения/приостановления
playPauseButton.addEventListener('click', () => {
  if (videoElement.paused) {
    videoElement.play();
    playPauseButton.textContent = 'Приостановить';
  } else {
    videoElement.pause();
    playPauseButton.textContent = 'Воспроизвести';
  }
});

// Обработчик изменения громкости
volumeSlider.addEventListener('input', () => {
  videoElement.volume = volumeSlider.value;
});

// Обработчик нажатия на кнопку выключения/включения звука
muteUnmuteButton.addEventListener('click', () => {
  if (videoElement.muted) {
    videoElement.muted = false;
    muteUnmuteButton.textContent = 'Выключить звук';
  } else {
    videoElement.muted = true;
    muteUnmuteButton.textContent = 'Включить звук';
  }
});
