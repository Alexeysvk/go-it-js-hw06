const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

nameInputRef.addEventListener('input', onNameOutput);

function onNameOutput({target}){
    nameOutputRef.textContent= target.value ? target.value : 'Anonimous';
}