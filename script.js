// From Open Weather dashboard
const key = "a9f93c8db640f8d2581145d2580c7040"

// Get token from Open Weather
const userWeather = async (e) => {
    // Making a fetch request
    e.preventDefault();
    let city = e.target.city.value
    const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`, {
        method: 'GET',
    })
    const data = await response.json()
    console.log(data)

    document.getElementById('output_high').innerHTML = data.main.temp_max
    document.getElementById('output_low').innerHTML = data.main.temp_min
    document.getElementById('output_forecast').innerHTML = data.weather[0].main
    document.getElementById('output_humidity').innerHTML = data.main.humidity
    
};

document.getElementById('search').addEventListener('submit', userWeather)



