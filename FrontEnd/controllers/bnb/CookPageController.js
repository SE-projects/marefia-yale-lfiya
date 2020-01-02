import Cook from '../../models/bnb/Cook';
import {CookViews} from '../../views/bnb/CookView'

CookViews.setRequestNumber(Cook.getNumberOfRequest());

addRequests();

CookViews.setOnSubmitRequest(() => {
    CookViews.setMessage(Cook.sendPurchaseRequest(CookViews.getPurchaseRequest()));
});

CookViews.setOnClearRequest(()=>{
    Cook.removeRequest();
    //TODO request request body for each specific request
    Cook.getCookRequests();
});

const addRequests = () => {
    const requests = Cook.getCookRequests();
    for (let request in requests) {
        CookViews.addRequestToList(request.body, request.title);
    }
};




