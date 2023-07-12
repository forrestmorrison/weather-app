import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`
  
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
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {
          data.name != undefined && 
          <div className="bottom">
            <div className="feels">
              <p>Feels Like</p>
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()}</p> : null}
            </div>
            <div className="humidity">
              <p>Humidity</p>
              {data.main ? <p className="bold">{data.main.humidity}</p> : null}
            </div>
            <div className="wind">
              <p>Wind Speed</p>
              {data.main ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null}
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
