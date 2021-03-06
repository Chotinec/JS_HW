//Задание 1:
//1. Создайте переменную и запишите в нее массив из двух элементов ‘привет’ и ‘loftschool’
var array1 = ['привет', 'loftschool'];

//2. Ниже, при помощи push, добавьте в этот массив еще два элемента: ‘, я изучаю’ и ‘javascript’
array1.push(', я изучаю');
array1.push('javascript');

//3. Ниже, выведите в консоль итоговой размер массива.
console.log(array1);

//4. Ниже, при помощи for выведите все элементы массива в консоль
for (var i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

//Задание 2:
//1. Создайте переменную с массивом и добавьте в этот массив 10 разных чисел. Пусть некоторый числа будут меньше чем 100, а некоторые больше чем 100. Цифры можно добавлять не по порядку
var array2 = [];
for (var i = 0; i < 10; i++) {
  array2.push(Math.floor(Math.random() * 200));
}

//2. При помощи цикла for переберите все числа в массиве и при помощи оператор if внутри тела цикла, выведите в консоль только те числа из массива, которые больше чем 100
for (var i = 0; i < array2.length; i++) {
  if (array2[i] > 100) {
    console.log(array2[i]);
  }
}

//Задание 3:
//1. Создайте переменную и запишите в нее объект
var obj = {};
//2. Пусть в этом объекте будут 3 свойства: name, lastName и age
//3. В свойство name запишите свое имя
//4. В свойство lastName запишите свою фамилию
//5. В свойство age запишите свой возраст
obj.name = 'Artiom';
obj.lastName = 'Hotinec';
obj.age = 29;

//6. Ниже обратитесь к каждому свойству и выведите значения всех свойств в консоль
console.log(obj.name);
console.log(obj.lastName);
console.log(obj.age);

//7. Ниже добавьте в объект любое новое свойство и выведите его значение на экран
obj.country = 'Israel';
console.log(obj.country);

//Задание 4:
//1. Создайте функцию с именем hello и параметром human.
//2. Напишите код вашей функции так, чтобы она возвращала фразу ‘Привет, меня зовут ИМЯ ФАМИЛИЯ и мне ВОЗРАСТ лет!’.
//3. Вместо ИМЯ нужно подставить значение свойства name из объекта, который вы передадите в human
//4. Вместо ФАМИЛИЯ нужно подставить значение свойства lastName из объекта, который вы передадите в human
//5.Вместо ВОЗРАСТ нужно подставить значение свойства age из объекта, который вы передадите в human
function hello(human) {
  return 'Привет, меня зовут ' + human.name + ' ' + human.lastName + ' и мне ' + human.age + 'лет!';
}

//6. Ниже вызовите созданную функцию и перейдите ей в качестве аргумента объект, который вы создали в предыдущем задании
//7. Результат вызова функции запишите в переменную и выведите ее значение на экран
//8. Подсказка: для того, чтобы объединять строки со значениями переменных, можно использовать оператор ‘+’, например ‘Привет ’ + name
var res = hello(obj);
console.log(res);
