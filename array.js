/* Array.from(str): Этот метод переводит строку в массив  */

const str = 'Aleksandr';
console.log(Array.from(str));

/* push(): Этот метод добавляет в массив */

let famely = ['Sasha', 'Vika'];
let newPepople = ['Egor'];

newPepople.forEach(function (name) {
    famely.push(name);
});

console.log(famely);


/* values(): Этот метод возвращает итератор,
который предоставляет значения для каждого индекса в
массиве. Он не принимает аргументов. */

const arr1 = ['apple', 'banana', 'cherry'];
const iter1 = arr1.values();
for (const val1 of iter1) {
    console.log(val1); // apple, banana, cherry
}

/*
length(): Это свойство возвращает длину массива.
*/

const arr2 = ['apple', 'banana', 'cherry'];
console.log(arr2.length); // 3

/* 
reverse(): Этот метод меняет порядок элементов в массиве на обратный.
*/

const arr3 = ['apple', 'banana', 'cherry'];
arr3.reverse();
console.log(arr3); // ['cherry', 'banana', 'apple']

/*
sort(): Этот метод сортирует элементы
массива на месте и возвращает отсортированный массив.
Он может принимать необязательную функцию сравнения в качестве
аргумента.
*/

const arr4 = ['banana', 'apple', 'cherry'];
arr4.sort();
console.log(arr4); // ['apple', 'banana', 'cherry']

/*
at(): Этот метод возвращает элемент по указанному индексу в массиве. Он принимает один
аргумент: индекс.
*/

const arr5 = ['apple', 'banana', 'cherry'];
console.log(arr5.at(1)); // 'banana'

/*
fill(): Этот метод заполняет все элементы
массива от начального индекса до конечного индекса
статическим значением. Он может принимать до трех аргументов:
значение для заполнения, начальный индекс и
конечный индекс.
*/

const arr6 = ['apple', 'banana', 'cherry'];
arr6.fill('orange', 1, 2);
console.log(arr6); // ['apple', 'orange', 'cherry']


/*
from(): Этот метод создает новый массив из
объекта, похожего на массив, или итерируемого объекта. Он может
принимать до двух аргументов: объект для преобразования
в массив и функцию отображения для применения к
каждому элементу нового массива.
*/

const obj1 = { 0: 'apple', 1: 'banana', 2: 'cherry', length: 3 };
const arr7 = Array.from(obj1);
console.log(arr7); // ['apple', 'banana', 'cherry']


/*
join(): этот метод объединяет все элементы
массива в строку, используя указанный разделитель.
Он принимает один необязательный аргумент: разделитель,
который будет использоваться.
*/

const arr8 = ['apple', 'banana', 'cherry'];
const joinedStr = arr8.join(', ');
console.log(joinedStr); // 'apple, banana, cherry'

/*
toString(): этот метод возвращает строку, представляющую массив и его элементы.
*/

const arr9 = ['apple', 'banana', 'cherry'];
const str2 = arr9.toString();
console.log(str2); // 'apple,banana,cherry'y'

/* 
pop(): этот метод удаляет последний элемент из массива и возвращает этот элемент.
*/

const arr10 = ['apple', 'banana', 'cherry'];
const last1 = arr10.pop();
console.log(last1); // Output: 'cherry
console.log(arr10); // Output: ['apple', 'banana

/*
Метод forEach() выполняет указанную функцию
один раз для каждого элемента массива. Он ничего не возвращает, он просто выполняет функцию обратного вызова
для каждого элемента массива.
*/

let fruits1 = ['apple', 'banana', 'cherry'];
fruits1.forEach(function (item) {
    console.log(item);
}); // Output: apple, banana, cherry

/*
shift() метод удаляет первый элемент из
массива и возвращает этот удаленный элемент.
Этот метод изменяет длину массива.
*/

let fruits2 = ['apple', 'banana', 'cherry'];
let shiftFruit = fruits2.shift();
console.log(shiftFruit); // Output: 'apple'
console.log(fruits); // Output: ['banana', 'cherry']

/*
copyWithin() - метод melt копирует часть
массива в другое место в том же массиве и
возвращает измененный массив, не изменяя
его длину. Синтаксис.copyWithin(target, start, end)
*/

let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(2, 0, 2);
console.log(numbers); // Output: [1, 2, 1, 2, 5]

