const textInput = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  const inputValue = event.target.value.trim();
  spanText.textContent = inputValue ? inputValue : 'Anonymous';
});
