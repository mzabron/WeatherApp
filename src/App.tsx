import "./App.css";
import {useState, useEffect} from 'react';
import { mockWeather } from "./api/mockWeather";
import type {WeatherData} from "./types/weather";

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
      <p>{weather.location.name}</p>
    )
  }
  return <p>No data available</p>
}