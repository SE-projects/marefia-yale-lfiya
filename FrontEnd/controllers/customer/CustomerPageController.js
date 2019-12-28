import BnBProvider from '../../models/bnb/BnBProvider'
import {BnBViews} from "../../views/customer/BnBsView";
import {CustomerRequestViews as views} from '../../views/customer/CustomerRequestView';
import {HomePageViews} from '../../views/customer/CustomerHomePage';
import Request from '../../models/customer/Request';
import Testimonial from '../../models/bnb/Testimonial';

/**BnBs Page
 * */

printBnBs(BnBProvider.getAllBnBs());

BnBViews.setOnOptionChanged(() => {
    const selectedService = BnBViews.getSelectedService();
    BnBViews.clearBnBList();
    let arrayOfFilteredBnB = BnBProvider.getBnBByCategory(selectedService);
    printBnBs(arrayOfFilteredBnB)
});

BnBViews.setOnGymClicked(addBnBByFilter());
BnBViews.setOnPoolClicked(addBnBByFilter());
BnBViews.setOnPlayClicked(addBnBByFilter);
BnBViews.setOnLakeSideClicked(addBnBByFilter);

const printBnBs = (arrayOfBnB) => {
    for (let bnb in arrayOfBnB) {
        BnBViews.addBnB(bnb.name, bnb.location, bnb.category, bnb.imageURL);
        if (bnb.category === "Hotel") {
            BnBViews.addStar(bnb.numberOfStars)
        }
    }
};
const getServicesArray = () => {
    let services = [];
    if (BnBViews.isGym()) services.push("Gym");
    if (BnBViews.isPool()) services.push("Swimming pool");
    if (BnBViews.isLakeSide()) services.push("Lake Side");
    if (BnBViews.isPlayground()) services.push("Playground");
    return services;
};
const addBnBByFilter = () => {
    BnBViews.clearBnBList();
    let arrayOfFilteredBnB = BnBProvider.getBnBsHavingService(getServicesArray());
    printBnBs(arrayOfFilteredBnB)
};

/**Customer request page
 * */

views.setOnSubmitClicked(() => {
    if (!views.hasAgreedToTerms()) views.setMessage("You need to agree to the terms of service");
    else {
        const request = new Request(views.getBnBName(), getRequestServices(), views.getEmail(), views.getAddress(), views.getMessage());
        views.setMessage(request.addRequest());
    }
});
const getRequestServices = () => {
    let services = [];
    if (views.isExtraTowelSelected()) services.push("Towel");
    if (views.isBreakFastSelected()) services.push("BreakFast");

    return services;
};

/**Home page
 * */
const testimonials = Testimonial.getTestimonials();
for (const test in testimonials){
    HomePageViews.addTestimonial(test.imageURL, test.name, test.body);

}










