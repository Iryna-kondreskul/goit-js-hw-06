// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

const btnEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');

btnEl.addEventListener('click', onChangeColor);

function onChangeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  textColorEl.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}