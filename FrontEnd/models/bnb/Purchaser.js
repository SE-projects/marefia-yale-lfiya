import axios from 'FrontEnd/axios';

export default class Purchaser {
    constructor(firstName, lastName, id, email, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = email;
        this.phone = phone
    }

    addPurchaser() {
        axios.post('http://localhost:3000/api/users', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            role: "Purchaser"
        }).then(value => value).catch(reason => reason)
    }

    removePurchaser() {
        axios.delete('http://localhost:3000/api/users', {params: {id: this.id}}).then(value => value).catch(reason => reason);
    }

    static async getPurchaseRequestNumber() {
        await axios.get('http://localhost:3000/api/requests', {params: {to: "Purchaser"}}).then(value => value.length).catch(reason => reason)
    }

    static async getAllReqests() {
        await axios.get('http://localhost:3000/api/requests', {params: {to: "Purchaser"}}).then(value => value).catch(reason => reason);
    }
}
