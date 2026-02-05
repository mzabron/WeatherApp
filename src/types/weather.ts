interface Location
{
    name: string;
    latitude: number;
    longitude: number;
}
export interface CurrentWeather
{
    time: Date;
    temperature: number;
    windSpeed: number;
    weatherCode: number;
}
export interface HourlyForecast
{
    time: Date[];
    temperature: number[];
}
export interface DailyForecast
{
    date: Date[];
    tempMin: number[];
    tempMax: number[];
}
export interface WeatherData
{
    location: Location;
    currentWeather?: CurrentWeather;
    hourlyForecast?: HourlyForecast;
    dailyForecast?: DailyForecast;
}