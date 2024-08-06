const form = document.querySelector("form");

const inputElements = [
    document.getElementById("user_name"),
    document.getElementById("user_surname"),
    document.getElementById("user_email"),
    document.getElementById("user_tel"),
    document.getElementById("user_password"),
    document.getElementById("user_password1")
];

const errorElements = [
    document.querySelector("#user_name + span.name_error"),
    document.querySelector("#user_surname + span.surname_error"),
    document.querySelector("#user_email + span.email_error"),
    document.querySelector("#user_tel + span.tel_error"),
    document.querySelector("#user_password + span.pwd_error"),
    document.querySelector("#user_password1 + span.pwd1_error")
];

inputElements.forEach(input => {
    input.addEventListener("input", (event) => {
        let index = inputElements.indexOf(input);
        if (input.value.length > 0) {
            input.className = "";
            if (input.validity.valid) {
                errorElements[index].textContent = "";        
            } else {
                showError(index);
            }
        }
    });
});

function showError(index) {
    if (inputElements[index].id == 'user_name') {
            errorElements[index].textContent = "Enter a valid name - 2 or more letters";
    }
    if (inputElements[index].id == 'user_surname') {
            errorElements[index].textContent = "Enter a valid surname - 2 or more letters";
    }
    if (inputElements[index].id == 'user_email') {
        errorElements[index].textContent = "Enter a valid email address";
    }
    if (inputElements[index].id == 'user_tel') {
        errorElements[index].textContent = "Enter a valid phone number - 9 or more digits";
    }

    if (inputElements[index].id == 'user_password') {
        errorElements[index].textContent = "Password must consist of at least 8 letters, digits or symbols";
    }
    if (inputElements[index].id == 'user_password1') {
        errorElements[index].textContent = "Password must consist of at least 8 letters, digits or symbols";
    }
    
};


// form.addEventListener("submit", (event) => {
//     for (let i = 0; i < 6; i++) {
//         if (!inputElements[i].validity.valid) {
//             showError(i);
//             event.preventDefault();
//         }
//     }
// });

