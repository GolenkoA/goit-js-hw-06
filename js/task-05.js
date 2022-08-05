const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener('input', onInputChange);
input.addEventListener('blur', onInputAnonymous);

function onInputChange(event) {
    if (event.currentTarget.value === "") {
        output.textContent = 'Anonymous';
    }
    output.textContent = event.currentTarget.value;
};

function onInputAnonymous() {
    if (output.textContent === "") {
    output.textContent = 'Anonymous';
}
};