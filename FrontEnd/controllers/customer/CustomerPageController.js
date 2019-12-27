import BnBProvider from '../../models/bnb/BnBProvider'
import {BnBViews} from "../../views/customer/BnBsView";

/**BnBs Page
 * */
printBnBs(BnBProvider.getAllBnBs());

BnBViews.setOnOptionChanged(() => {
    const selectedService = BnBViews.getSelectedService();
    BnBViews.clearBnBList();
    let arrayOfFilteredBnB = BnBProvider.getBnBByCategory(selectedService);
    printBnBs(arrayOfFilteredBnB)
});

//TODO check if checkbox is checked and add multiple filter support

BnBViews.setOnGymClicked(() => {
    BnBViews.clearBnBList();
    let arrayOfFilteredBnB = BnBProvider.getBnBsHavingService("Gym");
    printBnBs(arrayOfFilteredBnB)
});
BnBViews.setOnPoolClicked(() => {
    BnBViews.clearBnBList();
    let arrayOfFilteredBnB = BnBProvider.getBnBsHavingService("Swimming pool");
    printBnBs(arrayOfFilteredBnB)
});
BnBViews.setOnPlayClicked(() => {
    BnBViews.clearBnBList();
    let arrayOfFilteredBnB = BnBProvider.getBnBsHavingService("Play Ground");
    printBnBs(arrayOfFilteredBnB)
});
BnBViews.setOnLakeSideClicked(() => {
    BnBViews.clearBnBList();
    let arrayOfFilteredBnB = BnBProvider.getBnBsHavingService("Lake Side");
    printBnBs(arrayOfFilteredBnB)
});

const printBnBs = (arrayOfBnB) => {
    for (let bnb in arrayOfBnB) {
        BnBViews.addBnB(bnb.name, bnb.location, bnb.category, bnb.imageURL);
        if (bnb.category === "Hotel") {
            BnBViews.addStar(bnb.numberOfStars)
        }
    }
};

/**Customer request page
 * */






