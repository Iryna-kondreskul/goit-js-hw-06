//1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const categoryEl = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${categoryEl}`);

//   const categories = document.querySelector('#categories').children;
//  console.log(`Number of categories: ${categories.length}`)

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const categoriesItemsEl = document.querySelectorAll(".item")
 .forEach((el) => {
     console.log("Category:", el.querySelector('h2').textContent),
     console.log('Elements:', el.querySelectorAll('li').length)
 });

