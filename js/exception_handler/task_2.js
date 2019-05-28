//Задание 2:

//1. Возьмите код предыдущего задания
//2. Модифицируйте код функции filter так, чтобы функция выбрасывала исключения при следующих условиях:
//  a. В input передан пустой массив
//  b. Хотя бы один из элементов input не является числом
//  c. Хотя бы один из элементов input является отрицательным числом

function filter(input, than) {
 
  // напишите здесь код, который возвращает новый массив
  // в котором содержатся те элементы input, которые больше than
  if (input.length == 0) {
    throw new Error('Input is empty!');
  }

  var res = [];

  input.forEach(element => {
    if (!isFinite(element)) {
      throw new Error('Element is not a number!');
    } else if (element < 0) {
      throw new Error('Element less than zero!');
    } else if (element > than) {
      res.push(element);
    }
  });

  return res;
}

try {
  var array = [12, 'a', 34, 65, 10];
  var result = filter(array, 60);
  console.log(result);
} catch (e) {
  console.log(e.message);
}
