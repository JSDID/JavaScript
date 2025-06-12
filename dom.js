/*
Что такое DOM?
DOM расшифровывается как Document Object Model (Объектная Модель Документа). 
Это программный интерфейс, предоставляемый браузером, который позволяет JavaScript взаимодействовать с содержимым HTML и CSS на веб-странице и изменять его.
Представьте DOM как древовидную структуру (называемую деревом DOM), где:
• Каждый HTML-элемент — это узел дерева.
• Корневой узел — это элемент <html>.
• JavaScript может читать, изменять, создавать или удалять эти узлы с помощью API DOM.
*/

/*
Зачем использовать DOM?
Потому что он позволяет:
• Читать и изменять содержимое
• Добавлять или удалять элементы
• Реагировать на клики, нажатия клавиш и многое другое
*/

/*
Accessing Elements
Можно выбирать элементы на странице несколькими способами
*/

// По id
const elemById = document.getElementById('myId');

// По имени тега
const elemsByTag = document.getElementsByTagName('div');

// По имени класса
const elemsByClass = document.getElementsByClassName('myClass');

// С помощью CSS-селектора (первый подходящий элемент)
const elemQuery = document.querySelector('.myClass');

// С помощью CSS-селектора (все подходящие элементы)
const elemsQueryAll = document.querySelectorAll('div.myClass');

/*
Изменение содержимого Вы можете изменить текст или HTML внутри элемента.
*/

// Изменить только текст внутри элемента
document.getElementById('myElement').textContent = 'Новый текст';

// Изменить HTML внутри элемента
document.getElementById('myElement').innerHTML = '<strong>Жирный текст</strong>';

/*
Changing Styles
Можно динамически изменять CSS-стили.
*/

// Изменить цвет текста
document.getElementById('myElement').style.color = 'red';

// Изменить размер шрифта
document.getElementById('myElement').style.fontSize = '24px';

// Добавить несколько стилей сразу
document.getElementById('myElement').style.cssText = 'background: yellow; border: 1px solid black;';

/*
Adding/Removing
Это полезно для переключения стилей
*/

// Добавить класс
document.getElementById('myElement').classList.add('active');

// Удалить класс
document.getElementById('myElement').classList.remove('active');

// Переключить класс (добавить, если нет; удалить, если есть)
document.getElementById('myElement').classList.toggle('active');

/*
Creating new elements
Можно создавать новые HTML-элементы
*/

// Создать новый элемент <p>
const newParagraph = document.createElement('p');

// Добавить текст в новый элемент
newParagraph.textContent = 'Это новый абзац!';

// Добавить элемент на страницу, например, внутрь <body>
document.body.appendChild(newParagraph);

/*
Removing elements
Удаление элементов из DOM
*/

// Найти элемент по id
const elem = document.getElementById('myElement');

// Удалить элемент со страницы
elem.remove();

/*
Adding Event Listeners
Можно удалять элементы из DOM.
*/

// Добавить обработчик события на кнопку для удаления элемента
document.getElementById('deleteBtn').addEventListener('click', function () {
  document.getElementById('myElement').remove();
});

/*
DOM Hierarchy & Navigation
Можно перемещаться между родительскими и дочерними элементами.
*/

const child = document.getElementById('childElem');

// Получить родительский элемент
const parent = child.parentElement;

// Получить первого дочернего элемента
const firstChild = parent.firstElementChild;

// Получить всех детей
const allChildren = parent.children;

let element = document.getElementById('id');
for (let i = 0; i < element.lenght; i++) {
  element.style.color = 'red';
}

/*
Пример 

Изменение текста заголовка по клику

<!DOCTYPE html>
<html>
<head>
  <title>Изменение текста заголовка</title>
</head>
<body>
  <h1 id="mainHeading">Нажми на меня!</h1>
  <script>
    document.getElementById('mainHeading').addEventListener('click', function() {
      this.textContent = 'Текст изменён!';
    });
  </script>
</body>
</html>

*/
