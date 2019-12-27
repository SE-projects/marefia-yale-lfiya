const bnbList = document.getElementById('bnbList');
const comboFilter = document.getElementById('servicesComboBox');
const isGym = document.getElementById('optionGym');
const isPool = document.getElementById('optionPool');
const isLakeSide = document.getElementById('optionLake');
const isPlayground = document.getElementById('optionPlay');

export const BnBViews = {
    addBnB: (serviceName, location, category, imageURL, reviews = 0) => {
        const bnbCardHTML = `<div class="d-block d-md-flex listing-horizontal">

                    <a href="#" class="img d-block" style="background-image: url('${imageURL}')">
                        <span class="category">${category}</span>
                    </a>

                    <div class="lh-content">
                        <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                        <h3><a href="#">${serviceName}</a></h3>
                        <p>${location}</p>
                        <p id="numberOfStars">
                        <span>(${reviews} Reviews)</span>
                        </p>


                    </div>

                </div>`;
        bnbList.insertAdjacentHTML("afterend", bnbCardHTML);
    },
    addStar: (numberOfStars) => {
        const fullStar = `<span class="icon-star text-warning"></span>`;
        for (let i = 0; i < numberOfStars; i++) {
            numberOfStars.insertAdjacentHTML("afterend", fullStar)
        }
    },
    clearBnBList:()=>{
        bnbList.innerHTML = "";
    },
    setOnOptionChanged:(callBack)=>{
      comboFilter.onchange = callBack;
    },
    setOnGymClicked:(callBack)=>{
        isGym.onchange = callBack;
    },
    setOnPoolClicked:(callBack)=>{
        isPool.onchange = callBack;
    },
    setOnLakeSideClicked:(callBack)=>{
        isLakeSide.onchange = callBack;
    },
    setOnPlayClicked:(callBack)=>{
        isPlayground.onchange = callBack;
    },
    getSelectedService: () => comboFilter.options[comboFilter.selectedIndex].value,
    isGym: () => isGym.checked,
    isPool: () => isPool.checked,
    isLakeSide: () => isLakeSide.checked,
    isPlayground: () => isPlayground.checked,
};