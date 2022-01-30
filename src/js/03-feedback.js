import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE = 'feedback-form-state';
let items = {};

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(textAreaInput, 500));
populateForm();

function textAreaInput(event) {
    items[event.target.name] = event.target.value;
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(items));
};

function formSubmit(event) {
    event.preventDefault();

    if (form.email.value === '' || form.message.value === '') {
        alert('All fields are required!');
    } else {
        console.log(items);
        event.currentTarget.reset();

        localStorage.removeItem(LOCAL_STORAGE);
        items = {};
    };
};

function populateForm() {
    const savedObject = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
   
    for (const key in savedObject) {
        if (key) {
            form[key].value = savedObject[key];
            items = savedObject;
        }; 
    };
};
