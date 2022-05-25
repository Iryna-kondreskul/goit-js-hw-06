// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.

//Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

//Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onCheckInputLength);

function onCheckInputLength (event) {
    const inputData = event.currentTarget.dataset.length;
    const inputLength = String(event.currentTarget.value.length);
    if (inputData === inputLength) {
        updateClass('valid', 'invalid');
            } else {
               updateClass('invalid', 'valid');
            }
};

function updateClass(addCla, remCla) {
    inputRef.classList.add(addCla);
    inputRef.classList.remove(remCla);
}



