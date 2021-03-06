console.clear();

// ## 0 Подключение файла script.js
//
// * Подключите этот файл в index.js
// * Что бы проверить подключен ли файл выведете в консоль фразу Hello world!



// ## 1 Обьявление примитивных переменные
//
// * Обьявите 5 примитивных типов переменных, которые доступны в Javascript.
// * Присвойте им значения на свое усмотрение
// * Проверьте валидность кода через парсер


// ## 2 Математические операции
//
// Создайте три переменные (значения сторон треугольник) с типом Number с значениями 4, 5, 9
// * Найдите периметр треугольника
// * Найдите полупериметр треугольника
// * Найдите радиус вписанной окружности в треугольник
// * Найдите радиус вписанной окружности в прямоугольный треугольник
// Результат всех четырех вычислений присвойте переменным и выведете в консоль с помошью функции console.info() с названием расчета
// Пример вывода в консоли: Square = 18



// ## 3 Названия переменных
//
// Создайте 5 пустых переменных и придумайте им "корректные" названия которые соотвецтвовали б их описанию
// * Переменная для названия емейла пользователя
// * Переменная для текущей даты
// * Переменная для массива фамилий пользователей
// * Переменная для значения "по умолчанию"
// * Переменная которая описывала б значение правой верхней границы html элемента



// ## 4 Работа с обьектами
//
// * Создайте обьект ""Пользователь" (С корректным названием) с ключем user и значением "Вася"
// * Измените значение ключа на "Петя"
// * Выведите в консоли значение ключа обьекта из файла index.html


// ## 5 Преобразование типов
//
// Обьясните почему консоль выводит такой результат. Ответ запишите в комментарии напротив строки

// console.info('6' - 3);
// console.info('20' + 10);
// console.info('10' + - 2);
// console.info("4px" - 2);
// console.info(15 / 0);
// console.info(4 + 5 + "px");
// console.info(+"");
// console.info(NaN === NaN);
// console.info(null == undefined);





function displayDate() {
// #0

	    document.getElementById("variable1").innerHTML ='HelloWorld';
// #1
		var q=123;				//Integer
		var w=123.23; 			//Integer
		var e="qwerty"; 		//string
		var r=true;				//boolean
		var t=false;			//boolean
		var y=null;   			//null
		var u=undefined;        //undefined
		var i;					//undefined
	
// #2

		var x=4;
		var y=5;
		var z=7;

		document.getElementById("variable2").innerHTML ="P=" + (x+y+z);
		
		document.getElementById("variable3").innerHTML ="Semiperimeter=" + ((x+y+z)/2);

		var p = (x+y+z)/2;		
		document.getElementById("variable4").innerHTML ="rTriangle=" + (Math.sqrt(((p-x)*(p-y)*(p-z))/p));
		
		var c =	(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
		var p = (x+y+c)/2;
		document.getElementById("variable5").innerHTML ="rTriangle=" + (Math.sqrt(((p-x)*(p-y)*(p-c))/p));

// ## 3 Названия переменных
//
// Создайте 5 пустых переменных и придумайте им "корректные" названия которые соотвецтвовали б их описанию
// * Переменная для названия емейла пользователя
// * Переменная для текущей даты
// * Переменная для массива фамилий пользователей
// * Переменная для значения "по умолчанию"
// * Переменная которая описывала б значение правой верхней границы html элемента

		var userEmail='email@email.com';
		var currentDate= new Date(); // Ошибка в слове current
		var userSurnames= new Array(); // Предпочтительнее заменить на Lasname
		var cDEFAULT = 3.14; // Если эта константа то по соглашению лучше писать все буквы uppercase
		var htmlTopRight = 300;	//  Я бы выбрал название borderTopLeft, так как html сильно абстрактное понятие а border дает понять что работаем с границей

// ## 4 Работа с обьектами
//
// * Создайте обьект ""Пользователь" (С корректным названием) с ключем user и значением "Вася"
// * Измените значение ключа на "Петя"
// * Выведите в консоли значение ключа обьекта из файла index.html

 var user = {
 	name : "Вася"
 	};

document.getElementById("variable6").innerHTML = users.name;

users.name="Петя";

document.getElementById("variable7").innerHTML = users.name;
	
// Обьект user подразумевает что храняться данные 1 пользователя. Но я понял что некореектно указал задание) Вместо ключа user скорее я имел ввиду name.


// ## 5 Преобразование типов
//
// Обьясните почему консоль выводит такой результат. Ответ запишите в комментарии напротив строки

console.info('6' - 3);   // 3 - преобразовало за счет -, все в интеджер и сделало операцию вычитания
console.info('20' + 10); //2010  - в отличии от - знак + используеться еще и для сойденения строк, поэтому JS просто обеденил это как 2 строки
console.info('10' + - 2);// 10-2 - как и в редыдущем результате, знак + праую часть просто дописал до левой как строку!
console.info("4px" - 2); // NaN - JS не знает что такое px и так как не смоге перевести 4px в инт поэтому результат никакой!
console.info(15 / 0); // Infinity - деление на 0
console.info(4 + 5 + "px"); // так как 4 и 5 это интеджер, их сплюсовало, а потом перевело результат в строку.
console.info(+""); // 0 - хз // 0 будет потому как мы пустую строку пытаемся прировнять к числу. Так как пустая строка (так же null, undefined и тд) == 0, то приводя ее к числу получаем 0
console.info(NaN === NaN);         //строгое равенство Значение NaN не равно никакому другому числу, включая само NaN.
console.info(null == undefined);  //равенство

}
