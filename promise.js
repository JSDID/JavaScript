// Создание Promise
// Проверка, может ли пиццерия выполнить ваш заказ

const checkPizzaAvailability = (topping) => {
    return new Promise((resolve, reject) => {
        if (topping === 'pepperoni') {
            resolve(`Пицца с ${topping} готова!`);
        } else {
            reject('Сегодня есть только пепперони.');
        }
    });
};

// Использование с then и catch

checkPizzaAvailability('pepperoni')
    .then((successMsg) => {
        console.log(successMsg); // Пицца с pepperoni готова!
    })
    .catch((errorMsg) => {
        console.log(errorMsg);
    });

checkPizzaAvailability('cheese')
    .then((successMsg) => {
        console.log(successMsg);
    })
    .catch((errorMsg) => {
        console.log(errorMsg); // Сегодня есть только пепперони.
    });

// Цепочка промисов
// Сначала проверяется наличие пиццы, затем осуществляется оплата

const processPayment = (amount) => {
    return new Promise((resolve) => {
        resolve(`Оплата $${amount} прошла успешно.`);
    });
};

checkPizzaAvailability('pepperoni')
    .then((orderStatus) => {
        console.log(orderStatus);
        return processPayment(15);
    })
    .then((paymentStatus) => {
        console.log(paymentStatus); // Оплата $15 прошла успешно.
    });

// Версия с async/await

const confirmPizzaAndPay = async () => {
    try {
        const orderConfirmation = await checkPizzaAvailability('pepperoni');
        console.log(orderConfirmation); // Пицца с pepperoni готова!

        const paymentConfirmation = await processPayment(25);
        console.log(paymentConfirmation); // Оплата $25 прошла успешно.
    } catch (err) {
        console.log(`Ошибка: ${err}`);
    }
};

confirmPizzaAndPay();

// Использование Promise.race
// Выбор самого быстрого ответа из нескольких источников

const fast = new Promise((resolve) =>
    setTimeout(() => resolve('Быстро!'), 100)
);

const slow = new Promise((resolve) =>
    setTimeout(() => resolve('Медленно!'), 200)
);

Promise.race([fast, slow]).then((result) => {
    console.log(result); // Быстро!
});

/*
Promise.race() принимает массив промисов.

Возвращает результат первого завершившегося промиса (resolve или reject).

В этом примере fast завершится за 100 мс, а slow — за 200 мс.

Поэтому вывод будет: Быстро!
*/

// Пример с resolve и reject

const fastFail = new Promise((_, reject) =>
    setTimeout(() => reject('Быстрая ошибка!'), 100)
);

const slowSuccess = new Promise((resolve) =>
    setTimeout(() => resolve('Медленный успех!'), 200)
);

Promise.race([fastFail, slowSuccess])
    .then((result) => {
        console.log('Результат:', result);
    })
    .catch((error) => {
        console.log('Ошибка:', error); // ⛔ Выведет: Быстрая ошибка!
    });

// Разные значения для функций заказа пиццы и оплаты

const orderPizza = (topping) => {
    return new Promise((resolve, reject) => {
        if (topping === 'маргарита') {
            resolve('Пицца с маргаритой готова!');
        } else if (topping === 'ветчина') {
            resolve('Пицца с ветчиной готова!');
        } else if (topping === 'пепперони') {
            resolve('Пицца с пепперони готова!');
        } else {
            reject('Сегодня доступны только маргарита, ветчина и пепперони.');
        }
    });
};

const makePayment = (sum) => {
    return new Promise((resolve) => {
        resolve(`Оплачено $${sum}`);
    });
};

const placeOrder = async () => {
    try {
        const pizza = await orderPizza('ветчина');
        console.log(pizza); // Пицца с ветчиной готова!
        const payment = await makePayment(20);
        console.log(payment); // Оплачено $20
    } catch (error) {
        console.log(error);
    }
};

placeOrder();

const placeOrderWithError = async () => {
    try {
        const pizza = await orderPizza('грибы');
        console.log(pizza);
    } catch (error) {
        console.log(`Ошибка: ${error}`); // Ошибка: Сегодня доступны только маргарита, ветчина и пепперони.
    }
};

placeOrderWithError();