const cityInputEl = document.getElementById('cityInput')
const searchButton = document.getElementById('searchButton')
const pastSearches = document.getElementById('pastSearches')
const currentWeatherEl = document.getElementById('currentWeather')
const fiveDay = document.getElementById ('5day')

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
    return
})

function getLat (){
    fetch(cityUrl+'city='+cityInputEl.value+'&api_key='+apiKeyLat )
    .then(function getResponse(response) {
        return response.json();
      })

      .then(function (data) {
       // console.log(data);
        coordArray.unshift(data.results[0].location)
        //console.log(coordArray[0])
    })
}

function currentWeather(){
    const city= searchArray[0]
    
    fetch(weatherNowUrl+city+'&appid='+apiKeyWeather)
    .then(function getResponse(response) {
        return response.json();
      })

      .then(function (data) {
        currentArray.unshift(data)
        console.log(currentArray);
      })
      
    fetch(weatherUrl+city+'&units=imperial'+'&appid='+apiKeyWeather)
    .then(function getResponse(response) {
        return response.json();
      })

      .then(function (data) {
        fiveDayArray.unshift(data)
        console.log(fiveDayArray);
      })

    currentCard()
    //fiveDayCard()
}

function pastSearchList() {
    pastSearches.innerHTML = '';

    for (let i = 1; i < 6; i++) {
    const past = searchArray[i]

    const li = document.createElement('li');
    const h3 =  document.createElement('h3')
    li.setAttribute('past', i)
    h3.textContent =  past
    h3.setAttribute ('past', i)


    pastSearches.appendChild(li)
    li.appendChild(h3)
    }

}

function currentCard() {
    currentWeatherEl.innerHTML = '';

   
    const past = currentArray[0]

    const div = document.createElement('div');
    const h3 =  document.createElement('h3')

    h3.textContent =  past.name
    h3.setAttribute ('weatherNow', 0)


    currentWeatherEl.appendChild(div)
    div.appendChild(h3)
    

}

function pastSearchList() {
    pastSearches.innerHTML = '';

    for (let i = 1; i < 6; i++) {
    const past = searchArray[i]

    const li = document.createElement('li');
    const h3 =  document.createElement('h3')
    li.setAttribute('past', i)
    h3.textContent =  past
    h3.setAttribute ('past', i)


    pastSearches.appendChild(li)
    li.appendChild(h3)
    }

}

function pastSearchList() {
    currentWeather.innerHTML = '';

    for (let i = 1; i < 6; i++) {
    const past = searchArray[i]

    const li = document.createElement('li');
    const h3 =  document.createElement('h3')
    li.setAttribute('past', i)
    h3.textContent =  past
    h3.setAttribute ('past', i)


    pastSearches.appendChild(li)
    li.appendChild(h3)
    }

}
function clearSearch(event){
    document.getElementById(cityInputEl.value = '');
};

