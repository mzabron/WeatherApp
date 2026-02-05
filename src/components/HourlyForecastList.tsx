import type {HourlyForecast} from "../types/weather";

interface Props{
    forecast : HourlyForecast;
}

export function HourlyForecastList({forecast} : Props){
    const {time, temperature} = forecast;
    const count = Math.min(time.length, temperature.length);

    return (
        <div>
            {time.slice(0,count).map((hour, index) => (
                <div key={index}>
                    <p>{hour.toLocaleString()}</p>
                    <p>{temperature[index]} °C</p>
                </div>
            ))}
        </div>
    );
}