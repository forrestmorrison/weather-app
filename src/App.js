import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          type="text"
          placeholder="Enter Location"
        />
      </div>
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
            <p>Feels Like</p>
            <p className="bold">102°F</p>
          </div>
          <div className="humidity">
            <p>Humidity</p>
            <p className="bold">20%</p>
          </div>
          <div className="wind">
            <p>Wind Speed</p>
            <p className="bold">12 mph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
