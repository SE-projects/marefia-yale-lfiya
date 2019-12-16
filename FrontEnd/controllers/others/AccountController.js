import Account from '../../models/others/Account.js';
import {SignInViews} from '../../views/customer/AccountSignInViews.js';
import {SignUpViews} from '../../views/customer/AccountSignUpView.js';


SignInViews.onSignInButtonClicked = () => {
    console.log('SignInButtonClicked');

    let newAccount = new Account('', '', '', SignInViews.getUserName(), SignInViews.getPassword());
    SignInViews.setError(newAccount.siqnIn());
    console.log('Finished Signing in')
};

SignUpViews.setOnSignUpButtonClicked(async () => {
        console.log('signUp Clicked from controller');
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
            let result =  await newAccount.signUp();
            SignUpViews.setError(result);
            alert('Finished Method');
        }
    }
);
