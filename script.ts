// Как объявлять типы

let age: number = 28;               // Разрешены только числа
let isHappy: boolean = false;       // Разрешены только true или false

// Аннотации типов в функциях

function multiply(x: number, y: number): number {
  return x * y;
}

multiply(4, 7);
// multiply("4", 7); // Ошибка: строка не может быть передана вместо числа

// Интерфейсы и типы

interface Student {
  name: string;
  age: number;
  isStudying: boolean;
}

let student: Student = {
  name: "Maria",
  age: 22,
  isStudying: true
};

// Другой пример с разными переменными

interface Teacher {
  name: string;
  experience: number;
  isOnFaculty: boolean;
}

let teacher: Teacher = {
  name: "Ivan",
  experience: 10,
  isOnFaculty: false
};

/*
Необязательные и доступные только для чтения свойства
Необязательные (?): Свойство может не существовать.
Только для чтения: Невозможно изменить значение.
*/

interface House {
  address: string;
  owner?: string; // Необязательное свойство
  readonly builtYear: number; // Только для чтения
}

let myHouse: House = {
  address: "221B Baker Street",
  builtYear: 1887
};

myHouse.address = "10 Downing Street"; // OK
// myHouse.builtYear = 1900; // Ошибка: нельзя изменить только для чтения свойство

/*
Объединение и литеральные типы
Объединение: переменная может иметь несколько типов.
Литерал: разрешены только определенные значения.
*/

let score: number | string = 100; // Может быть числом или строкой
score = "A+";
let direction: "up" | "down" = "up"; // Только
// direction = "left"; // Ошибка

/*
Массивы и кортежи
Массивы: Все элементы одного типа.
Кортежи: Фиксированное количество элементов с определенными типами.
*/

// let fruits: string[] = ["apple", "banana", "cherry"];
let coordinates: [number, number] = [51.5, -0.1];

/*
Перечисления (Enum)
Перечисления дают имена числам или строкам.
*/

enum Role {
  Admin,
  User,
  Guest
}

let userRole: Role = Role.User;

/*
Любой и неизвестный
любой: любой тип (старайтесь избегать).
неизвестный: как любой, но безопаснее.
*/

let randomValue: any = "hello";
randomValue = 42; // Любой тип
let anotherValue: unknown = "world"; // Независимый 
// anotherValue.toUpperCase(); // Ошибка без проверки типа

/*
Утверждения типа
Сообщите TypeScript, что вы знаете тип.
*/

let someValue: unknown = "TypeScript";
let strLength: number = (someValue as string).length;

/*
Классы
TypeScript улучшает классы с помощью модификаторов видимости
(public, private, protected).
*/

class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
let dog = new Animal("Max");
dog.speak(); // OK
// dog.name = "Buddy"; // Error

/*
Универсальные компоненты
Создавайте повторно используемые компоненты с помощью типов.
*/

function identity<T>(value: T): T {
  return value;
}

identity<string>("hello");
identity<number>(123);

/*
Модули
Использовать экспорт и импорт для организации кода.
*/

/*
File: mathUtils.ts
export function multiply(a: number, b: number):
number {
return a * b;
}
File: main.ts
import { multiply } from "./mathUtils";
console.log(multiply(3, 4));
*/ 

