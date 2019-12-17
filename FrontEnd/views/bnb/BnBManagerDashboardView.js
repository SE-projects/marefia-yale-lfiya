const purchaserOrders = document.getElementById('numberOfPurchaserOrder');
const alerts = document.getElementById('numberOfAlerts');
const customer = document.getElementById('numberOfCustomers');
const bnbViews = document.getElementById('numberOfBnBViews');
const customerRequestList = document.getElementById('customerRequestList');
const cookRequestList = document.getElementById('cookRequestList');

export const BnBViews = {
    setPurchaserOrders: (value) => {
        purchaserOrders.innerHTML = value;
    },
    setAlerts: () => {
        alerts.innerHTML = value;
    },
    setCustomer: () => {
        customer.innerHTML = value;
    },
    setBnBViews: () => {
        bnbViews.innerHTML = value;
    },
    addCustomerRequest: (name, body) => {
        const customerRequestHTML = ` <li class="right clearfix">
                            <div class="chat-body clearfix">
                                <div class="header"><strong class="primary-font">${name}</strong>
                                    <small class="text-muted">32 mins ago</small>
                                </div>
                                <p>${body}</p>
                            </div>
                        </li>`;
        customerRequestList.insertAdjacentHTML("afterend", customerRequestHTML);
    },
    addCookRequest: (title, body) => {
        const cookRequestHTMl = ` <li>
                            <div class="timeline-badge"><em class="glyphicon glyphicon-pushpin"></em></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">${title}</h4>
                                </div>
                                <div class="timeline-body">
                                    <p>${body}</p>
                                </div>
                            </div>
                        </li>`;
        cookRequestList.insertAdjacentHTML("afterend", cookRequestHTMl);
    }
};