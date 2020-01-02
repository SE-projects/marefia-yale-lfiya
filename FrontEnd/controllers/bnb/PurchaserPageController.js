import {PurchaserViews as views} from "../../views/bnb/PurchaserView";
import Purchaser from "../../models/bnb/Purchaser"

updateRequestNumber();
addRequests();

views.setOnClearRequestClicked(() => {
//TODO
});
const addRequests = () => {
    const requests = Purchaser.getAllReqests();
    for (const request in requests) {
        views.addNewRequest(request.title, request.body)
    }
};

const updateRequestNumber = () => {
    views.setRequestNumber(Purchaser.getPurchaseRequestNumber());
};




