let myForm = document.querySelectorAll("form");
myForm[1].addEventListener('submit', (event) => {
    event.preventDefault();
    // Below code will give the data entered by user
    let name = document.querySelector(".userName");
    let email = document.querySelector(".userEmail");
    let message = document.querySelector(".userMessage");

    // Below code will set the entered data in the User Output Board
    let sName = document.querySelector(".enterName");
    let sEmail = document.querySelector(".enterMail");
    let sMessage = document.querySelector(".enterMessage");

    sName.value = name.value;
    sEmail.value = email.value;
    sMessage.value = message.value;
})