const cityInputEl = document.getElementById('cityInput')
const searchButton = document.getElementById('searchButton')
const pastSearches = document.getElementById('pastSearches')
const currentWeatherEl = document.getElementById('currentWeather')
const fiveDay = document.getElementById ('fiveDay')
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
let date = new Date().toLocaleDateString();




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
        const code = currentArray[0].weather[0].icon
        const toUnicode = code => String.fromCodePoint(parseInt(code, 16))
        console.log(toUnicode(code))
    
        const div = document.createElement('div');
        const h3 =  document.createElement('h3');
        const icon = document.createElement('p')
        const temp = document.createElement('p')
        const wind = document.createElement('p')
        const humid = document.createElement('p')
    
        div.className = 'currentCard'
        //h3.setAttribute ('weatherNow', current['name'])
        h3.textContent =  currentArray[0].name
        icon.textContent = toUnicode(code)
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
    
        const day1 = document.createElement('div');
        const h3 =  document.createElement('h3');
        const icon = document.createElement('p')
        const temp = document.createElement('p')
        const wind = document.createElement('p')
        const humid = document.createElement('p')
    
        day1.className = 'fiveDayCard'
        day1.id = 'day1'
        //h3.setAttribute ('weatherNow', current['name'])
        h3.textContent =  date
        h3.className = 'fiveDayHeader'
        icon.textContent = currentArray[0].weather[0].icon
        temp.textContent = 'Temp: ' + fiveDayArray[0].list[5].main.temp
        wind.textContent = 'Wind: ' + fiveDayArray[0].list[5].wind.speed + 'mph'
        humid.textContent = 'Humidity: ' + fiveDayArray[0].list[5].main.humidity + '%'
    
        fiveDay.appendChild(day1)
        day1.appendChild(h3)
        day1.appendChild(icon)
        day1.appendChild(temp)
        day1.appendChild(wind)
        day1.appendChild(humid)
        
    })
    .then(function (data) {
    
        const day2 = document.createElement('div');
        const h3 =  document.createElement('h3');
        const icon = document.createElement('p')
        const temp = document.createElement('p')
        const wind = document.createElement('p')
        const humid = document.createElement('p')
    
        day2.className = 'fiveDayCard'
        day2.id = 'day2'
        //h3.setAttribute ('weatherNow', current['name'])
        h3.textContent =  date
        h3.className = 'fiveDayHeader'
        icon.textContent = currentArray[0].weather[0].icon
        temp.textContent = 'Temp: ' + fiveDayArray[0].list[13].main.temp
        wind.textContent = 'Wind: ' + fiveDayArray[0].list[13].wind.speed + 'mph'
        humid.textContent = 'Humidity: ' + fiveDayArray[0].list[13].main.humidity + '%'
    
        fiveDay.appendChild(day2)
        day2.appendChild(h3)
        day2.appendChild(icon)
        day2.appendChild(temp)
        day2.appendChild(wind)
        day2.appendChild(humid)
        
    })
    .then(function (data) {
    
        const day3 = document.createElement('div');
        const h3 =  document.createElement('h3');
        const icon = document.createElement('p')
        const temp = document.createElement('p')
        const wind = document.createElement('p')
        const humid = document.createElement('p')
    
        day3.className = 'fiveDayCard'
        day3.id = 'day3'
        //h3.setAttribute ('weatherNow', current['name'])
        h3.textContent =  fiveDayArray[0].list[21].dx_txt
        h3.className = 'fiveDayHeader'
        icon.textContent = currentArray[0].weather[0].icon
        temp.textContent = 'Temp: ' + fiveDayArray[0].list[21].main.temp
        wind.textContent = 'Wind: ' + fiveDayArray[0].list[21].wind.speed + 'mph'
        humid.textContent = 'Humidity: ' + fiveDayArray[0].list[21].main.humidity + '%'
    
        fiveDay.appendChild(day3)
        day3.appendChild(h3)
        day3.appendChild(icon)
        day3.appendChild(temp)
        day3.appendChild(wind)
        day3.appendChild(humid)
        
    })
    .then(function (data) {
    
        const day4 = document.createElement('div');
        const h3 =  document.createElement('h3');
        const icon = document.createElement('p')
        const temp = document.createElement('p')
        const wind = document.createElement('p')
        const humid = document.createElement('p')
    
        day4.className = 'fiveDayCard'
        day4.id = 'day4'
        //h3.setAttribute ('weatherNow', current['name'])
        h3.textContent =  fiveDayArray[0].list[29].dx_txt
        h3.className = 'fiveDayHeader'
        icon.textContent = currentArray[0].weather[0].icon
        temp.textContent = 'Temp: ' + fiveDayArray[0].list[29].main.temp
        wind.textContent = 'Wind: ' + fiveDayArray[0].list[29].wind.speed + 'mph'
        humid.textContent = 'Humidity: ' + fiveDayArray[0].list[29].main.humidity + '%'
    
        fiveDay.appendChild(day4)
        day4.appendChild(h3)
        day4.appendChild(icon)
        day4.appendChild(temp)
        day4.appendChild(wind)
        day4.appendChild(humid)
        
    })

    .then(function (data) {
    
        const day5 = document.createElement('div');
        const h3 =  document.createElement('h3');
        const icon = document.createElement('p')
        const temp = document.createElement('p')
        const wind = document.createElement('p')
        const humid = document.createElement('p')
    
        day5.className = 'fiveDayCard'
        day5.id = 'day5'
        //h3.setAttribute ('weatherNow', current['name'])
        h3.textContent =  fiveDayArray[0].list[37].dx_txt
        h3.className = 'fiveDayHeader'
        icon.textContent = currentArray[0].weather[0].icon
        temp.textContent = 'Temp: ' + fiveDayArray[0].list[37].main.temp
        wind.textContent = 'Wind: ' + fiveDayArray[0].list[37].wind.speed + 'mph'
        humid.textContent = 'Humidity: ' + fiveDayArray[0].list[37].main.humidity + '%'
    
        fiveDay.appendChild(day5)
        day5.appendChild(h3)
        day5.appendChild(icon)
        day5.appendChild(temp)
        day5.appendChild(wind)
        day5.appendChild(humid)
        
    })
  
  
}

function pastSearchList() {
    pastSearches.innerHTML = '';

    for (let i = 1; i < 6; i++) {
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

