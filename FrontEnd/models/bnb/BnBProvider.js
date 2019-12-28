import axios from 'FrontEnd/axios';

export default class BnBProvider {
    constructor(name, telephone, location, category, imageURL, services, numberOfStars = 0) {
        this.name = name;
        this.telephone = telephone;
        this.location = location;
        this.category = category;
        this.imageURL = imageURL;
        this.services = services;       //services is an array
        this.numberOfStars = numberOfStars         //services is an array
    }

    static getAllBnBs() {
        axios.get('http://localhost:3000/api/BnBProviders').then(value => value).catch(reason => reason);
    }

    static getBnBByCategory(category) {
        axios.get('http://localhost:3000/api/BnBProviders',
            {params: {category: category}}).then(value => value).catch(reason => reason);
    }

     static async getBnBsHavingService(services) {
        let bnbs;
        await axios.get('http://localhost:3000/api/BnBProviders').then(value => bnbs = value).catch(reason => reason);

        a:for (let bnb in bnbs) {
            let serviceExists = true;
            for (let service in services) {
                if (!bnb.services.contains(service)) {
                    serviceExists = false;
                    break;
                }
            }
            if (!serviceExists) bnbs.remove(indexOf(bnb));
        }
        return bnbs;
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