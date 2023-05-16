const form = document.querySelector('#image-form');
const input = document.querySelector('#image-input');

// обработчик отправки формы
form.addEventListener('submit', e => {
  e.preventDefault();
  
  const file = input.files[0];
  
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    // обработчик завершения чтения файла
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      document.body.appendChild(img);
      
      // добавление в LocalStorage
      localStorage.setItem('image', reader.result);
    }
  }
});
