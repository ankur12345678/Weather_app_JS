const apiKey="640024ef37f2902601f951b14af9ef46";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric&q=`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city_name){
    
    const response = await fetch(apiUrl+city_name);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        const data = await response.json();

        document.querySelector(".city").innerHTML= data.name;

        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "° C";

        document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
        document.querySelector(".wind").innerHTML= data.wind.speed + " Km/hr";
        const weathericon = document.querySelector(".weather-icon");
        if(data.weather[0].main=="Clouds"){
            weathericon.src="./images/clouds.png";
        }else if(data.weather[0].main=="Clear"){
            weathericon.src="./images/clear.png";
        }else if(data.weather[0].main=="Rain"){
            weathericon.src="./images/rain.png";
        }else if(data.weather[0].main=="Drizle"){
            weathericon.src="./images/drizzle.png";
        }else if(data.weather[0].main=="Mist"){
            weathericon.src="./images/mist.png";
        }   
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
