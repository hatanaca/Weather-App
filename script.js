    
        const apiKey = "d2f20c2ebff5ce43e1767b10f66be29c";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "ºc";
            document.querySelector(".humidity").innerHTML = data.main.humidity +"%"
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"
            
            if(data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png";
            }

            document.querySelector(".weather").style.display = "block"
        }

        searchBtn.addEventListener("click", () =>{
            checkWeather(searchBox.value)
        })
        searchBox.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            checkWeather(searchBox.value);
        }
    });

    const card = document.querySelector(".card");
    const weatherDiv = document.querySelector(".weather");
    let hideWeatherTimeout;

    card.addEventListener("mouseenter", () => {
        clearTimeout(hideWeatherTimeout);
        weatherDiv.style.display = "block";
    });

   /* card.addEventListener("mouseleave", () => {
        hideWeatherTimeout = setTimeout(() => {
            weatherDiv.style.display = "none";
        }, 1000);});
    Função para ocultar a alicação quando não necessária
    */ 
    
        