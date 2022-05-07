// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// 1 Размеры самого первого <div> - 30px на 30px.

//2 Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.

//3 Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

//4 Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const refs = {
  inputValue: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  divBox: document.querySelector("#boxes"),
};
console.log(refs.inputValue);
console.log(refs.createBtn);
console.log(refs.destroyBtn);

refs.createBtn.addEventListener("click", (event) => {
  createBox(event);
});


// --------------------- create --------------

let firstDivWidth = 30;
let firstDivHeight = 30;
function createBox(amount) {
  amount = refs.inputValue.value;

  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    if (firstDivWidth > newDiv.style.width) {
      firstDivWidth += 10;
      firstDivHeight += 10;
    } else {
      console.log("aisaiogj");
      firstDivWidth = 30;
      firstDivHeight = 30;
      const firstDiv = document.createElement("div");
      firstDiv.style.width = `${firstDivWidth}px`;
      firstDiv.style.height = `${firstDivHeight}px`;
      firstDiv.style.backgroundColor = getRandomHexColor();
      console.log(`${firstDivHeight} alalalalalal`);
      refs.divBox.append(firstDiv);
    }
    newDiv.style.width = `${firstDivWidth}px`;
    newDiv.style.height = `${firstDivHeight}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    refs.divBox.append(newDiv);
    console.log(newDiv);
    console.log(newDiv.style.width);
    console.log(newDiv.previousElementSibling);
  }
}

refs.destroyBtn.addEventListener("click", () => {
  for (let i = 0; i < refs.divBox.children.length; i++) {
    console.log([i]);
    refs.divBox.children[i].remove();
    [i] = [i - 1];
  }
  firstDivHeight = 30;
  firstDivWidth = 30;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
