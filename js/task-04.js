const value = document.querySelector("#value");
let counterValue = 0;
console.log(counterValue);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn);

const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
} );