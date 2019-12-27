import axios from 'FrontEnd/axios';

export default class Purchaser {
    constructor(firstName, lastName, id,email,phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = email;
        this.phone = phone
    }

    addManager() {
        axios.post('http://localhost:3000/api/users', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            role: "Manager"
        }).then(value => value).catch(reason => reason)
    }

    removeManager() {
        axios.delete('http://localhost:3000/api/users', {params: {id: this.id}}).then(value => value).catch(reason => reason);
    }

}