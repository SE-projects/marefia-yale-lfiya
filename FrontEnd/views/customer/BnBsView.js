let bnbList = document.getElementById('bnbList');
let comboFilter = document.getElementById('comboFilter');
let isGym = document.getElementById('optionGym');
let isPool = document.getElementById('optionPool');
let isLakeSide = document.getElementById('optionLake');
let isPlayground = document.getElementById('optionPlay');

export const BnBViews = {
    addBnB: (serviceName, location, category, reviews, imageURL) => {
        const bnbCardHTML = `<div class="d-block d-md-flex listing-horizontal">

                    <a href="#" class="img d-block" style="background-image: url('${imageURL}')">
                        <span class="category">${category}</span>
                    </a>

                    <div class="lh-content">
                        <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                        <h3><a href="#">${serviceName}</a></h3>
                        <p>${location}</p>
                        <p>
                            <span class="icon-star text-warning"></span>
                            <span class="icon-star text-warning"></span>
                            <span class="icon-star text-warning"></span>
                            <span class="icon-star text-warning"></span>
                            <span class="icon-star text-secondary"></span>
                            <span>(${reviews} Reviews)</span>
                        </p>


                    </div>

                </div>`
        bnbList.insertAdjacentHTML("afterend", bnbCardHTML);
    },
    getSelectedFilter: () => comboFilter.options[comboFilter.selectedIndex].value,
    isGym: () => isGym.checked,
    isPool: () => isPool.checked,
    isLakeSide: () => isLakeSide.checked,
    isPlayground: () => isPlayground.checked,
};