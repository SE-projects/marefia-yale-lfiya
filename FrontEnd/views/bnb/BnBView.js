export const BnBView = {

    getSearch: () =>searchInput.value,

    setError: (error)=> {
    errorDisplay.innerText = error;
  }
 };

const searchInput = document.getElementById('searchInput');
