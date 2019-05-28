//Задание 1:
function filter(input, than) {
 
  // напишите здесь код, который возвращает новый массив
  // в котором содержатся те элементы input, которые больше than
  var res = [];

  input.forEach(element => {
    if (element > than) {
      res.push(element);
    }
  });

  return res;
}
  
var array = [12, 100, 34, 65, 10];
var result = filter(array, 60);

console.log(result); // [100, 65];

result = filter(array, 20);
console.log(result); // [100, 34, 65];

console.log('Hi!');
