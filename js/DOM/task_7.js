//Задание 7:

//1. Возьмите за основу следующий каркас - https://codepen.io/smelukov/pen/mXdJZw
//2. Это простейший слайдер элементов. При клике на правую стрелочку, элементы должны сдвигаться вправо. При клике на левую стрелочку, элементы должны сдвигаться влево.
//3. Наполните кодом пустые обработчики кликов таким образом, чтобы стрелочки работали корректно.

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

var count = 0;

right.addEventListener("click", function(e) {
  // напишите здесь код, который сдвигает items на 100px вправо
  // если items уже сдвинут на 5 элементов впарво, то больше элементы сдвигать не надо, т.к. вы достигли конца списка
  var style = getComputedStyle(items.parentNode.parentNode);
  if (count < 5) {
    items.parentNode.parentNode.style.paddingLeft = parseInt(style.paddingLeft) + 100 + 'px';
    count++;
  }
});

left.addEventListener("click", function() {
  // напишите здесь код, который сдвигает items на 100px влево
  // если item находится в самом начале, то больше элементы сдвигать влево не надо, т.к. вы достигли начала списка
  var style = getComputedStyle(items.parentNode.parentNode);
  if (count > 0) {
    items.parentNode.parentNode.style.paddingLeft = parseInt(style.paddingLeft) - 100 + 'px';
    count--;
  }
});
