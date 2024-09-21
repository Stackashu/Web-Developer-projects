// hey guys her is the link for  the weather api
// which will work for just 20-30 days adn you must make your account on this to get your personal API Key
// use this link for weather api = "https://openweathermap.org/"



// removed my apiKey add yours here
const apiKey = ""
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"

let areaInput = document.querySelector("input")
let search = document.querySelector("button")

// adding this function undr async method to make a combination with the code
// it will wait for the data from the server which we have called from the api

async function viewWeather(city) {

    const reponse = await fetch( apiUrl + `&appid=${apiKey}` + `&q=${city}`);
    var weatherData = await reponse.json();

    console.log(weatherData)

// changing the weather data according to the place
    document.querySelector(".place").innerHTML=weatherData.name
    document.querySelector(".temp").innerHTML= Math.floor(weatherData.main.temp) + "°C"
    document.querySelector(".humy").innerHTML=weatherData.main.humidity + " %"
    document.querySelector(".windy").innerHTML=weatherData.wind.speed + " km/h"

    let changePic = document.querySelector(".wIcon")
    let weatherPic = weatherData.weather[0].main
    console.log(weatherPic)
    if(weatherPic == "Clouds"){
     changePic.src = "cloud.png";
    }
    if(weatherPic == "Clear"){
      changePic.src = "sunny.png"
    }
    if(weatherPic == "Rain"){
    changePic.src = "rain.png"
    }
    if(weatherPic == "Drizzle"){
      changePic.src = "drizzle.png"
    }
    if(weatherPic == "Mist"){
     changePic.src = "mist.png"
    }
    // earasing the input field after searching
    areaInput.value = " "

    
    
}

// calling the function using eventLister due to which the funtion will run after 
// clicking on the search button
search.addEventListener("click",function(){
    viewWeather(areaInput.value)
})
