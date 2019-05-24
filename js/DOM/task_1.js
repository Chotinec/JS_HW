//Задание 1:

//1. При помощи DOM API создайте DOM-элемент с тегом div
const div = document.createElement('div');

//2. Добавьте созданный элемент в DOM-дерево
document.body.appendChild(div);

//3. При помощи DOM API, поместите в элемент текст: 'Этот элемент создан при помощи DOM API'
div.textContent = 'Этот элемент создан при помощи DOM API';