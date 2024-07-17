  function searchCity(city){   
    let apiKey ="43c1b8ao5e84tb2dd9c11bcc70e4f1d2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   /* console.log(apiKey);
     console.log(apiUrl);*/
    axios.get(apiUrl).then(refreshWeather);
    
}

   function handelSearch(event){
    event.preventDefault();
    let searchInput = document.getElementById('search-input');
    searchCity(searchInput.value);
    }

    let form = document.querySelector('#search-form');
    form.addEventListener("submit", handelSearch)
