let optionOne = document.getElementById('option1');
let optionTwo = document.getElementById('option2');
let optionThree = document.getElementById('option3');
let optionFour = document.getElementById('option4');
let bnbNameInput = document.getElementById('bnbNameInput');
let emailInput = document.getElementById('emailInput');
let addressInput = document.getElementById('addressInput');
let applicationRequestInput = document.getElementById('message');
let hasAgreedToTerms = document.getElementById('termsCheck');
let hasAgreedToBnBRequirment = document.getElementById('bnbCheck');
let submitButton = document.getElementById('submitButton');

export const CustomerRequestViews = {
    isOptionOneSelected: () => optionOne.checked,
    isOptionTwoSelected: () => optionTwo.checked,
    isOptionThreeSelected: () => optionThree.checked,
    isOptionFourSelected: () => optionFour.checked,
    getBnBName: () => bnbNameInput.innerText,
    getemail: () => emailInput.innerText,
    getaddress: () => addressInput.innerText,
    getMessage: () => applicationRequestInput.innerText,
    hasAgreedToTerms: () => hasAgreedToTerms.checked,
    hasAgreedToRequirments: () => hasAgreedToBnBRequirment.checked,
    setOnSubmitClicked: (callBack) => {
        submitButton.onclick = callBack;
    }

};