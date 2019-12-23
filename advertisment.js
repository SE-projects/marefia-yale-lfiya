export default class advertisment {
    constructor(title, description, imageURL, telephone) {
        this.title = title;
        this.description = description;
        this.telephone = telephone;
        this.imageURL = imageURL;
    }

    async post() {
  
        if (this.containtIsSame()) return "This Adv already exists";
        else {
            await $.post('http://localhost:3000/api/Advertisment', JSON.stringify(
                {}), (data, status) => {
                console.log(`Data ${data} \n Status${status}`)
            });
        }
    }

    async containtIsSame() {
        let advContaintIsSame = false;
        await $.get('http://localhost:3000/api/Advertisment', (data, status) => {
            for (let advs in data) {
                if (data[advs].title === this.title && data[advs].description === this.description) {
                    containtIsSame = true;
                    break;
                }
            }
            return advContaintIsSame;
        });
    }
}