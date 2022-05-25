const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', onInput);

function onInput(event) {
    textOutput.textContent = event.target.value;
    if(event.target.value === "") {
         textOutput.textContent = "Anonymous";
    }
   
}