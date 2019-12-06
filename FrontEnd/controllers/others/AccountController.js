import Account from '../../models/others/Account';
import {SignInViews} from '../../views/AccountSignInViews';
import {SignUpViews} from '../../views/AccountSignUpView';

SignInViews.onSignInButtonClicked = () => {
    console.log('SignInButtonClicked');

    let newAccount = new Account('', '', '', SignInViews.getUserName(), SignInViews.getPassword());
    SignInViews.setErrorDisplay(newAccount.siqnIn());
    console.log('Finished Signing in')
};

SignUpViews.onSignUpButtonClicked = () => {
    console.log('signUp Clicked');
    if (!SignUpViews.isTermChecked()) {
        SignUpViews.setErrorDisplay('You must agree to the terms first');
    } else {
        SignUpViews.setErrorDisplay('');
        let newAccount = new Account(
            SignUpViews.getFirstName(),
            SignUpViews.getLastName(),
            SignUpViews.getEmail(),
            SignUpViews.getUserName(),
            SignUpViews.getPassword()
        );
        SignUpViews.setErrorDisplay(newAccount.signUp());
        alert('Finished Method');
    }
    console.log('Sign Up finished')
};

