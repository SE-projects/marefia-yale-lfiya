export const SignUpViews = {
    getFirstName: () => firstName.value,
    getLastName: () => lastName.value,
    getEmail: () => email.value,
    getUserName: () => userName.value,
    getPassword: () => password.value,
    onSignUpButtonClicked: () => signUpButton.onclick,
    isTermChecked: () => termAgreement.checked,
    setErrorDisplay: (error) => {
        errorDisplay.innerText = error
    }
};
const firstName = document.getElementById('firstNameInput');
const lastName = document.getElementById('lastNameInput');
const email = document.getElementById('emailInput');
const userName = document.getElementById('userNameInput');
const password = document.getElementById('passwordInput');
const termAgreement = document.getElementById('termAgreementInput');
const errorDisplay = document.getElementById('errorDisplay');
const signUpButton = document.getElementById('signUpButton');



