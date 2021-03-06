const userName = document.getElementById('userNameInput');
const password = document.getElementById('passwordInput');
const signInButton = document.getElementById('signInButton');
const errorDisplay = document.getElementById('errorDisplay');

export const SignInViews = {
    getUserName: () => userName.value,
    getPassword: () => password.value,
    onSignInButtonClicked: () => signInButton.onclick,
    setError: (error) => {
        errorDisplay.innerText = error
    }
};