/*
push() метод добавляет один или несколько элементов в
конец массива и возвращает новую длину
массива.
*/

let fruits3 = ['apple', 'banana'];
fruits3.push('cherry', 'orange');
console.log(fruits3); // Output: ['apple', 'banana', 'cherry', 'orange']

/*
unshift() метод добавляет один или несколько элементов в начало массива и возвращает новую длину массива.
*/

let fruits4 = ['cherry', 'orange'];
fruits4.unshift('apple', 'banana');
console.log(fruits4); // Output: ['apple', 'banana', 'cherry', 'orange']

/* 
concat() метод используется для объединения двух или более
массивов. Этот метод не изменяет существующие массивы, 
а вместо этого возвращает новый массив.
*/

let fruits5 = ['apple', 'banana'];
let moreFruits = ['cherry', 'orange'];
let allFruits = fruits5.concat(moreFruits);
console.log(allFruits); // Output: ['apple', 'banana', 'cherry', 'orange']

/*
splice() метод изменяет содержимое
массива, удаляя или заменяя существующие
элементы и/или добавляя новые элементы на место.
*/

const fruits6 = ['apple', 'banana', 'cherry', 'orange'];
fruits4.splice(2, 1, 'mango', 'kiwi');
console.log(fruits6); // Output: [ 'apple', 'banana'

/*
flat() Этот метод создает новый массив со всеми
элементами подмассива, объединенными в него
рекурсивно до указанной глубины.
*/

const numbers2 = [1, [2, [3]], 4];
const flatNumbers = numbers2.flat(Infinity);
console.log(flatNumbers); // Output: [1, 2, 3, 4]

/*
lastIndexOf() Этот метод возвращает последний
индекс, по которому данный элемент может быть найден в
массиве.
*/

const numbers3 = [1, 2, 3, 4, 5, 3];
const lastIndex = numbers3.lastIndex0f(3);
console.log(lastIndex); // Output: 5

/*
indexOf(): Этот метод возвращает индекс
первого вхождения указанного элемента в
массив. Если элемент отсутствует, он возвращает
-1.
*/

const arr11 = [5, 10, 15, 201];
const index = arr11.index0f(10);
console.log(index); // 1

/*
of(): Этот метод создает новый экземпляр массива
с переменным числом аргументов,
независимо от числа или типа аргументов.
*/

const arr12 = Array.of(1, 2, 3, "four", true);
console.log(arr12); // [1, 2, 3, "four", true]

/*
every(): Этот метод проверяет, все ли элементы в
массиве проходят тест (предоставляется как функция). Он
возвращает true, если все элементы проходят тест;
в противном случае он возвращает false.
*/

const arr13 = [2, 4, 6, 8];
const isEven = (num) => num % 2 === 0;
const result = arr13.every(isEven);
console.log(result); // true

/*
slice(): этот метод возвращает поверхностную копию
части массива в новый объект массива,
выбранный от начала до конца (конец не включен).
*/

const arr14 = [1, 2, 3, 4, 5];
const slicedArr = arr14.slice(2, 4);
console.log(slicedArr); // [3, 4]

/*
flatMap(): этот метод сопоставляет каждый элемент,
используя функцию сопоставления, а затем сглаживает
результат в новый массив.
*/

const arr15 = [1, 2, 31];
const result1 = arr15.flatMap(x => [x * 2]);
console.log(result); // [2, 4, 6]

/*
findIndex(): Этот метод возвращает индекс
первого элемента в массиве, который проходит тест
(предоставляется как функция). Если ни один элемент не проходит тест, он возвращает -1.
*/

const arr16 = [10, 20, 30, 40, 50];
const greaterThan30 = (num) => num > 30;
const index2 = arr16.findIndex(greaterThan30)
console.log(index2); // 3

/*
find(): Этот метод возвращает значение
первого элемента в массиве, который проходит тест
(предоставляется как функция). Если ни один элемент не проходит тест, он возвращает undefined.
*/

const arr17 = [10, 20, 30, 40, 50];
const greaterThan301 = (num) => num > 30
const result3 = arr17.find(greaterThan301);
console.log(result3); // 40

/*
includes(): этот метод определяет,
включает ли массив определенное значение среди своих записей,
возвращая true или false в зависимости от ситуации.
*/

const arr18 = [10, 20, 30, 40, 501];
const has20 = arr18.includes(20);
console.log(has20); // true

