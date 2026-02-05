import type {DailyForecast} from "../types/weather"

interface Props{
    forecast: DailyForecast;
}

export function DailyForecastList({forecast} : Props){
    const {date, tempMin, tempMax} = forecast;
    const count = Math.min(date.length, tempMin.length, tempMax.length);

    return(
        <div>
            {date.slice(0,count).map((day, index) => (
                <div key={index}>
                    <p>{day.toLocaleDateString(undefined, { weekday: 'short' })} - Min: {tempMin[index]} °C / Max: {tempMax[index]} °C</p>
                </div>
            ))}
        </div>
    );
}