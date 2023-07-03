import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const apiKey = "fedc6bbcc738251e8d9bea3f6cd50afd";
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("");

  const getWeather = (e) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
  };

  return (
    <div className="container">
      <input
        className="input"
        placeholder="Enter a city..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button className="button" onClick={getWeather}>
        Get Weather
      </button>
      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>
            Welcome to the weather app! Enter a city name to get the current
            weather!
          </p>
        </div>
      ) : (
        <div className="weather-data">
          <p className="city">{weatherData.name}</p>
          <p className='temp'>{Math.round(weatherData.main.temp)}℉</p>
          <p className='weather'>{weatherData.weather[0].main}</p>
        </div>
      )}

      {weatherData.cod === "404" ? (
        <p>City not found.</p>
      ) : (
        <div>
        </div>
      )}
    </div>
  );
}

export default App;
