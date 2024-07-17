function refreshWeather(response){
  let tempEl = document.getElementById('current-temp');
  let temp = response.data.temperature.current;
  tempEl.innerHTML = Math.round(temp);
  console.log(temp);

  let cityEl = document.getElementById('city');
  cityEl.innerHTML = response.data.city;
  console.log(response.data.city);

  let humidityEl = document.querySelector('.humidity');
  let humidity = response.data.temperature.humidity;
  humidityEl.innerHTML = `${humidity}`;

  let windEl = document.querySelector('.wind');
  let wind = response.data.wind.speed;
  windEl.innerHTML = wind;
  console.log("wind :"+ wind);

  let conditionEl = document.querySelector('.condition');
  let condition= response.data.condition.description;       
  conditionEl.innerHTML = condition;
  console.log("condition:"+ condition);

  let timeEl = document.querySelector('.time');
  let date = new Date(response.data.time*1000);
  timeEl.innerHTML = formatDate(date);


  let iconEl =document.querySelector('.sky-icon');
 iconEl.innerHTML =`<img src="${response.data.condition.icon_url}" width="130px">`;
}

function formatDate(date){ 
  let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = dayNames[date.getDay()];
  
  minutes > 10? `${minutes}` : `0${minutes}`;
  hours > 10? `${hours}` : `0${hours}`;

  return`${day}: ${hours}:${minutes}`;
  }
 
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
