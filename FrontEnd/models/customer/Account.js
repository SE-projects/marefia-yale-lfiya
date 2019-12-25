import axios from 'FrontEnd/axios'

export default class Account {
    constructor(firstName, lastName, email, userName, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.password = password;
    }

    async signUp() {
        if (this.doesAccountExist()) {
            return 'An account exists with the same username'
        } else {

            alert('Posting');
            axios.post('http://localhost:3000/api/Accounts', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                userName: this.userName,
                password: this.password,
            }).then(value => {
                console.log(value);
                window.location.href = 'E:/Files/Web/Marefiya Yale lifya/marefia-yale-lfiya/FrontEnd/UI/Main Website/index.html';
            });
            return 'Signed Up Successfully'

        }

    }

    async siqnIn() {
        if (this.doesAccountExist()) window.location.href = 'E:/Files/Web/Marefiya Yale lifya/marefia-yale-lfiya/FrontEnd/UI/Main Website/index.html';
        else return "Account Doesn't exist. Please Sign Up First"
    }

    async doesAccountExist() {
        axios.get('http://localhost:3000/api/Accounts').then(value => {
            for (let element in value) {
                if (value[element].firstName === this.firstName && value[element].lastName === this.lastName) {
                    alert('An Account already exists with the same name');
                    return true;
                }
            }
        }).catch(reason => console.log(reason));
        return false;
    }


}
