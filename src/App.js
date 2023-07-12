import { useState } from "react";
import axios from "axios";

function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=austin&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Austin</p>
          </div>
          <div className="temp">
            <h1>100°F</h1>
          </div>
          <div className="description">
            <p>Clear</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>102°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>12 mph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
