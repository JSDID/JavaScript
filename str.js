let str = "Hello, World!";

// Получение длины строки
console.log(str.length); // 13

// Преобразование в верхний регистр
console.log(str.toUpperCase()); // "HELLO, WORLD!"

// Преобразование в нижний регистр
console.log(str.toLowerCase()); // "hello, world!"

// Проверка, содержит ли строка подстроку
console.log(str.includes("World")); // true

// Получение подстроки с позиции 7 по 12 (не включая 12)
console.log(str.slice(7, 12)); // "World"

// Проверка, начинается ли строка с подстроки
console.log(str.startsWith("Hello")); // true

// Проверка, заканчивается ли строка подстрокой
console.log(str.endsWith("!")); // true

// Индекс первого вхождения подстроки
console.log(str.indexOf("o")); // 4

// Индекс последнего вхождения подстроки
console.log(str.lastIndexOf("o")); // 8

// Разделение строки на массив по запятой
console.log(str.split(",")); // ["Hello", " World!"]

// Замена подстроки
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"

// Замена всех вхождений подстроки (ES2021+)
console.log(str.replaceAll("o", "0")); // "Hell0, W0rld!"

// Сравнение строк с учетом локали
console.log(str.localeCompare("Hello")); // 1

// Получение символа по индексу
console.log(str.charAt(1)); // "e"

// Получение кода символа по индексу
console.log(str.charCodeAt(1)); // 101

// Повтор строки 3 раза
console.log(str.repeat(3)); // "Hello, World!Hello, World!Hello, World!"

// Удаление пробелов в начале и конце строки
console.log("   test   ".trim()); // "test"

// Удаление пробелов только справа
console.log("   test   ".trimEnd()); // "   test"

// Удаление пробелов только слева
console.log("   test   ".trimStart()); // "test   "

// Применение функции для каждого символа (пример с Array.from)
console.log(Array.from(str)); // ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']

// Получить символ по индексу (ES2022+)
console.log(str.at(-1)); // "!"

// Проверка, соответствует ли строка регулярному выражению
console.log(str.match(/[A-Z]/g)); // ['H', 'W']

// Поиск по регулярному выражению
console.log(str.search("World")); // 7

// Дополнение строки до заданной длины в начале
console.log("5".padStart(3, "0")); // "005"

// Дополнение строки до заданной длины в конце
console.log("5".padEnd(3, "0")); // "500"
