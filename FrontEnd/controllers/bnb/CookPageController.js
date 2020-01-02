import Cook from '../../models/bnb/Cook';
import {CookViews} from '../../views/bnb/CookView'

CookViews.setRequestNumber(Cook.getNumberOfRequest());

CookViews.addRequestToList();

CookViews.setOnSubmitRequest(() => {
   CookViews.setMessage(Cook.sendPurchaseRequest(CookViews.getPurchaseRequest()));
});