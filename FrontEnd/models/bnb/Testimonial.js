import axios from 'FrontEnd/axios';

export default class Testimonial {
    constructor(imageURL, name, body) {
        this.imageURL = imageURL;
        this.name = name;
        this.body = body;
    }

    static getTestimonials() {
        axios.get('http://localhost:3000/api/testimonials').then(value => value).catch(reason => reason);
    }
}