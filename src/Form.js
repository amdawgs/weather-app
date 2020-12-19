import React from "react";
import "./form.css";
import Weather from "./Weather.js";
import "./weather.css";

export default function Form() {
  return (
    <div className="weather-block">
      <form id="form">
        <div className="input-group-prepend">
          <div className="form-group"></div>
          <input
            type="text"
            class="form-control"
            id="searched-city"
            placeholder="Enter a city name"
          />
          <button type="submit" class="btn btn-primary mb-2 search-button w-25">
            Search
          </button>
        </div>
        <Weather />
        <span id="refresh">Last refreshed at 12:44 </span>
      </form>
    </div>
  );
}
