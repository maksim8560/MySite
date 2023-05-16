const mainBtn = document.getElementById('main-btn');
const container = document.querySelector('.container');

mainBtn.addEventListener('click', function() {
	const btnGroup = document.createElement('div');
	btnGroup.classList.add('btn-group');

	const yesBtn = document.createElement('button');
	yesBtn.innerText = 'Я ГЕЙ';

	const noBtn = document.createElement('button');
	noBtn.innerText = 'Я НЕ ГЕЙ!';

	btnGroup.appendChild(yesBtn);
	btnGroup.appendChild(noBtn);

	container.appendChild(btnGroup);

	mainBtn.style.display = 'none';

	yesBtn.addEventListener('click', function() {
		btnGroup.style.display = 'none';

		const resultText = document.createElement('div');
		resultText.id = 'result-text';
		resultText.innerText = 'Я ЗНАЛ!!!';

		container.appendChild(resultText);
	});

	noBtn.addEventListener('click', function() {
		btnGroup.style.display = 'none';

		const resultText = document.createElement('div');
		resultText.id = 'result-text';
		resultText.innerText = 'ТЫ ГЕЙ :) ХЫ-ХЫ-ХЫ';

		container.appendChild(resultText);
	});
});
