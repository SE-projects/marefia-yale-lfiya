import {InvestigatorViews as views} from "../../views/bnb/InvestigatorView";
import Investigator from '../../models/bnb/Investigator';

views.setRequestNumber(Investigator.getNumberOfRequest());
addRequests();

views.setOnAcceptClicked(() => {
//TODO
});

views.setOnRejectClicked(() => {
//TODO
});

const addRequests = () => {
    const requests = Investigator.getAllRequests();
    for (const request in requests) {
        views.addRequest(requests.title, requests.body)
    }

};











