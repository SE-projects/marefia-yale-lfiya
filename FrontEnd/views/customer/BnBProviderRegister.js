const managerFullName = document.getElementById('managerNameInput');
const bnbName = document.getElementById('bnbNameInput');
const email = document.getElementById('emailInput');
const address = document.getElementById('addressInput');
const applicationLetter = document.getElementById('letterInput');
const hasAgreedToTerm = document.getElementById('termsCheck');
const hasAgreedToRequirement = document.getElementById('standardCheck');
const submitButton = document.getElementById('submitButton');
const termsOfService = document.getElementById('terms');
const standardRequirement = document.getElementById('standard');

export const BnBProviderViews = {
    getManagerFullName: () => managerFullName.innerHTML,
    getBnBName: () => bnbName.innerHTML,
    getemail: () => email.innerHTML,
    getaddress: () => address.innerHTML,
    getApplicationLetter: () => applicationLetter.innerHTML,
    hasAgreedToTerms: () => hasAgreedToTerm.checked,
    hasAgreedToRequirment: () => hasAgreedToRequirement.checked,
    setOnSubmit: (callBack) => {
        submitButton.onclick = callBack;
    },
    addTermsOfService: (terms) => {
        termsOfService.innerHTML = terms;
    },
    addStandardRequirment: (standard) => {
        standardRequirement.innerHTML = standard;
    }

};