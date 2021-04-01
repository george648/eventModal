const inputName = document.getElementById('input_name');
const inputLastName = document.getElementById('input_last_name');
const inputAge = document.getElementById('input_age');
const openModalWindowBtn = document.getElementById('open_window_btn');
const ERROR_MESSAGE = document.getElementById('error_message');
const cancelModalWindow = document.getElementById('cancel_modal_window');
const addUserDataBtn = document.getElementById('add_user_data');
const modalWindow = document.getElementById('modal_window');
const ERROR_NUMBER = document.getElementById('error_message_number');

function hideModalWindowFn() {
    return ERROR_MESSAGE.classList.add('hide');
};

function openModalWindowFn() {
    return ERROR_MESSAGE.classList.remove('hide');
};

window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        hideModalWindowFn()
    }
});

function checkValidInputText(event) {
    const errorElement = document.createElement('p');
    errorElement.innerHTML = `Error! Enter correct data!`;
    if (event.target.value.length > 20) {
                openModalWindowFn();
        addUserDataBtn.disabled = true;
        // event.target.prepend(errorElement)
    } else if (!isNaN(event.target.value)) {
        openModalWindowFn();
        addUserDataBtn.disabled = true;
    } else if (event.target.value.length < 20) {
        addUserDataBtn.disabled = false;
        hideModalWindowFn()
    } else {
    addUserDataBtn.disabled = true;
        hideModalWindowFn();
    }
};

function checkValidInputNumber(event) {
    if (isNaN(Number(event.target.value))) {
        ERROR_NUMBER.classList.remove('hide');
        addUserDataBtn.disabled = true;
    } else if(event.target.value === '') {
        addUserDataBtn.disabled = true;
    }
    else if (!isNaN(event.target.value)) {
        addUserDataBtn.disabled = false;
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