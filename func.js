/* Template Literal
Шаблонные литералы позволяют встраивать выражения в строки, объединять строки.
*/

const name1 = "John";
const gretting = `Hello, {name}!`;

console.log(gretting);

/* 
Destructuring Assignment
Деструктурирующее присваивание упрощает извлечение значений из объектов или массивов в отдельные переменные.
*/

const person = { name2: "Sasha", age1: 22 }
const { name2, age1 } = person;
console.log(person);

/* ES5 - function
Функции, особенно полезные для коротких однострочных операций.
*/

function ES5(x1, y1) {
    return x1 + y1;
}

ES5(2, 2);

/* ES6 - function 
Функция стрелок обеспечивает краткий синтаксис для записи.
*/

const ES6 = (x2, y2) => { return x2 + y2 };
console.log(ES6(2, 2));


/*
Spred Operator
Оператор расширения позволяет расширять элементы, что делает его удобным для создания новых массивов или объектов на основе существующих.
*/

const numbers = [1, 2, 3];
const newNumbers = [...number];
console.log('newNumbers:', newNumbers);

/* Rest Parameter 
Параметр rest позволяет функциям принимать неограниченное количество аргументов в виде массива, упрощая обработку параметров.
*/

const sum = (...numbers3) => {
    return numbers3.reduce((acc, num) => {
        return acc + num;
    }, 0);
}

console.log(sum(1, 2, 3));

/* 
Async/await 
Это синтаксис для обработки асинхронного кода, 
иначе весь код выполняется последовательно.
*/

const API = "https://api.example.com";
const fetchData = async () => {
    try {
        const result = await fetch(`${API}/data`);
        const data = await result.json();
    } catch (error) {
        console.log(error);
    }
}

/* Map & Set 
Map и Set — структуры данных типа класса, представленные в ES6. 
Map — это упорядоченная коллекция пар «ключ-значение», 
Set — это коллекция уникальных значений.
*/

const numberMap = new Map().set("one", 1);

const unique = new Set([1, 2, 3, 2, 1]);
unique.forEach((number) => console(number));

const mySet = new Set();

mySet.add(1);
mySet.add('JSDID');

// Проверка наличия элемента
const hasElement = mySet.has(1); 

// Удаление элемента
mySet.delete(1);

// Проверка количества элементов
const size = mySet.size;

// Итерация по элементам
mySet.forEach((value)=> {
    console.log(value);
});

/*
Default Parameters 
Параметры по умолчанию предоставляют значения для параметров функции, если они не указаны, что повышает гибкость и снижает необходимость явных проверок.
*/

const greet = (name = 'Guest') => {
    return `Hello ${name}!`;
}

console.log(greet());

/* Modules
Модули ES6 предоставляют понятный и организованный способ структурирования и импорта/экспорта кода, улучшая удобство обслуживания и повторного использования.
Export module
export const myFunction = () => {}
Importion module
import {myFunction} form "./index.js";
*/

/*
Map Method
Метод map в JavaScript используется для создания нового массива путем применения предоставленной функции к каждому элементу существующего массива.
*/

const numbers3 = [1, 2, 3, 4, 5]
const doubled = numbers3.map((num) => num * 2);
console.log(doubled);

/*
Filter Method
Метод фильтра используется для создания нового массива, содержащего только те элементы, которые удовлетворяют заданному условию.
*/

const numbers4 = [1, 2, 3, 4, 5];
const evens = numbers4.filter((num) => num % 2 === 0);
console.log(evens);

/*
Reduce Method
Метод Reduce используется для объединения элементов массива в одно значение.
*/

const data = [1, 2, 3, 4, 5];
const sum2 = data.reduce((acc, num) => acc + num, 0);
console.log(sum2);

