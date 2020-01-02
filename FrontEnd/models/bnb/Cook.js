import axios from 'FrontEnd/axios';
import {CookViews} from "../../views/bnb/CookView";

export default class Cook {
    constructor(firstName, lastName, id, email, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = email;
        this.phone = phone
    }

    addCook() {
        axios.post('http://localhost:3000/api/users', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            role: "Cook"
        }).then(value => value).catch(reason => reason)
    }

    removeCook() {
        axios.delete('http://localhost:3000/api/users', {params: {id: this.id}}).then(value => value).catch(reason => reason);
    }

    static getCookRequests() {
        axios.get('http://localhost:3000/api/requests', {params: {to: "Cook"}}).then(value => value).catch()
    }

    static async sendPurchaseRequest(body) {
        await axios.post('http://localhost:3000/api/requests', {
            title: "Cook",
            body: body,
            to: "purchaser"
        })
            .then(value => "Successfully added your request")
            .catch(reason => "couldn't add your request");
    }

    static async getNumberOfRequest() {
        axios.get('http://localhost:3000/api/requests', {params: {to: "Cook"}})
            .then(value => value.length)
            .catch(reason => reason);
    }

    static removeRequest(body) {
        axios.delete('http://localhost:3000/api/requests', {params: {to: "Cook", body: body}})
            .then(value => "Removed Request")
            .catch(reason => "Couldn't remove request");
    }

}