const ref = {
inputTypeEmail: document.querySelector('input'),
inputTypeTextarea: document.querySelector('textarea'),
buttonSubmit: document.querySelector('button'),
};
const obj = {};
var throttle = require('lodash.throttle');

ref.inputTypeEmail.addEventListener('input',throttle(saveInput,500))
ref.inputTypeTextarea.addEventListener('input',throttle(saveInput,500))

function saveInput () {

    obj.message = ref.inputTypeTextarea.value;
    obj.email = ref.inputTypeEmail.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
}

if(JSON.parse(localStorage.getItem('feedback-form-state'))){
    ref.inputTypeTextarea.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
    ref.inputTypeEmail.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
}

ref.buttonSubmit.addEventListener('click', newForm)

function newForm (e) {
console.log(`attention please!!! message = ${obj.message} and email = ${obj.email}`)
alert(`attention please!!! message = ${obj.message} and email = ${obj.email}`)
e.preventDefault();
localStorage.clear('feedback-form-state');
ref.inputTypeEmail.value = '';
ref.inputTypeTextarea.value = '';

}
