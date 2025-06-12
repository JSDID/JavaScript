// Пример класса:

class Person {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

class Write extends Person {
    think() {
        console.log(this.name);
    }
}

// Пример использования:
const writer = new Write("Example");
writer.sayName(); // Выведет: My name is Example
writer.think();   // Выведет: Example