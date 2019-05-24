//Задание 6:

//1. При помощи DOM API создайте input и button
const input = document.createElement('input');
const button = document.createElement('button');

//2. Поместите созданные элементы на страницу
document.body.appendChild(input);
document.body.appendChild(button);

//3. При клике на кнопку необходимо выводить в консоль значение из текстового поля
button.addEventListener('click', function() {
  console.log(input.value);
})