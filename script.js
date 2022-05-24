// From Open Weather dashboard
const key = "a9f93c8db640f8d2581145d2580c7040"

// Get token from Open Weather
const userWeather = async () => {
    // Making a fetch request
    const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=${key}&units=imperial`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const data = await response.json()
    document.getElementById('output').innerHTML = data
    
};

document.getElementById('search').addEventListener('click', userWeather)