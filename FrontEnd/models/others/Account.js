export default class Account {
    constructor(firstName, lastName, email, userName, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.password = password;
    }

    async signUp() {
        let accountExists = false;
        await $.get('http://localhost:3000/api/Accounts', (data, status) => {
            for (let element in data) {
                if (data[element].firstName === this.firstName && data[element].lastName === this.lastName) {
                    accountExists = true;
                    alert(true);
                    break;
                }
            }
        });
        if (accountExists) {
            alert('from if Statement');
            return 'An Account already exists with the same name';
        }
        else {
            alert('From else statement');
            await $.post('http://localhost:3000/api/Accounts', JSON.stringify(
                {
                    "firstName": this.firstName,
                    "lastName": this.lastName,
                    "email": this.email,
                    "userName": this.userName,
                    "password": this.password,

                }), (data, status) => {
                console.log('Result ' + data);
            });
            window.location.href = 'E:/Files/Web/Marefiya Yale lifya/marefia-yale-lfiya/FrontEnd/UI/Main Website/index.html';
            return 'Signed Up Successfully'
        }
    }

    async siqnIn() {
        await $.get('http://localhost:3000/api/Accounts', (data, status) => {
            let accountExists = false;
            for (let element in data) {
                if (data[element].username === this.userName && data[element].password === this.password) {
                    accountExists = true;
                    break;
                }
            }
            if (accountExists) window.location.href = 'E:/Files/Web/Marefiya Yale lifya/marefia-yale-lfiya/FrontEnd/UI/Main Website/index.html';
            else return "Account Doesn't exist. Please Sign Up First"
        });
    }


}
