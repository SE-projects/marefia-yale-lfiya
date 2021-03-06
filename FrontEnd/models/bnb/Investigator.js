import axios from 'FrontEnd/axios';

export default class Investigator {
    constructor(firstName, lastName, id, phone, bnbId) {
        this.firstName = lastName;
        this.lastName = lastName;
        this.id = id;
        this.phone = phone;
        this.bnbId = bnbId;
    }

    async addInvestigator() {
        if (this.investigatorExists()) return "This investigator already exists";
        else {
            axios.post('http://localhost:3000/api/Investigator', {
                name: this.lastName,
                phone: this.phone,
                bnbId: this.bnbId,
            }).then(value => {
                console.log(value);
                return "Added Investigator"
            });

        }
    }

    async investigatorExists() {
        axios.get('http://localhost:3000/api/Investigator').then(value => {
            for (let element in data) {
                if (data[element].firstName === this.firstName &&
                    data[element].lastName === this.lastName &&
                    data[element].id === this.id) {
                    return true;
                }
            }
        });

        return false;
    }

    static async getNumberOfRequest() {
        await axios.get('http://localhost:3000/api/requests', {params: {to: "Investigator"}})
            .then(value => value.length)
            .catch(reason => reason);
    }

    static async getAllRequests() {
        await axios.get('http://localhost:3000/api/requests', {params: {to: "Investigator"}})
            .then(value => value)
            .catch(reason => reason);
    }
}