/*
entry(): этот метод возвращает новый объект Array
Iterator, содержащий пары ключ/значение
для каждого индекса в массиве.
*/

const arr20 = ["a", "b", "c"];
const iterator2 = ar20r.entries();
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);
// [0, "a"]
// [1, "b"]
// [2, "c"]

/*
reduce(): этот метод применяет функцию к
каждому элементу массива и сводит массив
к одному значению.
*/

const numbers4 = [10, 20, 30, 401];
// accumulator: Это значение, возвращаемое предыдущей итерацией функции.
// currentValue: Это текущий обрабатываемый элемент в массиве.
const sum1 = numbers4.reduce((accumulator1, currentValue1) => {
});
return accumulator1 + currentValue1;
console.log(sum1); // OutpuЕВ 100

/*
reduceRight(): Этот метод похож на метод reduce(). Однако он перебирает
элементы массива справа налево, а не слева направо.
*/

const numbers5 = [10, 20, 30, 401];
const sum2 = numbers5.reduceRight((accumulator2, currentValue2) => {
    return accumulator2 + currentValue2;
});
console.log(sum2); // Output: 100

/*
isArray(): этот метод определяет, является ли переданное значение массивом или нет.
*/

const fruits = ['apple', 'banana', 'mango'];
console.log(Array.isArray(fruits)); // Output:
const number = 123;
console.log(Array.isArray(number));
true
// Output: false

/*
filter(): Этот метод создает новый массив со
всеми элементами, которые проходят тест, реализованный
предоставленной функцией.
*/

const numbers6 = [10, 20, 30, 401];
const filteredNumbers = numbers6.filter(number6 => {
});
return number6 > 20;
console.log(filteredNumbers); // Output: [30, 40]

/*
keys(): этот метод возвращает массив, содержащий ключи данного объекта.
*/

const my0bj = { a: 1, b: 2, c: 3 };
const keysArray = Object.keys(my0bj);
console.log(keysArray); // Output: ["a", "b", "c"]

/*
map(): Этот метод создает новый массив с
результатами вызова предоставленной функции для
каждого элемента в вызывающем массиве.
*/

const numbers7 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers7.map((number) => {
});
return number * number;
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

/*
FILTERO
Создает новый массив, содержащий только элементы,
которые проходят тест, реализованный предоставленной
функцией.
*/

const products = [
    { name: 'Phone', price: 500 },
    { name: 'Laptop', price: 1000 },
    { name: 'Charger', price: 20 }
];

const expensiveProducts = products.filter(
    product => product.price > 500
);

console.log(expensiveProducts);
// Output: [{ name: 'Laptop', price: 1000 }]


/*
findMax
Найти максимальное число в массиве
*/

function findMax(arr) {
    let max = arr[0]; // Предполагаем, что первый элемент — максимальный
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Использование
console.log(findMax([5, 2, 8, 1, 9])); // Вывод: 9

/*
reverseArray
Развернуть массив (перевернуть порядок элементов)
*/

function reverseArray(arr) {
    let reversed = []; // Новый массив для хранения в обратном порядке
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]); // Добавляем элементы с конца исходного массива
    }
    return reversed;
}

// Использование
console.log(reverseArray([1, 2, 3, 4, 5])); // Вывод: [5, 4, 3, 2, 1]

/*
removeDuplicates
Удалить дубликаты из массива
*/

function removeDuplicates(arr) {
    let uniqueArr = []; // Новый массив для хранения уникальных значений
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]); // Добавляем только те элементы, которых ещё нет
        }
    }
    return uniqueArr;
}

// Использование
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Вывод: [1, 2, 3, 4, 5]


/*
isSorted
Проверить, отсортирован ли массив
*/

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Использование
console.log(isSorted([1, 2, 3, 4, 5])); // Вывод: true
console.log(isSorted([1, 3, 2, 4, 5])); // Вывод: false


/*
sortAscending
Отсортировать массив по возрастанию
*/

function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
}

// Использование
console.log(sortAscending([5, 2, 9, 1, 5, 6]));
// Вывод: [1, 2, 5, 5, 6, 9]

/*
sortDescending
Отсортировать массив по убыванию
*/

function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

// Использование
console.log(sortDescending([5, 2, 9, 1, 5, 6]));
// Вывод: [9, 6, 5, 5, 2, 1]