import type {CurrentWeather} from "../types/weather";

interface Props {
    data : CurrentWeather;
}

export function CurrentWeatherCard({ data }: Props){
    return(
        <div>
            <p>Date: {data.time.toLocaleString()}</p>
            <p>Temperature: {data.temperature}</p>
            <p>Wind speed: {data.windSpeed}</p>
            <p>Weather code: {data.weatherCode}</p>
        </div>
    );  
}
