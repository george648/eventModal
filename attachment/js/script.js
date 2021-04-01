const inputName = document.getElementById('input_name');
const inputLastName = document.getElementById('input_last_name');
const inputAge = document.getElementById('input_age');
const openModalWindowBtn = document.getElementById('open_window_btn');
const ERROR_MESSAGE_NAME = document.getElementById('error_message');
const ERROR_MESSAGE_LAST_NAME = document.getElementById('error_message');
const cancelModalWindow = document.getElementById('cancel_modal_window');
const addUserDataBtn = document.getElementById('add_user_data');
const modalWindow = document.getElementById('modal_window');
const ERROR_NUMBER = document.getElementById('error_message_number');

function hideErrorClassListModalWindow() {
    return ERROR_MESSAGE_NAME.classList.add('hide');
};

function showErrorClassListModalWindow() {
    return ERROR_MESSAGE_NAME.classList.remove('hide');
};

window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        hideErrorClassListModalWindow()
    }
});


function checkValidInputText(event) {
    if (event.target.value.length > 20) {
        event.target.nextElementSibling.classList.remove('hide');
    } else if (event.target.value.length < 20) {
        event.target.nextElementSibling.classList.add('hide');
    } else {
        event.target.nextElementSibling.classList.add('hide');
    }
};

function checkValidInputNumber(event) {
    if (isNaN(Number(event.target.value))) {
        ERROR_NUMBER.classList.remove('hide');
    } else if (!(Number(event.target.value))) {
        ERROR_NUMBER.classList.add('hide');
    } else if (event.target.value.length > 20) {
        ERROR_NUMBER.classList.remove('hide');
    } else {
        ERROR_NUMBER.classList.add('hide');
    }
};


function checkEmptyInputs() {
    inputName,
    inputLastName,
    inputAge
}



openModalWindowBtn.addEventListener('click', () => modalWindow.classList.remove('hide'));
inputName.addEventListener('input', checkValidInputText);
inputLastName.addEventListener('input', checkValidInputText);
inputAge.addEventListener('input', checkValidInputNumber);
cancelModalWindow.addEventListener('click', () => modalWindow.classList.add('hide'));