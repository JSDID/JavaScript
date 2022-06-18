'use strict';
// (1) var, let, const
var a = 5;
const b = 3;
// b = b + 3;
console.log(b);

function addNum(x) {
  let b = a;
  console.log(this); // не в строгом режиме - контект вызова
  return b = b + x;
}

console.log(addNum(5));
console.log(a);

// (2) - стрелочные функции

function summa(a, b) {
  console.log(this);
  return a + b;
}

let sum = (a, b) => {
  console.log(this);
  return a + b
};

console.log(sum(5, 11));
console.log(summa(5, 11));

var man = {
  name: 'Камиль',
  sayHello: function () {
    console.log(this);
    return function () {
      console.log(this);
      console.log(this.name + ' привет')
    }
  },
  sayBye: function () {
    console.log(this);
    return () => {
      console.log(this);
      console.log(this.name + ' пока');
    }
  }
}

// var hiKam = man.sayHello();
// hiKam();

var byeKam = man.sayBye();
byeKam();

// (3) - шаблонные литералы
let name = 'Камиль';
let surname = 'Абзалов';
console.log(name + " " + surname);
console.log(`${name} ${surname}`);


// (4) деструктулизация
const arr = [1, 2, 3, 4, 5];
const [, second, , , fifth] = arr;
console.log(second, fifth);

let age = 29;
let nextAge = 30;

[age, nextAge] = [nextAge, age];

console.log(age);
console.log(nextAge);

// (4) - for...of

const secondArr = [1, 2, 3, 4, 5];

for (const num of secondArr) {
  console.log(num);
}

// (5) - параметры по умолчанию
const printName = (name = 'Камиль') => console.log(name);

printName();
printName('Иван');

// (6) - rest
const printData = (name, ...data) => {
  console.log(name);
  console.log(data);
}

printData('Камиль', 29, 'Москва');

console.log(arr.concat(secondArr));
console.log([...arr, ...secondArr]);


// (7) - промисы
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done!"), 1000);
  setTimeout(() => reject("error!"), 2000);
});
// console.log(promise);

promise.then(
  resolve => console.log(1),
  reject => console.log(2)
);

promise.catch(
  () => console.log('error')
);

promise.finally(
  () => console.log('finally')
)

let remoteDate = fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => { return response.json() })
  .then(text => console.log(text))