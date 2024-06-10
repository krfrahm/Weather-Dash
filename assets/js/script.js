const cityInputEl = document.getElementById('cityInput')
const searchButton = document.getElementById('searchButton')
const pastSearches = document.getElementById('pastSearches')
const currentWeatherEl = document.getElementById('currentWeather')
const fiveDay = document.getElementById ('5day')
const pastButton = document.getElementsByClassName('pastButton')

const apiKeyLat = '3f163666b5dde31e5636f1163162fb15bed1633'
const cityUrl = 'https://api.geocod.io/v1.7/geocode?'

const apiKeyWeather = 'e0df87158f36926d2787e1602dea31bd'
const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='
const weatherNowUrl = 'https://api.openweathermap.org/data/2.5/weather?q='

const searchArray = []
const coordArray = []
const currentArray = []
const fiveDayArray = []



searchButton.addEventListener('click', function buttonClick(){
    searchArray.unshift(cityInputEl.value)
    console.log(searchArray)
    
    getLat()
    clearSearch()
    currentWeather()
    pastSearchList()
    // currentCard()
    // forecastCard()
    return
})

// pastButton.addEventListener('click', function (){
//     searchArray.unshift(pastButton.id)
//     console.log(searchArray)
    
//     getLat()
//     clearSearch()
//     currentWeather()
//     pastSearchList()
//     // currentCard()
//     // forecastCard()
//     return
// })

function getLat (){
    fetch(cityUrl+'city='+cityInputEl.value+'&api_key='+apiKeyLat )
    .then(function getResponse(response) {
        return response.json();
      })

      .then(function (data) {
       // console.log(data);
        coordArray.unshift(data.results[0].location)
     
    })
}

function currentWeather(){
    const city= searchArray[0]
   
    
    fetch(weatherNowUrl+city+'&units=imperial'+'&appid='+apiKeyWeather)
    .then(function getResponse(response) {
        return response.json();
      })

      .then(function (data) {
        currentArray.unshift(data)
        console.log(currentArray);
        console.log(Object.keys(currentArray[0]))
      })

      .then(function (data) {
        currentWeatherEl.innerHTML = '';
    
        const div = document.createElement('div');
        const h3 =  document.createElement('h3');
        const icon = document.createElement('p')
        const temp = document.createElement('p')
        const wind = document.createElement('p')
        const humid = document.createElement('p')
    
        div.className = 'currentCard'
        //h3.setAttribute ('weatherNow', current['name'])
        h3.textContent =  currentArray[0].name
        icon.textContent = currentArray[0].weather[0].icon
        temp.textContent = 'Temp: ' + currentArray[0].main.temp
        wind.textContent = 'Wind: ' + currentArray[0].wind.speed + 'mph'
        humid.textContent = 'Humidity: ' + currentArray[0].main.humidity + '%'
    
    
    
        currentWeatherEl.appendChild(div)
        div.appendChild(h3)
        div.appendChild(icon)
        div.appendChild(temp)
        div.appendChild(wind)
        div.appendChild(humid)
    })
      
    fetch(weatherUrl+city+'&units=imperial'+'&appid='+apiKeyWeather)
    .then(function getResponse(response) {
        return response.json();
      })

      .then(function (data) {
        fiveDayArray.unshift(data)
        console.log(fiveDayArray);

      })
      .then(function (data) {
        fiveDay.innerHTML = '';
    
        const div = document.createElement('div');
        const h3 =  document.createElement('h3');
        const icon = document.createElement('p')
        const temp = document.createElement('p')
        const wind = document.createElement('p')
        const humid = document.createElement('p')
    
        div.className = 'currentCard'
        //h3.setAttribute ('weatherNow', current['name'])
        h3.textContent =  fiveDayArray[0].name
        icon.textContent = currentArray[0].weather[0].icon
        temp.textContent = 'Temp: ' + currentArray[0].main.temp
        wind.textContent = 'Wind: ' + currentArray[0].wind.speed + 'mph'
        humid.textContent = 'Humidity: ' + currentArray[0].main.humidity + '%'
    
    
    
        fiveDay.appendChild(div)
        div.appendChild(h3)
        div.appendChild(icon)
        div.appendChild(temp)
        div.appendChild(wind)
        div.appendChild(humid)
    })
  
}

function pastSearchList() {
    pastSearches.innerHTML = '';

    for (let i = 1; i < 10; i++) {
    const past = searchArray[i]

    const li = document.createElement('button');
    const h3 =  document.createElement('h3');
    const button = document.createElement('button')
    li.className = 'pastButton'
    li.id = past
    li.setAttribute('past', i)
    h3.textContent =  past
    h3.setAttribute ('past', i)


    pastSearches.appendChild(li)
    li.appendChild(h3)
    
    }

}

// function currentCard() {
//     currentWeatherEl.innerHTML = '';
   
//     const current = {
//         name: cityInputEl,
//         // icon: currentArray[1][0].icon,
//         temp: currentArray[3].temp

//     }

//     console.log(current)
//     const div = document.createElement('div');
//     const h3 =  document.createElement('h3');
//     const icon = document.createElement('p')
//     const temp = document.createElement('p')
//     const wind = document.createElement('p')
//     const humid = document.createElement('p')

//     div.className = 'currentCard'
//     //h3.setAttribute ('weatherNow', current['name'])
//     h3.textContent =  current.name
//     icon.textContent = 'weather icon'
//     temp.textContent = 'Temp:'
//     wind.textContent = 'Wind:'
//     humid.textContent = 'Humidity:'



//     currentWeatherEl.appendChild(div)
//     div.appendChild(h3)
//     div.appendChild(icon)
//     div.appendChild(temp)
//     div.appendChild(wind)
//     div.appendChild(humid)
// }

// function forecastCard() {
//     fiveDay.innerHTML = '';
   
//     for (let i = 1; i < 6; i++) {
//         const days = fiveDayArray[i]

//     const div = document.createElement('div');
//     const h3 =  document.createElement('h3');
//     const icon = document.createElement('p')
//     const temp = document.createElement('p')
//     const wind = document.createElement('p')
//     const humid = document.createElement('p')
//     div.className = 'currentCard'
//     //h3.setAttribute ('weatherNow', current['name'])
//     h3.textContent =  'Tomorrow'
//     icon.textContent = days.list[0]
//     temp.textContent = 'Temp:'
//     wind.textContent = 'current wind'
//     humid.textContent = 'current humidity'



//     fiveDay.appendChild(div)
//     div.appendChild(h3)
//     div.appendChild(icon)
//     div.appendChild(temp)
//     div.appendChild(wind)
//     div.appendChild(humid)
//     }
// }



function clearSearch(event){
    document.getElementById(cityInputEl.value = '');
};

