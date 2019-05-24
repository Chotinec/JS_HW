//Задание 5:

//1. При помощи DOM API создайте элемент с тегом a
const link = document.createElement('a');

//2. Задайте созданному элементу атрибут href и запишите в этот атрибут значение  'https://loftschool.com'
link.setAttribute('href', 'https://loftschool.com');
link.textContent = 'https://loftschool.com';

//3. Добавьте созданный элемент в DOM-дерево
document.body.appendChild(link);

//4. Добавьте обработчик события click на созданный элемент
//5. Напишите код обработчика таким образом,
// чтобы при клике на созданный элемент в консоли выводилась надпись 'Я кликнул на ссылку HREF'. Вместо HREF необходимо подставить значение атрибута href. Но перехода по ссылке быть не должно.
link.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('Я кликнул на ссылку ' + link.getAttribute('href'));
});