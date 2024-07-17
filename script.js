 /*search engine*/
   function handelSearch(event){
    event.preventDefault();
    let searchInput = document.getElementById('search-input');
    /*let cityEl = document.getElementById('city');
    cityEl.innerHTML = searchInput.value;*/
    searchCity(searchInput.value);
    }

    let form = document.querySelector('#search-form');
    form.addEventListener("submit", handelSearch)
