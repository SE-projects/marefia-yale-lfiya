const extraTowels = document.getElementById('extraTowels');
const breakFastInBed = document.getElementById('breakFastInBed');
const bnbNameInput = document.getElementById('bnbNameInput');
const emailInput = document.getElementById('emailInput');
const addressInput = document.getElementById('addressInput');
const applicationRequestInput = document.getElementById('message');
const hasAgreedToTerms = document.getElementById('termsCheck');
const hasAgreedToBnBRequirement = document.getElementById('bnbCheck');
const submitButton = document.getElementById('submitButton');
const errorDisplay = document.getElementById('errorDisplay');


export const CustomerRequestViews = {
    isExtraTowelSelected: () => extraTowels.checked,
    isBreakFastSelected: () => breakFastInBed.checked,
    getBnBName: () => bnbNameInput.innerText,
    getEmail: () => emailInput.innerText,
    getAddress: () => addressInput.innerText,
    getMessage: () => applicationRequestInput.innerText,
    hasAgreedToTerms: () => hasAgreedToTerms.checked,
    hasAgreedToRequirments: () => hasAgreedToBnBRequirement.checked,
    setOnSubmitClicked: (callBack) => {
        submitButton.onclick = callBack;
    },
    setMessage: (error) => {
        errorDisplay.innerHTML = error;
    }

};