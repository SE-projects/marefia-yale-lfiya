import Account from '../../models/others/Account.js';
import {SignInViews} from '../../views/customer/AccountSignInViews.js';
import {SignUpViews} from '../../views/customer/AccountSignUpView.js';

SignInViews.onSignInButtonClicked = () => {
    console.log('SignInButtonClicked');

    let newAccount = new Account('', '', '', SignInViews.getUserName(), SignInViews.getPassword());
    SignInViews.setError(newAccount.siqnIn());
    console.log('Finished Signing in')
};

SignUpViews.onSignUpButtonClicked = () => {
    console.log('signUp Clicked');
    if (!SignUpViews.isTermChecked()) {
        SignUpViews.setError('You must agree to the terms first');
    } else {
        SignUpViews.setError('');
        let newAccount = new Account(
            SignUpViews.getFirstName(),
            SignUpViews.getLastName(),
            SignUpViews.getEmail(),
            SignUpViews.getUserName(),
            SignUpViews.getPassword()
        );
        SignUpViews.setError(newAccount.signUp());
        alert('Finished Method');
    }
    console.log('Sign Up finished')
};

