import 'dotenv/config';

document.addEventListener('DOMContentLoaded', function () {
    // Carousel Play/Pause button
    const carousel = document.querySelector('#homeCarousel');
    const carouselButton = document.querySelector('#carouselButton');
    const icon = carouselButton.querySelector('i');

    carouselButton.addEventListener('click', function () {
        if (icon.classList.contains('fa-pause')) {
            $(carousel).carousel('pause');
            icon.classList.replace('fa-pause', 'fa-play');
        } else {
            $(carousel).carousel('cycle');
            icon.classList.replace('fa-play', 'fa-pause');
        }
    });

    // Fetch and display weather
    fetchWeather();
});

async function fetchWeather() {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const city = 'Nairobi';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
    }
}

function displayWeather(weatherData) {
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;

    const weatherElement = document.getElementById('weather');
    if (weatherElement) {
        weatherElement.innerHTML = `
            <img src="https://openweathermap.org/img/w/${iconCode}.png" alt="${description}" />
            <p>Temperature: ${temperature}°C</p>
            <p>Condition: ${description}</p>
        `;
    }
}
