import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="current-weather">
      <div className="row">
        <div className="city-wrapper">
          <div className="col-sm current-city" id="display-city">
            Tokyo
          </div>
          <div className="current-humidity">Humidity: 58%</div>
          <div className="current-wind">Wind: 2km/h</div>
        </div>
        <div className="col-sm current-temp">
          <span id="current-temp">19°C</span>
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
              src="https://openweathermap.org/img/wn/01d@2x.png"
              id="current-icon"
            />
          </span>
          <div className="current-desc">Rain</div>
        </div>
      </div>
    </div>
  );
}
