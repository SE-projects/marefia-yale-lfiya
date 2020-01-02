const clearRequestButton = document.getElementsByClassName('clearRequestButton');
const requestList = document.getElementById('requestList');
const requestInput = document.getElementById('requestInput');
const submitRequest = document.getElementById('submitRequest');
const requestNumber = document.getElementById('numberOfRequests');
const messageDisplay = document.getElementById('resultDisplay');


export const CookViews = {
    getPurchaseRequest: () => requestInput.innerText,
    setMessage: (message) => {
        messageDisplay.innerHTML = message;
    },
    setOnSubmitRequest: (callBack) => {
        submitRequest.onclick = callBack;
    },
    setRequestNumber: (number) => {
        requestNumber.innerText = number;
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
                                <button class="btn btn-primary btn-md clearRequestButton">Clear Request</button>
                            </div>
                        </li>`;
        requestList.insertAdjacentHTML("afterend", requestBody);
    },
    setOnClearRequest: (callBack) => {
        clearRequestButton.onclick = callBack;
    }

};




