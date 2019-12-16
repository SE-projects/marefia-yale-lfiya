let clearRequestButton = document.getElementById('clearRequestButton');
let requestList = document.getElementById('requestList');
let requestInput = document.getElementById('requestInput');
let submitRequest = document.getElementById('submitRequest');
let requestNumber = document.getElementById('numberOfRequests');

export const CookViews = {
    getPurchaseRequest: () => requestInput.innerText,
    setOnSubmitRequest: (callBack) => {
        submitRequest.onclick = callBack;
    },
    setRequestNumber: (requestNumber) => {
        requestNumber.innerText = requestNumber;
    },
    addRequestToList: (requestBody, roomNumber) => {
        let requestHTML = `<li class="right clearfix"><span class="chat-img pull-left">
								</span>
                            <div class="chat-body clearfix">
                                <div class="header"><strong class="primary-font">${roomNumber}</strong>
                                    <small class="text-muted">32 mins ago</small>
                                </div>
                                <p>${requestBody}</p>
                            </div>
                            <div>
                                <br>
                                <button class="btn btn-primary btn-md" id="clearRequestButton">Clear Request</button>
                            </div>
                        </li>`;
        requestList.insertAdjacentHTML("afterend", requestBody);
    }

};




