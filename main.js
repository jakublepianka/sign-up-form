const form = document.querySelector("form");

const inputElements = [
    document.getElementById("user_name"),
    document.getElementById("user_surname"),
    document.getElementById("user_email"),
    document.getElementById("user_tel"),
    document.getElementById("user_password")
];

const nameError = document.querySelector("#user_name + span.name_error");
const surnameError = document.querySelector("#user_surname + span.surname_error");
const emailError = document.querySelector("#user_email + span.email_error");
const telError = document.querySelector("#user_tel + span.tel_error");
const pwdError = document.querySelector("#user_password + span.pwd_error");

inputElements.forEach(input => {
    input.addEventListener("keyup", (event) => {
        if (input.value.length > 0) {
            input.className = "";
        }
    });
});