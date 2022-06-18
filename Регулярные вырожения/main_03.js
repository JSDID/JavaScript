// Квантификаторы
// {n}, где n - кол-во символов

// var pattern = /\w\w\w/
var pattern = /\w{3}/;
var patternTwo = /\w{3,10}/;

// ? = {0,1} - нуль или один
// * = {0,} - нуль или более
// . - любой символ

var str = "Каиль камиль kamil";

var patternThree = /кам?иль/ig;
var patternFour = /кам*иль/ig;

console.log(str.match(patternThree));
console.log(str.match(patternFour));

//  жадный и ленивый режим

var link = '<a href="http://kamil-abzalov.ru" class="test"></a>';

var patternFive = /href=".+"/gi; //жадный поиск
var patternSix = /href=".+?"/gi; // ленивый поиск
var patternSeven = /href="[^"]+"/gi; // аналог жадного

console.log(link.match(patternFive));
console.log(link.match(patternSix));
console.log(link.match(patternSeven));


/*В качестве разминки написать и проверить шаблон для поиска:

1. Десятичная дробь
2. Дата формата (10.07.2016)
3. Поиск заголовков h1-h6 в строке

*/

