const imageContainer = document.querySelector('.image-container');
const overlay = document.querySelector('.overlay');

imageContainer.addEventListener('mouseenter', () => {
  overlay.style.display = 'none';
});

imageContainer.addEventListener('mouseleave', () => {
  overlay.style.display = 'block';
});
