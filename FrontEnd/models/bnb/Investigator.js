import {IRoute as $} from "express-serve-static-core";

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
            $.post('http://localhost:3000/api/Investigator', JSON.stringify({
                "firstName": this.firstName,
                "lastName": this.lastName,
                "phone": this.phone,
                "bnbId": this.bnbId,
            }), (data, status) => {
                console.log(`${data}`);
            })
        }
    }

    async investigatorExists() {
        let investigatorExists = false;
        $.get('http://localhost:3000/api/Investigator', (data, status) => {
            for (let element in data) {
                if (data[element].firstName === this.firstName &&
                    data[element].lastName === this.lastName &&
                    data[element].id === this.id) {
                    investigatorExists = true;
                    break;
                }
            }
        });
        return investigatorExists;
    }

}








