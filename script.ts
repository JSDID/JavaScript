// Как объявлять типы

let name1: string = "Alex";         // Разрешены только строки
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
  name2: string;
  age: number;
  isStudying: boolean;
}

let student: Student = {
  name2: "Maria",
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
