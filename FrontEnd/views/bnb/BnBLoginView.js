export const BnBLoginViews = {
    getEmail: () => emailInput.value,
    getPassWord: () => passwordInput.value,
    isRememberMe: () => isRememberMe.checked,
    logInButton: () => logInButton.onclick,
    setError: (error)=>{
        errorDisplay.innerText = error;
    }
};
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const isRememberMe = document.getElementById('isRememberMe');
const logInButton = document.getElementById('logInButton');
const errorDisplay = document.getElementById('errorDisplay');