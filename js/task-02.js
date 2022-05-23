const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

//1 Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//2 Добавит название ингредиента как его текстовое содержимое.
//3 Добавит элементу класс item.
//4 После чего вставит все <li> за одну операцию в список ul.ingredients.

// const titleE = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
//   ulEl.innerHTML = titleE

  // console.log(ulEl);

  // ---------------------------------------

  const ingrediendsItem = ingredients.map(ingredient => {
    const itemList = document.createElement('li');
    itemList.textContent = ingredient;

    itemList.classList.add('irem');

    return itemList;
  });

  const ingrediendList = document.querySelector("#ingredients");
  ingrediendList.append(...ingrediendsItem);











