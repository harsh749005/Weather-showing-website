const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '37c9a68164msh52e6a3ebcba1475p16d6f3jsna548d671d83f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getweather = (city)=>{
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(response => response.json())
    .then(response =>{
        console.log(response)
        
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    }
    )
    .catch (err => console.error(err));
}

submit1.addEventListener('click',(e)=>{
    e.preventDefault()
    getweather(city.value);
})
getweather("delhi")