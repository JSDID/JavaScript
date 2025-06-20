/*
Валидация на стороне клиента — это первый шаг в обеспечении безопасности данных, вводимых пользователями, прежде чем они попадут на сервер.

Почему важно:

📍 Защищает от XSS и SQL-инъекций

📍 Предотвращает отправку некорректных данных

📍 Повышает UX за счет быстрой обратной связи

*/

// Как внедрить:

// 1. Делаем проверку на пустое поле:

const form = document.querySelector('form');
const input = document.querySelector('input[name="username"]');

form.addEventListener('submit', (event) => {
    if (!input.value.trim()) {
        event.preventDefault();
        alert('Поле не может быть пустым!');
    }
});

// 2. Проверяем корректность email:


const emailInput = document.querySelector('input[name="email"]');

form.addEventListener('submit', (event) => {
    const email = emailInput.value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!regex.test(email)) {
        event.preventDefault();
        alert('Введите корректный email!');
    }
});

// 3. Ограничиваем длину пароля:

const passwordInput = document.querySelector('input[name="password"]');

form.addEventListener('submit', (event) => {
    if (passwordInput.value.length < 6) {
        event.preventDefault();
        alert('Пароль должен быть не менее 6 символов!');
    }
});
