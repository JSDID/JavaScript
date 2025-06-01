/*
Классический цикл For
Рабочая лошадка среди циклов, идеальная для
точного контроля над итерациями.
*/

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Ouputs: 0,1,2,3,4

/*
for...of Loop
Идеально подходит для итерации итерируемых объектов, таких как массивы или строки.
*/

const teachStacl = ["React", "Next", "Vue"];
for (const tech of teachStacl) {
    console.log(tech);
}

// Ouputs: React, Next, Vue

/*
forEach() Array Method
Краткий и выразительный способ перебора массивов.
*/

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => {
    console.log(number)
});


// Ouputs: 1,2,3,4,5

/*
for...in Loop
Идеально подходит для перебора свойств объекта.
*/

const user = {
    name: 'TechExplorer',
    role: 'Developer',
    languge: 'JavaScript'
}

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

/*
while Loop
Используется, когда количество итераций неизвестно или основано на условии.
*/

let conuter = 0;

while (conuter < 3) {
    console.log(conuter);
    conuter++;
}
// Ouputs: 0,1,2

/*
do...while Loop
Перед проверкой условия убедится, что выполнено хотя бы одно действие.
*/

let count = 0;
do {
    console.log(conuter);
    count++;
} while (count < 3);

// Ouputs: 0, 1, 2

/*
Array Methods
(map, filter, reduce)
Повысыть эффективность операций с массивами с помощью этих
жемчужин функционального программирования.
*/

const number = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(number => number * 3);
console.log(doubleNumbers);