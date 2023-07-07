import { infoObj } from "../js/form-data";
import { alert} from '@pnotify/core';
import isEmail from 'validator/es/lib/isEmail';
import '@pnotify/core/dist/BrightTheme.css';

const elements = {
    formEl: document.querySelector(".form"),
    emailEl: document.querySelector(".email"),
    nameEl: document.querySelector(".name"),
    messageEl: document.querySelector(".message"),
}

elements.formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    if (!isEmail(elements.emailEl.value)) {
        alert({
            text: "Неправильний email! Спробуйте ще раз",
            type: 'info'
        });
        return
    }

    infoObj.name = elements.nameEl.value;
    infoObj.email = elements.emailEl.value;
    infoObj.message = elements.messageEl.value;

    alert({
    text: "Success!",
    type: 'info'
    });
}