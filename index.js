// Перевернуть строку
function reverseString(string) {
    return string.split('').reverse().join('');
}
console.log(reverseString('Hello'));
//Output:'olleH'

// Проверить на палиндром
function isPalindrome(num) {
    let num1 = num.split('').reverse().join('');
    return (num == num1) ? "Yes it is" : "No it isn't";
}
console.log(isPalindrome("121")); //Output:"Yes it is"
console.log(isPalindrome("911")); //Output:"No it isn't"
console.log(isPalindrome("0")); //Output:"Yes it is"

// Ряд Фибоначчи
function fibonacci(n) {
    let series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series.slice(0, n);
}
console.log(fibonacci(10));
// Output:[0, 1, 1, 2, 3,

// Факториал числа
function factorial(n) {
    let fact = 1;
    if (n < 0) return "Factorial is undefined for negative integers";
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5));  //Output:120
console.log(factorial(0));  //Output:1
console.log(factorial(-5)); //Output:Factorial is

function primeCheck(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
}
console.log(primeCheck(16)); //Output:false
console.log(primeCheck(17)); //Output:true

// Проверка простого числа
function primeCheck(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
}
console.log(primeCheck(16)); //Output:false
console.log(primeCheck(17)); //Output:true

// Подсчитайте гласные и согласные
function count(string) {
    let consonants =
        string.match(/[bcdfghjklmnpqrstvxyz]/ig);
    let vowels = string.match(/[aeiou]/ig);
    return `Vowels:${vowels.length},
Consonants:${consonants.length}`;
}
console.log(count("Ganesh205"));
//Output:- Vowels:2, Consonants:4

// Сортировать массив
function sort(array) {
    return array.sort((a, b) => a - b);
}
console.log(sort([10, 1, 4, 2, 3])); //Output:[1, 2, 3, 4, 10]

//Объединить два массива
function merge(array1, array2) {
    return array1.concat(array2);
}
console.log(merge([1, 2, 3], [4, 5, 6])); //Output:[1, 2, 3, 4, 5, 6]

// Найти наибольший элемент в массиве
function largest(arr) {
    return Math.max(...arr);
}
console.log(largest([1, 2, 15, 4, 5])); //Output:15

//  Удалить дубликаты из массива
function remove(arr) {
    return arr.filter((value, index) => arr.indexOf((value) === index));
}
console.log(remove([1, 2, 2, 3, 4, 4, 5])); //Output:[1, 2, 3, 4, 5]

// Проверьте, является ли число Армстронгом
function isArmstrong(n, sum = 0) {
    let num = n.toString();
    for (let i = 0; i < num.length; i++) {
        sum += Math.pow(Number(num[i]), num.length);
    }
    return (sum == n) ? "Yes it is" : "it is not";
}
console.log(isArmstrong(153)); //Output:Yes it is
console.log(isArmstrong(9474)); //Output:Yes it is

// Перевернуть число
function reverseNumber(n) {
    let result =
        Number(Math.abs(n).toString().split('').reverse().join(''));
    return (n < 0) ? -result : result;
}
console.log(reverseNumber(119)); //Output:911
console.log(reverseNumber(-119)); //Output:-911

// Вычислить НОД двух чисел
function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}
console.log(gcd(12, 8)); //Output:4

//Проверить на анаграмму
function anagramCheck(str1, str2) {
    let word1 =
        str1.replace(/\s/g, '').toLowerCase().split('').sort().join
            ('');
    let word2 =
        str2.replace(/\s/g, '').toLowerCase().split('').sort().join
            ('');
    return (word1 == word2) ? "Yes it is" : "No it is not"
        ;
}
console.log(anagramCheck("sIl e nt", "listen"));
//Output:Yes it is

// Подсчитайте количество цифр в числел
function digitsCount(num) {
    return (Math.abs(num).toString()).length;
}
console.log(digitsCount(911)); //Output:3

// Распечатать простые числа в диапазоне
function primeCheckInRange(n, m) {
    let elements = [];
    for (let i = n; i <= m; i++) {
        if (i < 2) continue;
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                (isPrime) = false;
                break;
            }
        }
        if (isPrime) {
            elements.push(i);
        }
    }
    return elements;
}
console.log(primeCheckInRange(10, 30)); //Output:[11, 13, 17, 19, 23, 29]

// Найдите второй по величине элемент в массиве
function secondLargest(arr) {
    let sorted = [...new Set(arr)];
    let result = sorted.sort((a, b) => b - a);
    return result[1];
}
console.log(secondLargest([1, 3, 5, 8, 2, 9])); //Output:8

// Треугольник Паскаля
function generatePascalsTriangle(numRows) {
    const triangle = [];
    for (let row = 0; row < numRows; row++) {
        triangle[row] = [1];
        for (let col = 1; col < row; col++) {
            triangle[row][col] = triangle[row - 1][col - 1] +
                triangle[row - 1][col];
        }
        if (row > 0) triangle[row].push(1);
    }
    for (let row of triangle) {
        console.log(...row);
    }
}
generatePascalsTriangle(5); //Output: 1


// Пропущенное число в массиве
function findMissingNumbers(arr) {
    const maxNum = Math.max(...arr);
    const numSet = new Set(arr);
    const missing = [];
    for (let i = 1; i <= maxNum; i++) {
        if (!numSet.has(i)) {
            missing.push(i);
        }
    }
    return missing;
}
console.log(findMissingNumbers([1, 2, 4, 6, 7]));
//Output:[3, 5]

