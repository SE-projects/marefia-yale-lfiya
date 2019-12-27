import axios from 'FrontEnd/axios';

export default class Customer {
    constructor(firstName, lastName, id,email,phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = email;
        this.phone = phone
    }

    addCustomer() {
        axios.post('http://localhost:3000/api/users', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            role: "Customer"
        }).then(value => value).catch(reason => reason)
    }

    removeCustomer() {
        axios.delete('http://localhost:3000/api/users', {params: {id: this.id}}).then(value => value).catch(reason => reason);
    }

}