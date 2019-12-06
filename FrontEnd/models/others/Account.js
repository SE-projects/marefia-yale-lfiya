export default class Account {
    constructor(firstName, lastName, email, userName, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.password = password;
    }

    signUp() {
        $.get('http://localhost:3000/api/Accounts', (data, status) => {
            let accountExists = false;
            for (let element in data) {
                if (data[element].firstName === this.firstName && data[element].lastName === this.lastName) {
                    accountExists = true;
                    break;
                }
            }
            if (accountExists) return 'An Account already exists with the same name';
            else {
                $.post('http://localhost:3000/api/Accounts', JSON.stringify(this), (data, status) => {
                    console.log('Result ' + data);
                });
                window.location.href = 'E:/Files/Web/Marefiya Yale lifya/Front End/ui/Main Website/index.html;
            }

        });
        return 'Signed Up Successfully'
    }

    siqnIn() {
        $.get('http://localhost:3000/api/Accounts', (data, status) => {
            let accountExists = false;
            for (let element in data) {
                if (data[element].username === this.userName && data[element].password === this.password) {
                    accountExists = true;
                    break;
                }
            }
            if (accountExists) window.location.href = 'E:/Files/Web/Marefiya Yale lifya/Front End/ui/Main Website/index.html';
            else return "Account Doesn't exist. Please Sign Up First"
        });
    }


}
