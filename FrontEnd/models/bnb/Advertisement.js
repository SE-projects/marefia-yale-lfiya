import axios from 'FrontEnd/axios';

export default class Advertisment {
    constructor(title, description, imageURL, telephone) {
        this.title = title;
        this.description = description;
        this.telephone = telephone;
        this.imageURL = imageURL;
    }


    async post() {

        if (this.containtIsSame()) return "This Adv already exists";
        else {
            await axios.post('http://localhost:3000/api/Advertisment',
                {
                    title: this.title,
                    description: this.title,
                    telephone: this.title,
                    imageURL: this.title,
                })
                .then(value => {
                    console.log(value);
                    return "Added Adv successfully"
                });
        }
    }

    async containtIsSame() {
        await axios.get('http://localhost:3000/api/Advertisment').then(value => {
            for (let advs in value) {
                if (value[advs].title === this.title && value[advs].description === this.description) {
                    return true;
                }
            }
        });
        return false;
    }
}