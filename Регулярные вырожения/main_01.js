var exOne = "НаЧИНаем изучать регулярные чин выражения";
var patternOne = /чин/ig;
console.log(exOne.search(patternOne)); //search ищет первое совпадение в строке, возвращает позицию найденной строки.

console.log(exOne.match(patternOne));

//i - флажок для регистронезависимого поиска
//g - флажок для полнотекстового поиска в строке (ищет не только первое совпадение)

var exTwo = "Начинаем изучать регулярные выражения...ЧИН";
var patternTwo = /чин/gi;

console.log(exTwo.split(" "));

console.log(exTwo.replace(" ", ":"));
console.log(exTwo.replace(/ /g, ":"));
console.log(exTwo.replace(/изучать/, "$$"));
console.log(exTwo.replace(/изучать/i, "Сосредоточились и $&"));
console.log(exTwo.replace(/(начинаем) (изучать)/i, "$2 $1"));

var exThree = "Камиль камиль kamil";

function myFunc(match, offset, str) {
  //return "Камиль с большой буквы";
  return match.toUpperCase();
}

function secondFunc(match, firstParam, secondParam, offset, str) {
  return secondParam + " and " + firstParam;
}

console.log(exThree.replace(/камиль/, myFunc));
console.log(exThree.replace(/(камиль) (kamil)/, secondFunc));