//Задание 2:

//1. При помощи DOM API создайте элемент с тегом div
const inner_div = document.createElement('div');

//2. Задайте созданному элементу класс 'inner'
inner_div.setAttribute('class', 'inner');

//3. При помощи DOM API, поместите в элемент текст: 'Этот элемент тоже создан при помощи DOM API'
inner_div.textContent = 'Этот элемент тоже создан при помощи DOM API';

//4. Поместите созданный элемент внутрь элемента, который был создан в предыдущем задании
div.appendChild(inner_div);