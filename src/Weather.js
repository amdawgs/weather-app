import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function displayWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setCity(response.data.name)
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setLoaded(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
    <div className="current-weather">
      <div className="row">
        <div className="city-wrapper">
          <div className="col-sm current-city" id="display-city">
            {city}
          </div>
          <div className="current-humidity">Humidity: {humidity}%</div>
          <div className="current-wind">Wind: {wind} km/h</div>
        </div>
        <div className="col-sm current-temp">
          <span id="current-temp">{Math.round(temperature)}°C</span>
          <div className="current-hi" id="current-hi">
            High 32°C
          </div>
          <div className="current-lo" id="current-lo">
            Low 25°C
          </div>
        </div>
        <div className="col-sm current-icon-desc">
          <span id="icon">
            <img
              src={icon}
              id="current-icon"
              alt="icon"
            />
          </span>
          <div className="current-desc">{description}</div>
        </div>
      </div>
    </div>
    </div>
  );
  } 
  else 
  { 
    let city = "Tokyo";
    let apiKey = "7c64e1e96bf3ce9fe563b6dcc5b1e9bf";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);

    return "Loading..."
  }
}