let numberOfRequest = document.getElementById('numberOfRequest');
let requestList = document.getElementById('requestList');
let clearRequestButton = document.getElementById('clearRequest');

export const PurchaserViews = {
    setRequestNumber: (number) => {
        numberOfRequest.innerText = number;
    },
    addNewRequest: (requester, body) => {
        let requestHTML = `<li class="right clearfix"><span class="chat-img pull-left">
								</span>
								<div class="chat-body clearfix">
									<div class="header"><strong class="primary-font">${requester}</strong> <small class="text-muted">32 mins ago</small></div>
									<p>${body}</p>
								</div>
								<div>
									<br>
									<button class="btn btn-primary btn-md" id="clearRequest" id="clearRequestButton">Clear Request</button>
								</div>
							</li>`;
        requestList.insertAdjacentHTML("afterend", requestHTML);
    },
    setOnClearRequestClicked: (callBack) => {
        clearRequestButton.onclick = callBack;
    }
};