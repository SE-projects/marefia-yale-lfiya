let numberOfRequests = document.getElementById('numberOfRequests');
let acceptButton = document.getElementById('acceptRequest');
let rejectButton = document.getElementById('rejectRequest');

export const InvestigatorViews = {
    addRequest: (name, details) => {
        let requestHTML = `<li>
								<div class="timeline-badge"><em class="glyphicon glyphicon-pushpin"></em></div>
								<div class="timeline-panel">
									<div class="timeline-heading">
										<h4 class="timeline-title">${name}</h4>
									</div>
									<div class="timeline-body">
										<p>${details}</p>
									</div>
									<div>
										<button type="button" class="btn btn-sm btn-success" id="acceptRequest">Accept</button>
										<button type="button" class="btn btn-sm btn-danger" id="rejectRequest">Reject</button>
									</div>
								</div>
							</li>`
    },
    setRequestNumber: (requestNumber) => {
        numberOfRequests.innerText = requestNumber;
    },
    setOnAcceptClicked: (callBack) => {
        acceptButton.onclick = callBack;
    },
    setOnRejectClicked: (callBack) => {
        rejectButton.onclick = callBack;
    },
};