import axios from 'FrontEnd/axios';

export default class Request {
    constructor(bnbName, services, email, phoneNumber, letter) {
        this.bnbName = bnbName;
        this.services = services;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.letter = letter;
    }

    async addRequest() {
        await axios.post('http://localhost:3000/api/requests', {
            bnbName: this.bnbName,
            services: this.services,
            email: this.email,
            phoneNumber: this.phoneNumber,
            letter: this.letter,
        }).then(value => "Successfully sent your request")
            .catch(reason => "An Error has occurred while trying to send request");
    }
}