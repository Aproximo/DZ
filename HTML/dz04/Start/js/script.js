console.clear();

// ## 0 Проверка диапазона
//
// Напишите код который б проверял длинну телефонного номера
// Длинна номера не должна быть не меньше 9 и не больше 11

// * Your code Start *
function phone_number(element_id){
  var number = document.getElementById(element_id).value;
  if (count.number > 12 || count.number < 8) {
    alert("Будь ласка заповніть всі поля");                     
    number.style.borderColor = "red";
    number.scrollIntoView(true);
    return false;
  }
}


// * Your code End *


// ## 1 Клонирование обьектов
//
// Склонируйте обьект objectA в objectB при помощи цикла

var objectA = {
  name: 'John',
  lastname: 'Dou',
  age: 50
}
// * Your code Start *


var objectB =Object.assign({}, objectA);


// or

 var objectB = objectA.constructor(); // Не совсем понял для чего эта строка
    for (var attr in objectA) {
         objectB[attr] = objectA[attr];
    }
// * Your code End *

// Переопределяем значения обьекта objectA
objectA.name = 'Chris';
objectA.name = 'Couer';
objectA.name = '45';

// Если обьект objectB склонирован, значения в нем меняться не будут
// Выводим значения склонированного обьекта для проверки
console.log(objectB.name); // John
console.log(objectB.lastname); // Dou
console.log(objectB.age); // 50


// ## 2 Ветвление
// При помощи конструкци switch/case выведете текущую дату
// Название месяца должно иметь вид строки
// Например = 14 Июня 2017

var date = new Date();
var day = date.getDate(); // Текущий день
var month = date.getMonth(); // Текущий месяц (от 0 до 11)
var year = date.getFullYear(); // Текущий год
var monthName = 'I do not know'; // Переменная для значения

// * Your code Start *

switch (month){
  case 0:
  monthName = 'Січень';
  break;
  case 1:
  monthName = 'Лютий';
  break;
  case 2:
  monthName = 'Березень';
  break;
  case 3:
  monthName = 'Квітень';
  break;
  case 4:
  monthName = 'Травень';
  break;
  case 5:
  monthName = 'Червень';
  break;
  case 6:
  monthName = 'Липень';
  break;
  case 7:
  monthName = 'Серпень';
  break;
  case 8:
  monthName = 'Вересень';
  break;
  case 9:
  monthName = 'Жовтень';
  break;
  case 10:
  monthName = 'Листопад';
  break;
  case 11:
  monthName = 'Грудень';
  break;

}


// * Your code End *

console.log(`Today is: ${day} ${monthName} ${year}`) // Пример: 14 Июня 2017



// ## 3 Взаимодействие с пользователем
//
// Запросите через prompt у пользователя его имя;
// Запрашивайте имя пользователя, пока одно из имен не будет совпадать с одним из массива users
// После того как пользователь введет имя которое есть в обьекте users, запросите у него пароль
// -- Если пароль введен не верно выведете alert об этом и вернитесь на повторый ввод имени
// -- Если пароль совпадает - вывести сообщение о том что пароль верный и прервите цикл

// * Your code Start *

var users = [{
  name: 'Alex',
  password: 123
}, {
  name: 'Chris',
  password: 456
}, {
  name: 'Bill',
  password: 789
}];
console.log(users[0][name]);


var login = false;
var pass = false;

while (pass == false){
  while (login == false){
    name = prompt('Please enter username', 'username');
    login = search_name(name, users);
   }
  password = prompt('Please enter password', '******');
  pass = search_pass(password, name, users)
  login = pass;
} // Что б не забивать память переменными в данном кейсе можно было использовать метки выходы



function search_pass(passKey, nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name == nameKey && myArray[i].password == passKey) {
            return true;
        }
    }
    return false;
}

function search_name(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name == nameKey) {
            return true;
        }
    }
    return false;
}

// * Your code End *


// ## 4
// Создайте беспрерывный цикл который принимает от пользователя числа, и суммирует
// Цикл прирывается только в том случае если пользователь ввел что либо кроме числа
// После прерывания цикла выводится сумма введеных чисел



// * Your code Start *
var rezult = 0;

console.log(typeof sumArray);    // Мне всегда виводило стринг, поэтому делаю вариант с <> 9999999
bool = false;
while (bool == false){

  var sumArray = prompt('Please enter number', 0);
  if((sumArray > (-9999999)) && (sumArray < 9999999)){
    rezult = rezult - (-sumArray);
}else bool = true;
}
console.log(rezult);

// * Your code End *

// ## 5
// Найдите сумму  1 + 2 + 3 + ... + N, где число N вводится пользователем из prompt

// * Your code Start *
var summetNumber = parseInt(prompt('Please enter number #5', 0)); // Использовать переменные часто, но только в том случае если эта переменная будет использоватся более 2х раз
var rezult = 0;


for (i = 1; i < summetNumber+1; i++) {
  rezult = rezult + i;
}

  console.log(rezult);

// * Your code End *


// ## 6
// Нарисовать шахматную доску используя вложенные циклы (Доска находится в файле html)
// Размер шахматной доски стандартны 8х8
// Функция drawFractions - вспомогательная, при ее вызове в к блоку board в html добаляется 1 квардрат доски
// Ее можно не трогать
// Например что бы нарисовать 1 квадрат нужно вызвать ее 1 раз: drawFraction();
// Так же доски должны иметь черный\белый цвет. Реализовать это можно при помощи как css так и js

var drawFraction = function(color){
  const board = document.querySelector('.board');
  const fraction = document.createElement('div');
   fraction.setAttribute("id", color);
  board.appendChild(fraction);
}

const size = 8;
var k = 1

for (i = 0; i < size; i++){
  k = k - 1;
  for (j = 0; j < size; j++){
    k++;
     if (k % 2 == 0 ) {
    drawFraction('none')
  }else{
     drawFraction('black') 
    }
  }
}

// * Your code Start *



// * Your code End *
