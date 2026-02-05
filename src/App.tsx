import "./App.css";
import {useState, useEffect} from 'react';
import { mockWeather } from "./api/mockWeather";
import type {WeatherData} from "./types/weather";
import {CurrentWeatherCard} from "./components/CurrentWeatherCard";
import {HourlyForecastList} from "./components/HourlyForecastList";
import {DailyForecastList} from "./components/DailyForecastList";
 
export default function App()
{
  return(
    <div className = "App">
      <h1>Weather App</h1>
      <hr />
      <FetchWeatherData />
    </div>
  );
}

function FetchWeatherData()
{
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await mockWeather();
        setWeather(data);
      } catch(error) {
        console.log("loading data failed",error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  },[]);

  if(loading){
  return(
    <p>Loading...</p>
  )
  } else if (weather){
    return(
      <div>
        <header>
        <h2>{weather.location.name}</h2>
        </header>
          <div className="section current">
            <h2>Current Weather</h2>
            {weather.currentWeather && <CurrentWeatherCard data={weather.currentWeather} />}
          </div>
          <div className="section hourly">
            <h2>Hourly Forecast</h2>
            {weather.hourlyForecast && <HourlyForecastList forecast={weather.hourlyForecast} />}
          </div>
          <div className="section daily">
            <h2>7-Day Forecast</h2>
            {weather.dailyForecast && <DailyForecastList forecast={weather.dailyForecast} />}
          </div>
      </div>
    )
  }
  return <p>No data available</p>
}