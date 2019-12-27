import axios from 'FrontEnd/axios';

export default class BnBProvider {
    constructor(name, telephone, services) {
        this.name = name;
        this.telephone = telephone;
        this.services = services         //services is an array
    }

    addBnBProvider() {
        axios.post('http://localhost:3000/api/BnBProviders', {
            name: this.name,
            telephone: this.telephone,
            services: this.services,
        }).then(value => value).catch(reason => reason)
    }

    removeBnBProvider() {
        axios.delete('http://localhost:3000/api/BnBProviders', {params: {name: this.name}}).then(value => value).catch(reason => reason);
    }
}