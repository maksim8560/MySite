// получаем ссылку на кнопку и на список
const menuToggle = document.getElementById('menu-toggle');
const menuList = document.querySelector('.menu-list');

// добавляем обработчик клика по кнопке
menuToggle.addEventListener('click', function() {
  // если список уже открыт, скрываем его, иначе — отображаем
  if (menuList.classList.contains('show')) {
    menuList.classList.remove('show');
  } else {
    menuList.classList.add('show');
  }
});
