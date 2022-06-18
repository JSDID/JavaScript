var str = "Продолжаем изучать род регулярные выражения";
var pattern = /род/g;

console.log(pattern.lastIndex); // 0
console.log(pattern.test(str));
console.log(pattern.lastIndex); // 4
console.log(pattern.exec(str));
console.log(pattern.lastIndex); // 22
console.log(pattern.exec(str));
console.log(pattern.lastIndex);	// 0

// Синтаксис

/*
** \d - любая цифра (digit)
** \s - пробел, табуляция (space)
** \w - слово, буква(лат.) + "_" (word)
** \b - граница (HTML5, HTML 5).
*/

var patternDigit = /\d/g; // поиск цифры
var patternStr = /HTML\d/ // поиск строки HTML с цифрой после нее (HTML5)

/*
** Инверторы
** \D - не цифра
** \S - не пробел
** \W - не слово (сюда подходят русские буквы)
*/

var patternPoint = /./ //поиск любого символа (кроме перевода строки \n)

/*
** Специальные символы - . () / \ и др. 
*/

/*
** [] - поиск в наборе одного из символов
** [-] - поиск в диапазоне - [0-9]
** - ^ - кроме
** + - один символ и более
**/


var nameStr = "@mail test@mail.ru mail.ru abzalov90@gmail.com";

console.log(nameStr.match(/[a-zA-Z_0-9]+@[a-z]+\.\w+/g));